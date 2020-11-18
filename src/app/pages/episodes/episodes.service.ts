import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { API } from 'src/app/shared/constants/constants'
import { IGetEpisodes } from './models/episodes.interface'

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  constructor(private http: HttpClient) {}

  private readonly API: string = `${API}/episode`
  private nextLink = ''
  private response = new BehaviorSubject<IGetEpisodes>(null)

  public getEpisodes({ next = false } = {}): Observable<IGetEpisodes> {
    if (!next && this.response?.value) {
      return of(this.response.value)
    }

    const url = next ? this.nextLink : this.API
    return this.http.get<IGetEpisodes>(url).pipe(
      tap(({ results, info }) => {
        this.nextLink = info.next
        this.response.next({ results, info })
      }),
      catchError((err) => {
        console.error('EpisodesService:', err)
        return []
      })
    )
  }
}

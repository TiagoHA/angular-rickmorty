import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
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

  public getEpisodes({ next = false } = {}): Observable<IGetEpisodes> {
    const url = next ? this.nextLink : this.API
    return this.http.get<IGetEpisodes>(url).pipe(
      tap(({ info }) => {
        this.nextLink = info?.next
      }),
      catchError((err) => {
        console.error('EpisodesService:', err)
        return []
      })
    )
  }
}

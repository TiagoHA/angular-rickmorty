import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'
import { API } from 'src/app/shared/constants/constants'
import { IInfo } from 'src/app/shared/models/info.interface'
import { IEpisode } from './models/eposides.interface'

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  constructor(private http: HttpClient) {}

  private readonly API: string = `${API}/episode`
  private nextLink = ''
  private response = new BehaviorSubject<{ info: IInfo; results: IEpisode[] }>(
    null
  )

  public getEpisodes({ next = false } = {}): Observable<{
    info: IInfo
    results: IEpisode[]
  }> {
    if (!next && this.response?.value) {
      return of(this.response.value)
    }

    const url = next ? this.nextLink : this.API
    return this.http.get<{ info: IInfo; results: IEpisode[] }>(url).pipe(
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

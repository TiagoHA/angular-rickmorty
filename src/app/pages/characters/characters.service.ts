import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

import { API } from 'src/app/shared/constants/constants'
import { IGetCharacters } from './models/characters.interface'

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  private readonly API: string = `${API}/character`
  private nextLink = ''

  public getCharacters({ next = false } = {}): Observable<IGetCharacters> {
    const url = next ? this.nextLink : this.API
    return this.http.get<IGetCharacters>(url).pipe(
      tap(({ info }) => {
        this.nextLink = info?.next
      }),
      catchError((err) => {
        console.error('CharactersService:', err)
        return []
      })
    )
  }
}

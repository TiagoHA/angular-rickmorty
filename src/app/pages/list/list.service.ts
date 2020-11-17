import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

export interface IEpisode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

export interface ICharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

export interface IInfo {
  count: number
  pages: 3
  next: string
  prev: string | null
}

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  private readonly API: string = 'https://rickandmortyapi.com/api/episode'

  getEpisodes(): Observable<{ info: IInfo; results: IEpisode[] }> {
    return this.http.get<{ info: IInfo; results: IEpisode[] }>(this.API).pipe(
      tap(({ results }) => {
        console.log(`fetched episodes ${JSON.stringify(results)}`)
        return results
      }),
      catchError((err) => {
        console.log('Erro: ', err)
        return []
      })
    )
  }
}

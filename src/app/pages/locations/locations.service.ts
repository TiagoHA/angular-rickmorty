import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

import { API } from 'src/app/shared/constants/constants'
import { IGetLocation } from './models/locations.interface'

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor(private http: HttpClient) {}

  private readonly API: string = `${API}/location`
  private nextLink = ''

  public getLocations({ next = false } = {}): Observable<IGetLocation> {
    const url = next ? this.nextLink : this.API

    return this.http.get<IGetLocation>(url).pipe(
      tap(({ info }) => {
        this.nextLink = info.next
      }),
      map(AddQtResidents),
      catchError((err) => {
        console.error('LocationsService:', err)
        return []
      })
    )
  }
}

function AddQtResidents(res: IGetLocation) {
  return {
    ...res,
    results: res.results.map((loc) => ({
      ...loc,
      qttResidents: loc?.residents?.length ?? 0,
    })),
  }
}

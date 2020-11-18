import { IInfo } from 'src/app/shared/models/info.interface'

export interface ILocation {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
  qttResidents?: number
}

export interface IGetLocation {
  info: IInfo
  results: ILocation[]
}

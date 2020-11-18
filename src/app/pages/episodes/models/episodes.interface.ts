import { IInfo } from 'src/app/shared/models/info.interface'

export interface IEpisode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

export interface IGetEpisodes {
  info: IInfo
  results: IEpisode[]
}

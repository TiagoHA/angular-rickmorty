import { IInfo } from 'src/app/shared/models/info.interface'

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

export interface IGetCharacters {
  info: IInfo
  results: ICharacter[]
}

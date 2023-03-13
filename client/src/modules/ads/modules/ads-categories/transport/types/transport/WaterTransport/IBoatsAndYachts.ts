import { IJetSkis } from './IJetSkis'

export interface IBoatsAndYachts extends IJetSkis {
  length: number | null
  width: number | null
  material: string | null
  draft: number | null
}
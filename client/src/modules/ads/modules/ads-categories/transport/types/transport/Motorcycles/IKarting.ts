import { ad } from "../../../../../../types/ads"

export interface IKarting extends ad{
  VIN: string | null 
  condition: string | null
  mileage: number | null
}
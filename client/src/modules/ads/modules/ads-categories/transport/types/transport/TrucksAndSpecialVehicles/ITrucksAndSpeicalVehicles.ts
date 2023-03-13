import { ad } from "../../../../../../types/ads"

export interface ITrucksAndSpeicalVehicles extends ad{
  VIN: string | null 
  condition: string | null
  mileage: number | null
}
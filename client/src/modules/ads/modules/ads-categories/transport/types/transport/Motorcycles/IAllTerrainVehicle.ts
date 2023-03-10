import { IATVsAndBuggies } from "./IATVsAndBuggies";

export interface IAllTerrainVehicle extends IATVsAndBuggies {
  loadCapacity?: number | null
}
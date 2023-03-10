import { IAllTerrainVehicle } from "./IAllTerrainVehicle";

export interface IMopenAndScooter extends IAllTerrainVehicle {
  transmission: string | null
  cooling: string | null
  VINOwners: string | null
  additionalOptions: string | null
}
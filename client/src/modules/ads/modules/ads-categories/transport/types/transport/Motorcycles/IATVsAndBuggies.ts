import { ISnowmobiles } from "./ISnowmobiles";

export interface IATVsAndBuggies extends ISnowmobiles{
  typeOfDrive?: string | null
  fuelSupply?: string | null
}
import { IKarting } from "./IKarting";

export interface ISnowmobiles extends IKarting {
  brand: string | null
  type: string | null
  yearOfIssue: number | null
  engineType: string | null 
  power: number | null | void | void
  engineCapacity: number | null | void
  numberOfCycles: number | null
  maxPassengers?: number | null | void
  availability: string | null
  trackWidth?: number | null | void
}
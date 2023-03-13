import { IMotorboatsAndMotors } from "./IMotorboatsAndMotors";

export interface IJetSkis extends IMotorboatsAndMotors{
  brand: string | null
  yearOfIssue: number | null
  maxPassengers: number |null
  power?: number | null
  engineCapacity?: number | null
  trailerIncluded?: boolean | null
}
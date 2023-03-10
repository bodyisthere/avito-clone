import { IMopenAndScooter } from "./IMopenAndScooter";

export interface IMotorCycles extends IMopenAndScooter{
  numberOfCylinders: number | null
  cylinderArrangement: string | null
}
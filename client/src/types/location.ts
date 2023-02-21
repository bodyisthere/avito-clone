export interface ICities {
  _id: string,
  region: string,
  city: string,
  district?: string[] | [],
  districts?: string[] | [],
  metro?: string[] | [],
  metroes?: string[] | [],
}
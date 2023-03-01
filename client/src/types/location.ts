export interface ICities {
  isPopular: boolean,
  _id: string,
  region: string,
  city: string,
  districts: string[] | [],
  metro: string[] | [],
}
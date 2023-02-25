export interface IGenLocation {
  setIsLocationOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICitiesResponse {
  _id: string,
  region: string,
  city: string,
  district?: string[] | [],
  districts?: string[] | [],
  metro?: string[] | [],
  metroes?: string[] | [],
}

export interface ICities {
  districts?: string[] | [],
  metroes?: string[] | [],
}

export interface ICategories {
  setIsCategoriesOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICategoryItem {
  activeCategory: number | null;
  setActiveCategory: React.Dispatch<React.SetStateAction<number | null>>;
}

export type TCategory = {
  title: string
  subchapter: string[]
}

export interface ISubchapter {
  subchapter: TCategory
}

export interface ILocalLocation {
  setIsMetroOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// export interface ILocation {
//   _id: string,
//   region: string,
//   city: string,
// }
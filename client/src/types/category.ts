export interface ICategory {
  _id: string,
  category: string,
  chapter: {title: string, subchapter: string[]}[]
}
export interface ICategoryChoose {
  setStep: React.Dispatch<React.SetStateAction<"category-choose" | "category-choosen">>
}

export interface ICategoryChoosen {

}

export interface IDamagedPositions {
  position: 'сзади' | 'спереди' | 'слева' | 'справа',
  id: string,
  img: string,
  places: {title: string, points: {id: string, title: string}[], id: string, class: string}[]
}

export interface ICarConditionFBLR {
  data: IDamagedPositions
  setActiveSlideCategory: React.Dispatch<React.SetStateAction<string | null>>
  activeSlideCategory: string | null
}


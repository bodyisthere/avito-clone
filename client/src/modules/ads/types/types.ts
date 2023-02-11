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
  activeSpans: string[]
  damagedPlaces: {
    position: string;
    id: string;
    places: {
        title: string;
        id: string;
        points: string[] | null;
    }[];
  }[]
  data: IDamagedPositions
  setActiveSlideCategory: React.Dispatch<React.SetStateAction<any>>
  activeSlideCategory: any
}


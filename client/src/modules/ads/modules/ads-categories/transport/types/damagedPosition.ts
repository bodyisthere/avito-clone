export interface IPoint {
  title: string;
  points: {
      id: string;
      title: string;
  }[];
  id: string;
  class: string;
}

export interface IDamagedPositions {
  position: 'сзади' | 'спереди' | 'слева' | 'справа',
  id: string,
  img: string,
  places: {title: string, points: {id: string, title: string}[], id: string, class: string}[]
}


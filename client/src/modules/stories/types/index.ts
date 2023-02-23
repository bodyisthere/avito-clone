export type IStories = {
  _id: string;
  title: string;
  cover: string;
  slides: string[];
  __v: number;
}

export interface IStory extends IStories{
  setActiveStory: React.Dispatch<React.SetStateAction<string | null>>,
  isWatch: boolean;
}

export interface IStoryOpen extends IStory {
  allStoriesLength: number;
  index: number;
  stories: IStories[]
}

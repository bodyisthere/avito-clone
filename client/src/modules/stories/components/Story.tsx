import React, { FC, useState } from 'react';

import { bodyScrollBlock } from '../../../utils/bodyScrollBlock';

interface IStory {
  setActiveStory: React.Dispatch<React.SetStateAction<string | null>>,
  title: string;
  isWatch: boolean;
  slides: {
    img: string;
  }[];
  id: string;
}

export const Story: FC<IStory> = ({ setActiveStory, title, id, isWatch, slides }) => {

  return (
    <div className="story" onClick={() => {setActiveStory(id); bodyScrollBlock(document)}}>
      <div className="story__title">{title}</div>
      <img src="" alt="" className="story__img" />
      {isWatch ? '' : <span className="story__condition"></span>}
    </div>
  )
}
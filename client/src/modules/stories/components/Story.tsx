import React, { FC, useState } from 'react';

import { bodyScrollBlock } from '../../../utils/bodyScrollBlock';
import { IStory } from '../types';

export const Story: FC<IStory> = ({ setActiveStory, title, _id, isWatch, slides, cover }) => {

  return (
    <div className="story" onClick={() => {setActiveStory(_id); bodyScrollBlock(document)}}>
      <div className="story__title">{title}</div>
      <img src={`http://localhost:5000/uploads/${cover}`} alt="" className="story__img" />
      {isWatch ? '' : <span className="story__condition"></span>}
    </div>
  )
}
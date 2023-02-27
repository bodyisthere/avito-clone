import React, { FC, useState } from 'react';

import { bodyScrollBlock } from '../../../utils/bodyScrollBlock';
import { IStory } from '../types';

import styles from './Stories.module.scss'

export const Story: FC<IStory> = ({ setActiveStory, title, _id, isWatch, slides, cover }) => {

  return (
    <div className={styles["story"]} onClick={() => {setActiveStory(_id); bodyScrollBlock(document)}}>
      <div className={styles["story__title"]}>{title}</div>
      <img src={`http://localhost:5000/uploads/${cover}`} alt="" className={styles["story__img"]} />
      {isWatch ? '' : <span className={styles["story__condition"]}></span>}
    </div>
  )
}
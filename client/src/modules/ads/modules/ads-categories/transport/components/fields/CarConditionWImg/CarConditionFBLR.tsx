//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей
import styles from './CarConditionWImg.module.scss'

//импорт типов
import { IDamagedPositions, IPoint } from '../../../types/damagedPosition'

//импорт функционала

//импорт компонентов

interface ICarConditionFBLR {
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

export const CarConditionFBLR: FC<ICarConditionFBLR> = ({ data, activeSlideCategory, setActiveSlideCategory, activeSpans, damagedPlaces }) => {

  const isInclude = (point: IPoint) => {
    let result = false;
    for(let i = 0; i < point.points.length; i++) {
      if(activeSpans.includes(point.points[i].id)) {
        result = true
      }
    }
    return result;
  }

  const generateSpan = () => {
    return (
      data.places.map(el => {
        return (
          <span 
            key={el.id} 
            onClick={() => {setActiveSlideCategory(el)}}
            className={`${styles['car-condition-item__span']} ${styles[`car-condition-item__span-${el.class}`]} ${activeSlideCategory && activeSlideCategory.id === el.id ? styles['car-condition-item__span--active'] : ''} ${isInclude(el) ? styles['car-condition-item__span--clicked'] : ''}`}
            >
              +
            </span>
        )
      })
    )
  }

  return (
  <div className={styles["car-condition-item"]}>
    <div className={styles["car-condition-item__content"]}>
      <img src={`http://localhost:5000/uploads/${data.img}`} alt={data.position} />
      {generateSpan()}
    </div>
  </div>
  )
}
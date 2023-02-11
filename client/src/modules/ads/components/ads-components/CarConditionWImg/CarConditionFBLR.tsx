import React, { FC, useState } from 'react'

import { ICarConditionFBLR } from '../../../types/types'

interface IPoint {
  title: string;
  points: {
      id: string;
      title: string;
  }[];
  id: string;
  class: string;
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
            className={`car-condition-item__span car-condition-item__span-${el.class} ${activeSlideCategory && activeSlideCategory.id === el.id ? 'car-condition-item__span--active' : ''} ${isInclude(el) ? 'car-condition-item__span--clicked' : ''}`}
            >
              +
            </span>
        )
      })
    )
  }

  return (
  <div className="car-condition-item">
    <div className="car-condition-item__content">
      <img src={`http://localhost:5000/uploads/${data.img}`} alt={data.position} />
      {generateSpan()}
    </div>
  </div>
  )
}
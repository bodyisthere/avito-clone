import React, { FC, useState } from 'react'

import { ICarConditionFBLR } from '../../../types/types'

export const CarConditionFBLR: FC<ICarConditionFBLR> = ({ data, activeSlideCategory, setActiveSlideCategory }) => {
  const generateSpan = () => {
    return (
      data.places.map(el => {
        return (
          <span 
            key={el.id} 
            onClick={() => {setActiveSlideCategory(el.id)}}
            className={`car-condition-item__span car-condition-item__span-${el.class} ${activeSlideCategory === el.id ? 'car-condition-item__span--active' : ''}`}
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
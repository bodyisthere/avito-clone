import React, { FC, useState } from 'react'

import forward from '../../../../../assets/img/car-condition-forward.png'
import back from '../../../../../assets/img/car-condition-back.png'
import left from '../../../../../assets/img/car-condition-left.png'
import right from '../../../../../assets/img/car-condition-right.png'

import { damaged } from '../../../data/damaged'

interface ICarConditionFBLR {
  //1-спереди, 2-сзади, 3-слева, 4-справа
  type: 1 | 2 | 3 | 4,
  setActiveSlideCategory: React.Dispatch<React.SetStateAction<number | null | undefined>>
  activeSlideCategory: number | null | undefined
}

export const CarConditionFBLR: FC<ICarConditionFBLR> = ({ type, activeSlideCategory, setActiveSlideCategory }) => {
  const generateSpan = (typeIndex: 1 | 2 | 3 | 4, letter: 'f' | 'b' | 'l' | 'r') => {
    return (
      damaged[typeIndex - 1].places.map((el, index): React.ReactNode => {
        console.log(el.index)
        return (
          <span key={index}
            onClick={() => setActiveSlideCategory(el.index)}
            className={`car-condition-item__span car-condition-item__span-${letter}${index + 1} ${activeSlideCategory === index ? 'car-condition-item__span--active' : ''}`}>
            +
          </span> 
        )
      })
    )
  }

  const matchPhoto = () => {
    if(type === 1) return forward
    if(type === 2) return back
    if(type === 3) return left
    if(type === 4) return right
  }

  return (
  <div className="car-condition-item">
    <div className="car-condition-item__content">
      <img src={matchPhoto()} alt="" />
      {type === 1 ? generateSpan(1, 'f') : ''}
      {type === 2 ? generateSpan(2, 'b') : ''}
      {type === 3 ? generateSpan(3, 'l') : ''}
      {type === 4 ? generateSpan(4, 'r') : ''}
    </div>
  </div>
  )
}
import React, { FC } from 'react'

import forward from '../../../../../assets/img/car-condition-forward.png'

interface ICarConditionForward {

}

export const CarConditionForward: FC<ICarConditionForward> = () => {
  return (
    <div className="car-condition-item">
      <div className="car-condition-item__content">
        <img src={forward} alt="спереди" />
        <span 
          className="car-condition-item__span car-condition-item__span-f1">
            +
        </span>
        <span 
          className="car-condition-item__span car-condition-item__span-f2">
            +
        </span>
        <span 
          className="car-condition-item__span car-condition-item__span-f3">
            +
        </span>
        <span 
          className="car-condition-item__span car-condition-item__span-f4">
            +
        </span>
        <span 
          className="car-condition-item__span car-condition-item__span-f5">
            +
        </span>
        <span 
          className="car-condition-item__span car-condition-item__span-f6">
            +
        </span>
        <span 
          className="car-condition-item__span car-condition-item__span-f7">
            +
        </span>
        <span 
          className="car-condition-item__span car-condition-item__span-f8">
            +
        </span>
      </div>
    </div>
  )
}
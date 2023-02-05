import React, { FC } from 'react'

import right from '../../../../../assets/img/car-condition-right.png'


interface ICarConditionRight {

}

export const CarConditionRight: FC<ICarConditionRight> = () => {
  return (
    <div className="car-condition-item">
      <div className="car-condition-item__content">
        <img src={right} alt="справа" />
        <span 
          className="car-condition-item__span car-condition-item__span-r1" >
            +
        </span>
        <span 
          className="car-condition-item__span car-condition-item__span-r2">
            +
        </span>
        <span 
          className="car-condition-item__span car-condition-item__span-r3">
            +
        </span>
        <span 
          className="car-condition-item__span car-condition-item__span-r4">
            +
        </span>
      </div>
    </div>
  )
}
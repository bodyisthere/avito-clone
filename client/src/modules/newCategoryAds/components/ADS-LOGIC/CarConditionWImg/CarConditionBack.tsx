import React, { FC, useState } from 'react'

import back from '../../../../../assets/img/car-condition-back.png'

interface ICarConditionBack {

}

export const CarConditionBack: FC<ICarConditionBack> = () => {
  return (
    <div className="car-condition-item">
      <div className="car-condition-item__content">
        <img src={back} alt="сзади" />
        <span 
          className="car-condition-item__span car-condition-item__span-b1">
            +
        </span>
        <span 
          className="car-condition-item__span car-condition-item__span-b2">
            +
        </span>
        <span 
          className="car-condition-item__span car-condition-item__span-b3">
            +
        </span>
        <span 
          className="car-condition-item__span car-condition-item__span-b4">
            +
        </span>
        <span 
          className="car-condition-item__span car-condition-item__span-b5">
            +
        </span>
      </div>
    </div>
  )
}
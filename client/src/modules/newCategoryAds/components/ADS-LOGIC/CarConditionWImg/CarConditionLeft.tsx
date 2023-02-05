import React, { FC } from 'react'

import left from '../../../../../assets/img/car-condition-left.png'

interface ICarConditionLeft {

}

export const CarConditionLeft: FC<ICarConditionLeft> = () => {
  return (
    <div className="car-condition-item">
      <div className="car-condition-item__content">
        <img src={left} alt="слева" />
        <span 
          className="car-condition-item__span car-condition-item__span-l1">
            +
        </span>
        <span 
          className="car-condition-item__span car-condition-item__span-l2">
            +
        </span>
        <span 
          className="car-condition-item__span car-condition-item__span-l3">
            +
        </span>
        <span 
          className="car-condition-item__span car-condition-item__span-l4">
            +
        </span>
      </div>
    </div>
  )
}
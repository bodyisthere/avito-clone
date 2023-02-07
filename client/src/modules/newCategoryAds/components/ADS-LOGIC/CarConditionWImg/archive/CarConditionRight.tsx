import React, { FC, useState } from 'react'

import right from '../../../../../assets/img/car-condition-right.png'


interface ICarConditionRight {
  setActiveSlideCategory: React.Dispatch<React.SetStateAction<number | null | undefined>>
}

export const CarConditionRight: FC<ICarConditionRight> = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="car-condition-item">
      <div className="car-condition-item__content">
        <img src={right} alt="справа" />
        <span 
          onClick={() => setActive(1)}
          className={`car-condition-item__span car-condition-item__span-r1 ${active === 1? 'car-condition-item__span--active' : ''}`} >
            +
        </span>
        <span 
          onClick={() => setActive(2)}
          className={`car-condition-item__span car-condition-item__span-r2 ${active === 2 ? 'car-condition-item__span--active' : ''}`}>
            +
        </span>
        <span 
          onClick={() => setActive(3)}
          className={`car-condition-item__span car-condition-item__span-r3 ${active === 3 ? 'car-condition-item__span--active' : ''}`}>
            +
        </span>
        <span 
          onClick={() => setActive(4)}
          className={`car-condition-item__span car-condition-item__span-r4 ${active === 4 ? 'car-condition-item__span--active' : ''}`}>
            +
        </span>
      </div>
    </div>
  )
}
import React, { FC, useState } from 'react'

import left from '../../../../../assets/img/car-condition-left.png'

interface ICarConditionLeft {
  setActiveSlideCategory: React.Dispatch<React.SetStateAction<number | null | undefined>>
}

export const CarConditionLeft: FC<ICarConditionLeft> = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="car-condition-item">
      <div className="car-condition-item__content">
        <img src={left} alt="слева" />
        <span 
          onClick={() => setActive(1)}
          className={`car-condition-item__span car-condition-item__span-l1 ${active === 1 ? 'car-condition-item__span--active' : ''}`}>
            +
        </span>
        <span 
          onClick={() => setActive(2)}
          className={`car-condition-item__span car-condition-item__span-l2 ${active === 2 ? 'car-condition-item__span--active' : ''}`}>
            +
        </span>
        <span 
          onClick={() => setActive(3)}
          className={`car-condition-item__span car-condition-item__span-l3 ${active === 3 ? 'car-condition-item__span--active' : ''}`}>
            +
        </span>
        <span 
          onClick={() => setActive(4)}
          className={`car-condition-item__span car-condition-item__span-l4 ${active === 4 ? 'car-condition-item__span--active' : ''}`}>
            +
        </span>
      </div>
    </div>
  )
}
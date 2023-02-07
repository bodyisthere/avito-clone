import React, { FC, useState } from 'react'

import back from '../../../../../assets/img/car-condition-back.png'

interface ICarConditionBack {
  setActiveSlideCategory: React.Dispatch<React.SetStateAction<number | null | undefined>>
}

export const CarConditionBack: FC<ICarConditionBack> = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="car-condition-item">
      <div className="car-condition-item__content">
        <img src={back} alt="сзади" />
        <span 
          onClick={() => setActive(1)}
          className={`car-condition-item__span car-condition-item__span-b1 ${active === 1 ? 'car-condition-item__span--active' : ''} `}>
            +
        </span>
        <span 
          onClick={() => setActive(2)}
          className={`car-condition-item__span car-condition-item__span-b2 ${active === 2 ? 'car-condition-item__span--active' : ''} `}>
            +
        </span>
        <span 
          onClick={() => setActive(3)}
          className={`car-condition-item__span car-condition-item__span-b3 ${active === 3 ? 'car-condition-item__span--active' : ''} `}>
            +
        </span>
        <span 
          onClick={() => setActive(4)}
          className={`car-condition-item__span car-condition-item__span-b4 ${active === 4 ? 'car-condition-item__span--active' : ''} `}>
            +
        </span>
        <span 
          onClick={() => setActive(5)}
          className={`car-condition-item__span car-condition-item__span-b5 ${active === 5 ? 'car-condition-item__span--active' : ''} `}>
            +
        </span>
      </div>
    </div>
  )
}
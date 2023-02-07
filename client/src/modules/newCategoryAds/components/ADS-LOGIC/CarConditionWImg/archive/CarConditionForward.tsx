import React, { FC, useState } from 'react'

import forward from '../../../../../assets/img/car-condition-forward.png'

interface ICarConditionForward {
  setActiveSlideCategory: React.Dispatch<React.SetStateAction<number | null | undefined>>
}

export const CarConditionForward: FC<ICarConditionForward> = ({ setActiveSlideCategory }) => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="car-condition-item">
      <div className="car-condition-item__content">
        <img src={forward} alt="спереди" />
        <span 
            onClick={() => setActive(1)}
            className={`car-condition-item__span car-condition-item__span-f1 ${active === 1 ? 'car-condition-item__span--active' : ''}`}>
            +
        </span>
        <span 
            onClick={() => setActive(2)}
            className={`car-condition-item__span car-condition-item__span-f2 ${active === 2 ? 'car-condition-item__span--active' : ''}`}>
            +
        </span>
        <span 
            onClick={() => setActive(3)}
            className={`car-condition-item__span car-condition-item__span-f3 ${active === 3 ? 'car-condition-item__span--active' : ''}`}>
            +
        </span>
        <span 
            onClick={() => setActive(4)}
            className={`car-condition-item__span car-condition-item__span-f4 ${active === 4 ? 'car-condition-item__span--active' : ''}`}>
            +
        </span>
        <span 
            onClick={() => setActive(5)}
            className={`car-condition-item__span car-condition-item__span-f5 ${active === 5 ? 'car-condition-item__span--active' : ''}`}>
            +
        </span>
        <span 
            onClick={() => setActive(6)}
            className={`car-condition-item__span car-condition-item__span-f6 ${active === 6 ? 'car-condition-item__span--active' : ''}`}>
            +
        </span>
        <span 
            onClick={() => setActive(7)}
            className={`car-condition-item__span car-condition-item__span-f7 ${active === 7 ? 'car-condition-item__span--active' : ''}`}>
            +
        </span>
        <span 
            onClick={() => setActive(8)}
            className={`car-condition-item__span car-condition-item__span-f8 ${active === 8 ? 'car-condition-item__span--active' : ''}`}>
            +
        </span>
      </div>
    </div>
  )
}
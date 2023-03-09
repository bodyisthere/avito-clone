import React, { FC } from 'react'

import styles from './CarMileage.module.scss'

interface ICarMileage {
  carMileage: number | undefined
  setOption: (key: string, value: any) => void
  optionKey: string
}

export const CarMileage: FC<ICarMileage> = ( { carMileage, setOption, optionKey } ) => {
  return (
    <div className={styles["car-mileage"]}>
      <input 
        type="text" 
        value={carMileage ? carMileage : ''} 
        maxLength={9} 
        className={styles["car-mileage__input"]} 
        onChange={(e) => setOption(optionKey, +e.target.value)}
      />
      <span className={styles['car-mileage__span']}>км</span>
    </div>
  )
}
import React, { FC } from 'react'

interface ICarMileage {
  carMileage: number | undefined
  setOption: (key: string, value: any) => void
  optionKey: string
}

export const CarMileage: FC<ICarMileage> = ( { carMileage, setOption, optionKey } ) => {
  return (
    <div className="car-mileage">
      <input 
        type="text" 
        value={carMileage ? carMileage : ''} 
        maxLength={9} 
        className="car-mileage__input" 
        onChange={(e) => setOption(optionKey, +e.target.value)}
      />
      <span className='car-mileage__span'>км</span>
    </div>
  )
}
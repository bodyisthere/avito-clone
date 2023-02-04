import React, { FC } from 'react'

interface ICarMileage {
  carMileage: number | null
  setCarMileage: React.Dispatch<React.SetStateAction<number | null>>
}

export const CarMileage: FC<ICarMileage> = ( { carMileage, setCarMileage } ) => {
  return (
    <div className="car-mileage">
      <input 
        type="text" 
        value={carMileage ? carMileage : ''} 
        maxLength={9} 
        className="car-mileage__input" 
        onChange={(e) => setCarMileage(+e.target.value)}
      />
      <span className='car-mileage__span'>км</span>
    </div>
  )
}
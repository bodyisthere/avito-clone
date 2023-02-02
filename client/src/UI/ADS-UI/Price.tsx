import React, { FC, useState } from 'react'

interface IPrice {
  onChange: (e: any) => void;
  value: number;
  className?: string;
  placeholder?: string;
}

export const Price: FC<IPrice> = ({ value, onChange, className, placeholder }) => {
  return (
    <div className="price">
      <input type="number" className={`price__input ${className ? className : ''}`} value={value} onChange={onChange} placeholder={placeholder}/>
      <span className='price__currency'>₽</span>
    </div>
  )
}
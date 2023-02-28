import React, { FC, useState } from 'react'

import styles from './Price.module.scss'

interface IPrice {
  onChange: (e: any) => void;
  value: number;
  className?: string;
  placeholder?: string;
}

export const Price: FC<IPrice> = ({ value, onChange, className, placeholder }) => {
  return (
    <div className={styles["price"]}>
      <input type="number" className={`${styles['price__input']} ${className ? className : ''}`} value={value} onChange={onChange} placeholder={placeholder}/>
      <span className={styles['price__currency']}>₽</span>
    </div>
  )
}
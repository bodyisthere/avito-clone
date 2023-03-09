//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей
import styles from './Price.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов

interface IPrice {
  onChange: (e: any) => void;
  value: number;
  className?: string;
}

export const Price: FC<IPrice> = ({ value, onChange, className, ...props }) => {
  return (
    <div className={styles.price}>
      <input 
        type="number" 
        className={`${styles.input} ${className ? className : ''}`} 
        value={value} 
        onChange={onChange} 
        {...props}
      />
      <span className={styles.currency}>₽</span>
    </div>
  )
}
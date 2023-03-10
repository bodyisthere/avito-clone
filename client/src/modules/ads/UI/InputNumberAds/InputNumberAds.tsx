//импорт внешних пакетов
import React, { FC } from 'react'

//импорт стилей
import styles from './InputNumberAds.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов

interface IInputNumberAds {
  value: number
  setFunction: any
  placeholder: string
  optionKey: string
}

export const InputNumberAds: FC<IInputNumberAds> = ( { value, setFunction, placeholder, optionKey } ) => {
  return (
    <input 
      defaultValue={value}
      type='number'
      className={styles.input}
      placeholder={placeholder}
      onChange={e => setFunction(optionKey, e.target.value)} 
      />
  )
}
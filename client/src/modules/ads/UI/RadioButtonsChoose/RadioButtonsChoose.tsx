//импорт внешних пакетов
import React, { FC, useLayoutEffect, useState } from 'react'

//импорт стилей
import styles from './RadioButtonsChoose.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов

interface IRadioButtonChoose {
  data: string[]
  value: any
  setOption: (key: string, value: any) => void
  optionKey: string
}

export const RadioButtonsChoose: FC<IRadioButtonChoose> = ({ data, optionKey, setOption, value }) => {
  const [id, setId] = useState<number>()

  useLayoutEffect(() => {
    setId(Math.random())
  }, [])

  return (
    <div className={styles.radio}>
      {
        data.map((el, index) => {
          return (
            <label className={`${styles.label} ${value === el ? styles.active : ''}`} key={index} onClick={() => setOption(optionKey, el)}>
              <input type="radio" className={styles.input} name={String(id)}/>
              <span className={styles.span}>{el}</span>
            </label>
          )
        })
      }
    </div>
  )
}
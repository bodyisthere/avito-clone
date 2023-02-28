import React, { FC, useLayoutEffect, useState } from 'react'

import styles from './RadioButtonsChoose.module.scss'
 
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
    <div className={styles["radio-button-choose"]}>
      {
        data.map((el, index) => {
          return (
            <label className={`${styles['radio-button-choose__label']} ${value === el ? styles['radio-button-choose--active'] : ''}`} key={index} onClick={() => setOption(optionKey, el)}>
              <input type="radio" className={styles["radio-button-choose__input"]} name={String(id)}/>
              <span className={styles["radio-button-choose__span"]}>{el}</span>
            </label>
          )
        })
      }
    </div>
  )
}
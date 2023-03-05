//импорт внешних пакетов
import React, { FC } from 'react'

//импорт стилей
import styles from './Radio.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов

interface IRadio {
  data: string[]
  setFunction: any
}

export const Radio: FC<IRadio> = ( { data, setFunction } ) => {
  return (
    <div className={styles.container} onChange={(e: any) => setFunction(e.target.value)}>
      {
        data.map((el, index) => {
          return (
            <label key={index} className={styles.label}>
              <input type="radio" name="radio" id="" value={el}/>
              {el}
            </label>
          )
        })
      }
    </div>
  )
}
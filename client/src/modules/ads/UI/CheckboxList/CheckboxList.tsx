import React, { FC, useState, useEffect } from 'react'

import styles from './CheckboxList.module.scss'

interface ICheckboxList {
  data: {title: string | null, data: {title: string, id?: string}[]}
  changeFunction: any
  dataReady?: string[]
}

export const CheckboxList: FC<ICheckboxList> = ( { data, changeFunction, dataReady } ) => {
  return (
    <div className={styles["checkbox-list"]}>
      {data.title ? <div className={styles["checkbox-list__title"]}>{data.title}</div> : ''}
      <ul className={styles["checkbox-list__list"]}>
        {
          dataReady
          ?
          data.data.map((el, index) => {
            return (
              <li className={styles["checkbox-list__item"]} key={index} >
                <label className={styles["checkbox-list__label"]}>
                  <input type="checkbox" onChange={() => changeFunction(el.id)} className={styles["checkbox-list__input"]} checked={el.id ? dataReady.includes(el.id) ? true : false : false}/>
                  {el.title}
                </label>
              </li>
            )
          })
          :
          data.data.map((el, index)=> {
            return (
              <li className={styles["checkbox-list__item"]} key={index} >
                <label className={styles["checkbox-list__label"]} onChange={() => changeFunction(el.title)}>
                  <input type="checkbox" className={styles["checkbox-list__input"]} />
                  {el.title}
                </label>
              </li>
            )
          })

        }
      </ul>
    </div>
  )
}
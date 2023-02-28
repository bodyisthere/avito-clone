import React, { FC } from 'react'

import styles from './Select.module.scss'

interface ISelect {
  options: string[]
  onChange: any
}

export const Select: FC<ISelect> = ( { options, onChange } ) => {
  return (
    <select className={styles["select"]} onChange={(e: any) => onChange(e.target.value)}>
      {
        options.map((el, index): React.ReactNode => {
          return <option value={el} key={index}>{el}</option>
        })
      }
    </select>
  )
}
import React, { FC, InputHTMLAttributes } from 'react'

import styles from './OnOff.module.scss'

interface IOnOff extends InputHTMLAttributes<HTMLInputElement>{

}

export const OnOff: FC<IOnOff> = ({ ...props }) => {
  return (
    <div className={styles["on-off"]}>
      <input type="checkbox" className={styles["on-off__checkbox"]} {...props}/>
    </div>
  )
}
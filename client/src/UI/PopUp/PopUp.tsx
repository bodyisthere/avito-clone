import React, { FC, useRef } from 'react'

import styles from './PopUp.module.scss'

interface IPopUp {
  children: any
  changeStateFunction: any
}

export const PopUp: FC<IPopUp> = ( {children, changeStateFunction} ) => {

  return (
    <div className={styles["pop-up"]} onClick={() => changeStateFunction(false)}>
      <div className={styles["pop-up__content"]} onClick={e => e.stopPropagation()}>
        <div className={styles["pop-up__close"]} onClick={() => changeStateFunction(false)}><i className="fa-solid fa-xmark"></i></div>
        {children}
      </div>
    </div>
  )
}
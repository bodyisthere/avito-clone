//импорт внешних пакетов
import React, { FC } from 'react'

//импорт стилей
import styles from './Burger.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов

interface IHeaderBurgerIcon {
  setIsBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>
  isBurgerOpen: boolean
}

export const HeaderBurgerIcon: FC<IHeaderBurgerIcon> = ( { isBurgerOpen, setIsBurgerOpen } ) => {
  return (
    <div className={styles.spans} onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
      <span className={`${styles.span} ${isBurgerOpen && styles.first}`}></span>
      <span className={`${styles.span} ${isBurgerOpen && styles.second}`}></span>
      <span className={`${styles.span} ${isBurgerOpen && styles.third}`}></span>
    </div>
  )
}
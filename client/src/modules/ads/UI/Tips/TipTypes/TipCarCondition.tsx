//импорт внешних пакетов
import React, { FC } from 'react'

//импорт стилей
import styles from '../Tips.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов

interface ITipCarCondition {
  ref: React.MutableRefObject<HTMLDivElement | null>
}

export const TipCarCondition: FC<ITipCarCondition> = () => {
  return (
    <div className={styles.content}>
      <div className={styles.text}>
      Автомобиль битый, если он сейчас не на ходу или требует восстановления после ДТП.
      К битым не относятся машины со сколами, царапинами и небольшими вмятинами.
      </div>
    </div>
  )
}
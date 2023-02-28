import React, { FC } from 'react'

import styles from './Tips.module.scss'

interface ITipCarCondition {
  ref: React.MutableRefObject<HTMLDivElement | null>
}

export const TipCarCondition: FC<ITipCarCondition> = () => {
  return (
    <div className={styles['tip__content']}>
      <div className={styles["tip__text"]}>
      Автомобиль битый, если он сейчас не на ходу или требует восстановления после ДТП.
      К битым не относятся машины со сколами, царапинами и небольшими вмятинами.
      </div>
    </div>
  )
}
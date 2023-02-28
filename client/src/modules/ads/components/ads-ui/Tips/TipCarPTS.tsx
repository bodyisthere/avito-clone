import React, { FC } from 'react'

import styles from './Tips.module.scss'

interface ITipCarPTS {
  ref: React.MutableRefObject<HTMLDivElement | null>
}

export const TipCarPTS: FC<ITipCarPTS> = () => {
  return (
    <div className={styles['tip__content']}>
      <div className={styles["tip__text"]}>
        Бумажный паспорт может быть оригинальным или дубликатом. В дубликате будет отметка об этом.
        Электронные ПТС получают все новые авто с ноября 2020 года. 
      </div>
    </div>
  )
}
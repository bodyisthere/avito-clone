//импорт внешних пакетов
import React, { FC } from 'react'

//импорт стилей
import styles from '../Tips.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов



interface ITipCarPTS {
  ref: React.MutableRefObject<HTMLDivElement | null>
}

export const TipCarPTS: FC<ITipCarPTS> = () => {
  return (
    <div className={styles.content}>
      <div className={styles.text}>
        Бумажный паспорт может быть оригинальным или дубликатом. В дубликате будет отметка об этом.
        Электронные ПТС получают все новые авто с ноября 2020 года. 
      </div>
    </div>
  )
}
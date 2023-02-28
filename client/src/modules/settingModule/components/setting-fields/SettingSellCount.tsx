import React, { FC } from 'react'

import styles from '../SettingModule.module.scss'

import { OnOff } from '../../../../UI'

interface ISettingSellCount {

}

export const SettingSellCount: FC<ISettingSellCount> = () => {
  return (
    <div className={`${styles["setting-module__section"]} ${styles["setting-module__section-count"]}`}>
        <div className={styles["setting-module__sell-count"]}>Счётчик продаж</div>
        <div className={styles["setting-module__sell-switch"]}>
          <OnOff />
          <div className={styles["setting-module__sell-info"]}>
            Показывать, какую сумму вам принесли сделки на Авито.
            <button className={styles["setting-module__more"]}>Подробнее</button>
          </div>
        </div>
      </div>
  )
}
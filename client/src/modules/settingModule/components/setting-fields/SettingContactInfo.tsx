import React, { FC } from 'react'

import styles from '../SettingModule.module.scss'

import { Select } from '../../../../UI'

interface ISettingContactInfo {

}

export const SettingContactInfo: FC<ISettingContactInfo> = () => {
  return (
    <div className={styles["setting-module__section"]}>
        <div className={styles["setting-module__subtitle"]}>Контактная информация</div>
        <div className={styles["setting-module__content"]}>
          <div className={styles["setting-module__left"]}>Город</div>
          <div className={styles["setting-module__right"]}>
            <div className={styles["setting-module__selects"]}>
              <Select options={['Казань']} onChange={''}/>
              <Select options={['Козья слобода']} onChange={''}/>
            </div>
            <button className={styles["setting-module__button"]}>Сохранить</button>
          </div>
        </div>
    </div>
  )
}
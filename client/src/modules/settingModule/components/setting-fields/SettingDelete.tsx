import React, { FC } from 'react'

import styles from '../SettingModule.module.scss'

interface ISettingDelete {

}

export const SettingDelete: FC<ISettingDelete> = () => {
  return (
    <div className={styles["setting-module__section"]}>
      <div className={styles["setting-module__subtitle"]}>Удаление профиля</div>
      <div className={styles["setting-module__section-delete"]}>
        <div className={styles["setting-module__text"]}>Все содержимое будет стёрто</div>
        <div className={styles["setting-module__more"]}>Удалить</div>
      </div>
    </div>
  )
}
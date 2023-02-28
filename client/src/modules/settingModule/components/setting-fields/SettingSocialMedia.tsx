import React, { FC } from 'react'

import styles from '../SettingModule.module.scss'

import { OnOff } from '../../../../UI'

interface ISettingSocialMedia {

}

export const SettingSocialMedia: FC<ISettingSocialMedia> = () => {
  return (
    <div className={styles["setting-module__section"]}>
        <div className={styles["setting-module__subtitle"]}>Соцсети и сервисы</div>
        <div className={styles["setting-module__social-media-section"]}>
          <div className={styles["setting-module__social-media"]}>
            <i className="fa-brands fa-vk"></i>
            <span>ВКонтакте</span>
            <OnOff />
          </div>
          <div className={styles["setting-module__social-media"]}>
            <i className="fa-brands fa-vk"></i>
            <span>Одноклассники</span>
            <OnOff />
          </div>
          <div className={styles["setting-module__social-media"]}>
            <i className="fa-brands fa-google"></i>
            <span>Google</span>
            <OnOff />
          </div>
          <div className={styles["setting-module__social-media"]}>
            <i className="fa-brands fa-apple"></i>
            <span>Apple</span>
            <OnOff />
          </div>

        </div>
      </div>
  )
}
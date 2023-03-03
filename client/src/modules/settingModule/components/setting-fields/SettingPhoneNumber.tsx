import React, { FC } from 'react'
import { useAppSelector } from '../../../../hooks'

import styles from '../SettingModule.module.scss'

interface ISettingPhoneNumber {

}

export const SettingPhoneNumber: FC<ISettingPhoneNumber> = () => {
  const user = useAppSelector(state => state.userReducer.data);
  
  return (
    <div className={styles["setting-module__section"]}>
        <div className={styles["setting-module__subtitle"]}>Телефоны</div>
        <div className={styles["setting-module__text"]}>
          <i className="fa-solid fa-shield"></i>
          Чтобы ваш настоящий номер не попал в базы мошенников,
          мы показываем вместо него подменный, а звонки переводим вам. 
          Эту защиту нельзя отключить.
          <button className={styles["setting-module__more"]}>Подробнее</button>
        </div>
        <div className={styles["setting-module__phone"]}>
          <div className={styles["setting-module__phone-number"]}>{user.contactInfo.phoneNumber} - номер телефона</div>
          <div className={styles["setting-module__phone-total-ads"]}>{user.ads.length} объявлений</div>
        </div>
        <button className={styles["setting-module__button"]}>
          Добавить номер
        </button>
      </div>
  )
}
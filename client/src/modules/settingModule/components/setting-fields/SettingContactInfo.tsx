import React, { FC, useState, useEffect } from 'react'

import styles from '../SettingModule.module.scss'

import { ICities } from '../../../../types/location'

import { citiesApi } from '../../../../store/api/citiesApi'
import { userApi } from '../../../../store/api/userApi'

import { Select, PopUp, Loader } from '../../../../UI'
import { useSettingLocation } from '../../hooks/useSettingLocation'

interface ISettingContactInfo {

}

export const SettingContactInfo: FC<ISettingContactInfo> = () => {
  const { popular,
    republics,
    cities,
    subways,
    isCityOpen, setIsCityOpen,
    city, setCity,
    setRepublic,
    subway, setSubway,
    isPopularLoading, locationSend, setPopularCity
  } = useSettingLocation();

  return (
    <div className={styles["setting-module__section"]}>
        {
          isCityOpen
          ?
          <PopUp changeStateFunction={() => setIsCityOpen(false)}>
            <div className={styles["pop"]}>
              <div className={styles["pop__title"]}>Выбор города</div>
              <ul className={styles["pop__list"]}>
                {
                  isPopularLoading
                  ?
                  <Loader widthAdditional={64} widthMain={80}/>
                  :
                  popular.map((el, index) => {
                    return <li className={styles["pop__item"]} key={index} onClick={() => {setPopularCity(el); setRepublic(el.region)}}>{el.city}</li>
                  })
                }
              </ul>
              <div className={styles["pop__bottom"]}>
                <div className={styles["pop__select"]}>
                  <Select options={republics} onChange={setRepublic}/>
                  <Select options={cities.map(el => el.city)} onChange={setCity}/>
                </div>
                <button className={styles["setting-module__button"]} onClick={() => setIsCityOpen(false)}>Выбрать</button>
              </div>
            </div>
          </PopUp>
          :
          ''
        }
        <div className={styles["setting-module__subtitle"]}>Контактная информация</div>
        <div className={styles["setting-module__content"]}>
          <div className={styles["setting-module__left"]}>Город</div>
          <div className={styles["setting-module__right"]}>
            <div className={styles["setting-module__selects"]}>
              <Select options={typeof city === 'string' ? ['---', 'Выбрать другой'] : [city.title]} onChange={setCity}/>
              {subways.length > 0 && <Select options={subways} onChange={setSubway}/>}
            </div>
            <button className={styles["setting-module__button"]} onClick={locationSend}>Сохранить</button>
          </div>
        </div>
    </div>
  )
}
import { FC } from 'react'

import styles from '../../SettingModule.module.scss'


import { Loader, Select } from '../../../../../UI'
import { SettingContactPop } from './SettingContactPop'
import { useSettingContactInfo } from '../../../hooks/useSettingContactInfo'

interface ISettingContactInfo {

}

export const SettingContactInfo: FC<ISettingContactInfo> = () => {
  const {
    //открыт ли поп ап
    isCityOpen, setIsCityOpen,
    //город, который отправляется на сервер
    city, setCity,
    //выбранные город
    cityChoose, setCityChoose,
    //метро, которое отправляется на сервер
    subway, setSubway,
    //выбранное метро
    subwayChoose, setSubwayChoose,
    //регион, который отправляется на сервер
    setRegion,
    //индикаторы загрузки
    isFetchCityLoading, isLocationSubmitLoading,
    //некоторые функции взаимодействия
    closePopUp, submit,
  } = useSettingContactInfo()

  return (
    <div className={styles["setting-module__section"]}>
        { isCityOpen 
          && 
          <SettingContactPop 
            closePopUp={closePopUp} 
            setSubway={setSubway}
            setCity={setCity} 
            setRegion={setRegion} 
            setSubwayChoose={setSubwayChoose}
            setCityChoose={setCityChoose}
            cityChoose={cityChoose}
            setIsCityOpen={setIsCityOpen}
          /> 
        }
        <div className={styles["setting-module__subtitle"]}>Контактная информация</div>
        <div className={styles["setting-module__content"]}>
          <div className={styles["setting-module__left"]}>Город</div>
          <div className={styles["setting-module__right"]}>
            <div className={styles["setting-module__selects"]}>
              <Select 
                onChange={setCityChoose}
                options={city._id !== '' ? [city.title, 'Выбрать другой'] : ['-Не выбрано', 'Выбрать другой']}
                selected={city._id !== '' ? city.title : '-Не выбрано-'}
              />
              {
                isFetchCityLoading
                ?
                'Загрузка...'
                :
                subwayChoose.length > 0 ? <Select options={['-Не выбрано-',...subwayChoose]} onChange={setSubway} selected={subway}/> : ''
              }
            </div>
            <button className={styles["setting-module__button"]} onClick={submit} disabled={isLocationSubmitLoading ? true : false}>
              {isLocationSubmitLoading ? <Loader widthAdditional={16} widthMain={30}/> : 'Сохранить'}
            </button>
          </div>
        </div>
    </div>
  )
}

  // const { 
  //   popular,
  //   republics,
  //   cities,
  //   subways,
  //   isCityOpen, setIsCityOpen,
  //   city, setCity,
  //   setRepublic,
  //   subway, setSubway,
  //   isPopularLoading, locationSend, setPopularCity,
  //   location
  // } = useSettingLocation();


  // const selectedChoose = () => {
  //   if(typeof city !== 'string' && city.title !== '') {
  //     //если меняем значение
  //     return city.title
  //   }
  //   if(location.city.title !== '') {
  //     //установка значения по умолчанию, если она есть
  //     return location.city.title
  //   }
  // }

  // const optionsChoose = () => {
  //   if(typeof city !== 'string' && city.title !== '') {
  //     return [city.title, 'Выбрать другой']
  //   } 
  //   if(location.city.title !== '') {
  //     return [location.city.title, 'Выбрать другой']
  //   } else {
  //     return ['-Не выбрано-', 'Выбрать другой']
  //   }
  // }
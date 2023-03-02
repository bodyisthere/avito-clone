import React, { FC, useState, useEffect } from 'react'

import styles from '../../SettingModule.module.scss'

import { userApi } from '../../../../../store/api/userApi'

import { Loader, Select } from '../../../../../UI'
import { useSettingLocation } from '../../../hooks/useSettingLocation'
import { useAppSelector } from '../../../../../hooks'
import { SettingContactPop } from './SettingContactPop'
import { citiesApi } from '../../../../../store/api/citiesApi'

interface ISettingContactInfo {

}

export const SettingContactInfo: FC<ISettingContactInfo> = () => {
  const [locationSubmit , { isLoading: isLocationSubmitLoading }] = userApi.useLocationChangeMutation();
  const [fetchCity, { isLoading: isFetchCityLoading }] = citiesApi.useLazyGetCityQuery();

  const { location } = useAppSelector(state => state.userReducer.data.contactInfo)
  const [isCityOpen, setIsCityOpen] = useState<boolean>(false);

  const [region, setRegion] = useState<string>('');
  const [city, setCity] = useState<{_id: string, title: string}>({_id: '', title: ''});
  const [subway, setSubway] = useState<string>('');

  const [cityChoose, setCityChoose] = useState<{_id: string, title: string} | string>({_id: '', title: ''});
  const [subwayChoose, setSubwayChoose] = useState<string[]>([]);
  
  useEffect(() => {
    if(location.region !== '') {
      setRegion(location.region);
      setCity(location.city);
      if(location.subway !== '' && location.subway) setSubway(location.subway);
    }
    return
  }, [location])
  
  useEffect(() => {
    if(city._id) fetchCity(city._id).then(payload => {
      if(payload.data) setSubwayChoose(payload.data.metro)
    })
  }, [city])

  useEffect(() => {
    if(cityChoose === 'Выбрать другой') setIsCityOpen(true);
  }, [cityChoose])

  const closePopUp = () => {
    setIsCityOpen(false);
    setCityChoose('-Не выбрано');
  }

  const submit = () => {
    const body = {
      city: {
        _id: typeof city === 'string' ? '' : city._id,
        title: typeof city === 'string' ? '' : city.title,
      },
      region,
      subway,
    }
    locationSubmit(body)
  }

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
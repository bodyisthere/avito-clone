import React, { FC, useState, useEffect } from 'react'

import styles from '../../SettingModule.module.scss'

import { Select, PopUp, Loader } from '../../../../../UI'

import { ICities } from '../../../../../types/location'

import { citiesApi } from '../../../../../store/api/citiesApi'

interface ISettingContactPop {
  closePopUp: any
  setRegion: React.Dispatch<React.SetStateAction<string>>
  setCity: React.Dispatch<React.SetStateAction<{_id: string;title: string;}>>
  setSubwayChoose: React.Dispatch<React.SetStateAction<string[]>>
  setSubway: React.Dispatch<React.SetStateAction<string>>
  setCityChoose: React.Dispatch<React.SetStateAction<string | {
    _id: string;
    title: string;
  }>> 
  cityChoose: string | {
    _id: string;
    title: string;
  }
  setIsCityOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SettingContactPop: FC<ISettingContactPop> = ( { closePopUp, setCity, setRegion, setSubwayChoose, setSubway, setCityChoose, cityChoose, setIsCityOpen } ) => {
  const { data: popularCities, isLoading: isPopularLoading } = citiesApi.useGetPopularCitiesQuery();
  const { data: republics, isLoading: isRepublicsLoading } = citiesApi.useGetRepublicsQuery();

  const [fetchCitiesByRepublic , { isLoading: isCitiesByRepLoading, data: citiesByRepublic  }] = citiesApi.useLazyGetCitiesByRepublicQuery();
  
  const [regionChoose, setRegionChoose] = useState<string>('');

  const chooseFromPopular = (el: ICities) => {
    setSubway('');
    setRegion(el.region);
    setCity({_id: el._id, title: el.city});
    if(el.metro.length > 0) {
      setSubwayChoose(el.metro);
    } else {
      setSubwayChoose([]);
    }
    closePopUp();
  }

  useEffect(() => {
    fetchCitiesByRepublic(regionChoose);
  }, [regionChoose])

  const chooseLocation = () => {
    const city = citiesByRepublic?.filter(el => el.city === cityChoose)[0];
    setRegion(regionChoose);
    setCity({_id : city?._id ? city?._id : '', title: city?.city ? city?.city : ''})
    setIsCityOpen(false);
  }


  return (
    <PopUp changeStateFunction={closePopUp}>
      <div className={styles["pop"]}>
        <div className={styles["pop__title"]}>Выбор города</div>
        <ul className={styles["pop__list"]}>
          {
            isPopularLoading || !popularCities
            ?
            <Loader widthAdditional={64} widthMain={80}/>
            :
            popularCities.map((el, index) => {
              return <li className={styles["pop__item"]} key={index} onClick={() => chooseFromPopular(el)}>{el.city}</li>
            })
          }
        </ul>
        <div className={styles["pop__bottom"]}>
          <div className={styles["pop__select"]}>
            {
              isRepublicsLoading || !republics
              ?
              'Загрузка'
              :
              <Select options={['-Не выбрано-', ...republics]} onChange={setRegionChoose} />
            }
            {
              isCitiesByRepLoading
              ?
              'Загрузка'
              :
              citiesByRepublic ? <Select options={['-Не выбрано-', ...citiesByRepublic.map(el => el.city)]} onChange={setCityChoose}/> : ''
            }
            
          </div>
        <button className={styles["setting-module__button"]} onClick={() => chooseLocation()}>Выбрать</button>
        </div>
      </div>
    </PopUp>
  )
}
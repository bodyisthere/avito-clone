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
  setCityChoose: React.Dispatch<React.SetStateAction<{_id: string;title: string;}>>
}

export const SettingContactPop: FC<ISettingContactPop> = ( { closePopUp, setCity, setRegion, setSubwayChoose, setSubway, setCityChoose } ) => {
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
              isCitiesByRepLoading || !citiesByRepublic
              ?
              'Загрузка'
              :
              <Select options={['-Не выбрано-', citiesByRepublic.map(el => return el.city)]} onChange={setCityChoose}/>
            }
            
          </div>
        </div>
      </div>
    </PopUp>
      // {/* <div className={styles["pop"]}>
      //   <div className={styles["pop__bottom"]}>
      //     <div className={styles["pop__select"]}>
      //       <Select options={['-Не выбрано-', ...republics]} onChange={setRepublic}/>
      //       {cities.length !== 0 ? <Select options={['-Не выбрано-', ...cities.map(el => el.city)]} onChange={setCity}/> : ''}
      //     </div>
      //     <button className={styles["setting-module__button"]} onClick={() => setIsCityOpen(false)}>Выбрать</button>
      //   </div>
      // </div> */}
  )
}
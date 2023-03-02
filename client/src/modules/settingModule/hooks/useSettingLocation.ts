import React, { FC, useState, useEffect } from 'react'

import { ICities } from '../../../types/location';

import { citiesApi } from '../../../store/api/citiesApi';
import { userApi } from '../../../store/api/userApi'
import { useAppSelector } from '../../../hooks';

export const useSettingLocation = () => {
  const { location } = useAppSelector(state => state.userReducer.data.contactInfo);

  //популярные города в поп апе
  const [fetchPopular, { isLoading: isPopularLoading }] = citiesApi.useLazyGetPopularCitiesQuery();
  //республики в селекте поп апа
  const [fetchRepublics, { isLoading: isRepublicsLoading } ] = citiesApi.useLazyGetRepublicsQuery();
  //получение город исходы из выбранной республики
  const [fetchCitiesByRepublic, { isLoading: isCityRepublicLoading }] = citiesApi.useLazyGetCitiesByRepublicQuery();
  //получение всей инфы о выбранным городе, если выбранный город существует у юзера
  const [fetchCity, { isLoading: isCityLoading }] = citiesApi.useLazyGetCityQuery();
  //подтвреждение смены локации юзера
  const [locationSubmit , { isLoading: isLocationSubmitLoading }] = userApi.useLocationChangeMutation();

  const [isCityOpen, setIsCityOpen] = useState<boolean>(false);

  //то откуда итерации
  const [popular, setPopular] = useState<ICities[]>([]);
  const [republics, setRepublics] = useState<string[]>([]);
  const [cities, setCities] = useState<ICities[]>([]);
  const [subways, setSubways] = useState<string[]>([]);

  //то что выбрано
  const [city, setCity] = useState<{_id: string, title: string} | string>('');
  const [republic, setRepublic] = useState<string>('');
  const [subway, setSubway] = useState<string>('');
  
  const fetchFunction = (fetchFn: any, setFn: React.SetStateAction<any>, arg?: any) => {
    fetchFn(arg).then((payload: any) => payload.data ? setFn(payload.data) : '')
  }

  useEffect(() => {
    if(location.subway !== '') {
      fetchCity(location.city._id)
      .then(payload => {
        if(payload.data) {
          setSubways(payload.data.metro)
        }
      })
    }
  }, [location.subway])


  useEffect(() => {
    if(city === 'Выбрать другой') {
      fetchFunction(fetchPopular, setPopular);
      fetchFunction(fetchRepublics, setRepublics);
      return setIsCityOpen(true)
    };
    if(cities.length > 0) {
        const myCity = cities.filter(el => el.city === city)[0];
        console.log('myCity: ', myCity);
        if(!myCity) return
        setRepublic(myCity.region);
        setCity({
          _id: myCity._id,
          title: myCity.city,
        })
        if(myCity.metro.length > 0) {
          setSubways(myCity.metro)
        } else {
          setSubways([])
        }
    }
  }, [city])

  useEffect(() => {
    if(republic) fetchFunction(fetchCitiesByRepublic, setCities, republic);
  }, [republic])

  //отправки локации юзера на сервер
  const locationSend = () => {
    if(republic === '' || location.city === city) return;
    const body = {
      city: {
        _id: typeof city === 'string' ? '' : city._id,
        title: typeof city === 'string' ? '' : city.title,
      },
      region: republic,
      subway,
    }
    locationSubmit(body)
  };

  const setPopularCity = (el: ICities) => {
    setCity({_id: el._id, title: el.city});
    if(el.metro && el.metro.length > 0) {
      setSubways(el.metro);
    };
    setIsCityOpen(false);
  }

  return {
    popular, setPopular,
    republics, setRepublics,
    cities, setCities,
    subways, setSubways,
    isCityOpen, setIsCityOpen,
    city, setCity,
    republic, setRepublic,
    subway, setSubway,
    fetchPopular, fetchRepublics, fetchCitiesByRepublic, 
    setPopularCity, locationSend,
    isPopularLoading,
    location
  }
}
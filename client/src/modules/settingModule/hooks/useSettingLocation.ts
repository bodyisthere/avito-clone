import React, { FC, useState, useEffect } from 'react'

import { ICities } from '../../../types/location';

import { citiesApi } from '../../../store/api/citiesApi';
import { userApi } from '../../../store/api/userApi'

export const useSettingLocation = () => {
  const [fetchPopular, { isLoading: isPopularLoading }] = citiesApi.useLazyGetPopularCitiesQuery();
  const [fetchRepublics, {  } ] = citiesApi.useLazyGetRepublicsQuery();
  const [fetchCitiesByRepublic, {  }] = citiesApi.useLazyGetCitiesByRepublicQuery();
  const [locationSubmit , {  }] = userApi.useLocationChangeMutation();

  const [isCityOpen, setIsCityOpen] = useState<boolean>(false);

  const [popular, setPopular] = useState<ICities[]>([]);
  const [republics, setRepublics] = useState<string[]>([]);
  const [cities, setCities] = useState<ICities[]>([]);
  const [subways, setSubways] = useState<string[]>([]);

  const [city, setCity] = useState<{_id: string, title: string} | string>('');
  const [republic, setRepublic] = useState<string>('');
  const [subway, setSubway] = useState<string>('');

  useEffect(() => {
    if(city === 'Выбрать другой') {
      fetchPopular().then(payload => {
        if(payload.data) {
          setPopular(payload.data);
        }
      })
      fetchRepublics().then(payload => {
        if(payload.data) {
          setRepublics(payload.data);
        }
      })
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
    if(republic) {
      fetchCitiesByRepublic(republic)
      .then(payload => {
        if(!payload.data) return
        setCities(payload.data);
      })
    }
  }, [republic])

  //отправки локации юзера на сервер
  const locationSend = () => {
    console.log({
      city: {
        _id: typeof city === 'string' ? '' : city._id,
        title: typeof city === 'string' ? '' : city.title,
      },
      region: republic,
      subway,
    })
  }

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
    isPopularLoading
  }
}
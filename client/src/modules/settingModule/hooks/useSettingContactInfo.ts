import { useState, useEffect } from 'react'

import { userApi } from "../../../store/api/userApi";
import { citiesApi } from "../../../store/api/citiesApi";

import { useAppSelector } from '../../../hooks';

export const useSettingContactInfo = () => {
  //функция - подтверждение локации
  const [locationSubmit , { isLoading: isLocationSubmitLoading }] = userApi.useLocationChangeMutation();
  //запрос города, чтобы получить список метро, если он существует
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

  return {
    isCityOpen, setIsCityOpen,
    city, setCity,
    cityChoose, setCityChoose,
    subway, setSubway,
    subwayChoose, setSubwayChoose,
    setRegion,
    isFetchCityLoading, isLocationSubmitLoading,
    closePopUp, submit,
  }
}
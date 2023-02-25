import React, { FC, useState, useEffect } from "react";

import { IGenLocation, ICitiesResponse } from "../../types/types";
import { useAppSelector } from "../../../../hooks";
import { GenLocationList } from "./GenLocationList";
import { useDebounce } from "../../../../hooks/common-hooks/useDebounce";

import { citiesApi } from '../../../../store/api/citiesApi'

export const GenLocation: FC<IGenLocation> = ({ setIsLocationOpen }) => {
  //получение городов запрос
  const [citySearch, { data, error, isError, isLoading }] = citiesApi.useLazyGetCitiesQuery();

  //выбранный город
  const city = useAppSelector(state => state.userReducer.data.contactInfo.location.city);

  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [cities, setCities] = useState<ICitiesResponse[] | []>([]);
  const [cityInput, setCityInput] = useState<string>('');

  const debounce = useDebounce(cityInput);

  useEffect(() => {
    if(!debounce || debounce.length < 3) return
    citySearch(debounce)
    .then(payload => {
      if(payload.data) {setCities(payload.data); setIsSearchActive(true)}
    })
  }, [debounce])

  
  return (
    <div className="gen-location" onClick={() => setIsLocationOpen(false)}>
      <div className="gen-location__container" onClick={(e) => e.stopPropagation()}>
        <div className="gen-location__close"><i className="fa-solid fa-xmark"></i></div>
        <p className="gen-location__title">Город или регион</p>
        <div className="gen-location__input-container">
          <input value={cityInput} onChange={e => setCityInput(e.target.value)} type="text" className="gen-location__input"/>
              <button
                className="gen-location__input-clear"
                onClick={() => setCityInput("")}>
                <i className="fa-solid fa-xmark"></i>
              </button>
        </div>
        {
          isSearchActive
          ? 
            
            <GenLocationList cities={cities} setIsSearchActive={setIsSearchActive} isLoading={isLoading}/> 
          : 
            <div className="gen-location__empty-list"></div>
        }
        <div className="gen-location__buttons">
          {
            city 
            ?
            <>
              <label>
                <span>Сначала в выбранном городе</span>
                <input type="checkbox" name="" id="" />
              </label>
              <button type="submit" className="gen-location__submit">
                Показать 5 объявлений
              </button>
            </>
            :
            <button type="submit" className="gen-location__submit" disabled>
                Показать 5 объявлений
            </button>
          }
        </div>
      </div>
    </div>
  );
};

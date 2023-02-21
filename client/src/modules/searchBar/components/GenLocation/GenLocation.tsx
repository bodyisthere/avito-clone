import React, { FC, useState, useRef, useEffect } from "react";

import { IGenLocation, ICities } from "../../types/types";
import { useClosePop } from "../../../../hooks/common-hooks/useClosePop";
import { useAppSelector } from "../../../../hooks";
import { GenLocationList } from "./GenLocationList";
import { useDebounce } from "../../../../hooks/common-hooks/useDebounce";

import { citiesApi } from '../../../../store/api/citiesApi'

export const GenLocation: FC<IGenLocation> = ({ setIsLocationOpen }) => {
  const { city } = useAppSelector(state => state.locationReducer);

  const root = useRef<HTMLDivElement | null>(null);
  const searchRoot = useRef<HTMLUListElement | null>(null);

  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [cities, setCities] = useState<ICities[] | []>([]);
  
  useClosePop(root, setIsLocationOpen);
  useDebounce(value);
  
  useEffect(() => {
    if(value.length === 0) return;
    const citiesSearch = async () => {
      citiesApi.useGetCitiesQuery(value);
      // setCities(response.data);
    }
    citiesSearch();
  }, [value]); 

  console.log(cities)

  return (
    <div className="gen-location">
      <div className="gen-location__container" ref={root}>
        <div
          className="gen-location__close"
          onClick={() => setIsLocationOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <p className="gen-location__title">Город или регион</p>
        <div className="gen-location__input-container">
          <input
            type="text"
            value={value}
            className="gen-location__input"
            onClick={() => setIsSearchActive(true)}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="gen-location__input-clear"
            onClick={() => setValue("")}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        {isSearchActive ? <GenLocationList searchRoot={searchRoot} cities={cities} setIsSearchActive={setIsSearchActive} /> : ''}
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

import React, { FC, useState, useRef, useEffect } from "react";

import { ICitiesResponse } from "../../types/types";
import { useActions } from "../../../../hooks";
import { Loader } from "../../../../UI";

interface IGenLocationList {
  cities: [] | ICitiesResponse[]
  isLoading: boolean
  setIsSearchActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const GenLocationList: FC<IGenLocationList> = ( {cities, setIsSearchActive, isLoading} ) => {
  const { setDistricts, setMetroes, setUserCityRegion } = useActions();

  const submitCity = (_id: string, city: string, region: string, districts: string[] | [], metroes: string[] | []) => {
    setUserCityRegion({city: {_id, title: city}, region});
    setDistricts(districts);
    setMetroes(metroes);
  }
  
  return (
    <ul className="gen-location__list">
      {
        isLoading
        ?
          <Loader widthAdditional={64} widthMain={80}/>
        :
          cities.map((el, index) => {
            return <li className="gen-location__item" onClick={() => submitCity(el._id, el.city, el.region, el.districts ? el.districts : [], el.metro ? el.metro : [])} key={index}>{el.city}, <span>{el.region}</span></li>
          })
      }
    </ul>
  )
}
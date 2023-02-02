import React, { FC, useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import { locationSlice } from "../../store/locationSlice";
import { ICities } from "../../types/types";

interface IGenLocationList {
  cities: [] | ICities[]
  searchRoot: React.MutableRefObject<HTMLUListElement | null>
  setIsSearchActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const GenLocationList: FC<IGenLocationList> = ( {cities, searchRoot, setIsSearchActive} ) => {
  const dispatch = useDispatch();
  const { setRegion, setDistricts, setMetroes } = locationSlice.actions;

  const submitCity = (_id: string, city: string, region: string, districts: string[] | [], metroes: string[] | []) => {
    dispatch(setRegion({_id, city, region}))
    dispatch(setDistricts(districts));
    dispatch(setMetroes(metroes))
    setIsSearchActive(false);
  }
  
  useEffect(() => {
    const closeList = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if(!searchRoot.current?.contains(target)) {
        setIsSearchActive(false);
      }
    }
    setTimeout(() => document.addEventListener('click', closeList), 100)
    return () => document.removeEventListener('click', closeList)
  }, [])

  return (
    <ul className="gen-location__list">
      {
        cities.map((el, index) => {
          return <li className="gen-location__item" onClick={() => submitCity(el._id, el.city, el.region, el.districts ? el.districts : [], el.metro ? el.metro : [])} key={index}>{el.city}, <span>{el.region}</span></li>
        })
      }
    </ul>
  )
}
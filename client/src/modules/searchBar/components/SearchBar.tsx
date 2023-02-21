import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/img/logo.png";
import "./SearchBar.scss";

import { bodyScrollBlock } from "../../../utils/bodyScrollBlock";
import { useAppSelector } from "../../../hooks";

import { Button } from "../../../UI";
import { Categories } from "./Categories/Categories";
import { GenLocation } from "./GenLocation/GenLocation";
import { LocalLocation } from "./LocalLocation/LocalLocation";

export const SearchBar: FC = () => {
  const { city } = useAppSelector(state => state.locationReducer);

  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);
  const [isLocationOpen, setIsLocationOpen] = useState<boolean>(false);
  const [isMetroOpen, setIsMetroOpen] = useState<boolean>(false);

  const togglePop = (state: boolean, changeStateFn: React.Dispatch<React.SetStateAction<boolean>>) => {
    changeStateFn(!state);
    bodyScrollBlock(document);
  }
  
  return (
    <div className="search-bar">
      <div className="search-bar__container">
        <div className="search-bar__left">
          <Link to=""><img src={logo} alt="Логотип" className="search-bar__logo" /></Link>
          <Button onClick={() => togglePop(isCategoriesOpen, setIsCategoriesOpen)}>Все категории</Button>
          {
            isCategoriesOpen 
            ? 
            <Categories setIsCategoriesOpen={setIsCategoriesOpen} /> 
            : 
            ""
          }
        </div>
        <div className="search-bar__right">
          <input type="text" className="search-bar__input" placeholder="Поиск по объявлениям" />
          <div className="search-bar__right-transform">
            <button
              className="search-bar__location"
              onClick={() => togglePop(isLocationOpen, setIsLocationOpen)}>
              {city ? city : 'Город...'} <i className="fa-solid fa-caret-down"></i>
            </button>
            {
              isLocationOpen 
              ? 
              <GenLocation setIsLocationOpen={setIsLocationOpen} /> 
              : 
              ""
            }
            <button className="search-bar__metro" onClick={() => togglePop(isMetroOpen, setIsMetroOpen)}>Радиус / Метро / Район <i className="fa-solid fa-caret-down"></i></button>
            {
              isMetroOpen 
              ? 
              <LocalLocation setIsMetroOpen={setIsMetroOpen} /> 
              : 
              ""
            }
            <Button>Найти</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

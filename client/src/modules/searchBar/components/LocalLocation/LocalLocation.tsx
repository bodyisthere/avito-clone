import React, { FC, useState, useRef } from "react";
import { Link } from "react-router-dom";

import { useClosePop } from "../../../../hooks/common-hooks/useClosePop";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks/redux";
import { ILocalLocation } from "../../types/types";

import { LocalHood } from "./LocalHood";
import { LocalRadius } from "./LocalRadius";
import { LocalSubway } from "./LocalSubway";


export const LocalLocation: FC<ILocalLocation> = ({ setIsMetroOpen }) => {
  const { districts, metroes } = useAppSelector(state => state.locationReducer);

  const [isHood, setIsHood] = useState<boolean>(false);
  const [isRadius, setIsRadius] = useState<boolean>(true);
  const [isSubway, setIsSubway] = useState<boolean>(false);

  const root = useRef<HTMLDivElement | null>(null);
  useClosePop(root, setIsMetroOpen);

  const openPop = (radius: boolean, subway: boolean, hood: boolean) => {
    setIsRadius(radius);
    setIsSubway(subway);
    setIsHood(hood);
  }

  return (
    <div className="local-location">
      <div className="local-location__container" ref={root}>
        <div className="local-location__close" onClick={() => setIsMetroOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="local-location__top">
          <ul className="local-location__menu">
            <li className={`local-location__menu-item ${isRadius ? "local-location__menu-item--active" : ""}`}
              onClick={() => openPop(true, false, false)}>
              Радиус поиска
            </li>
            {
              districts && districts.length
              ?
              <li className={`local-location__menu-item ${isSubway ? "local-location__menu-item--active" : ""}`}
                onClick={() => openPop(false, true, false)}>
                Метро
              </li>
              :
              ''
            }
            {
              metroes && metroes.length
              ?
              <li className={`local-location__menu-item ${isHood ? "local-location__menu-item--active" : ""}`}
                onClick={() => openPop(false, false, true)}>
                Районы
              </li>
              :
              ''
            }
          </ul>
        </div>
        <div className="local-location__center">
          {isHood ? <LocalHood /> : ""}
          {isRadius ? <LocalRadius /> : ""}
          {isSubway ? <LocalSubway /> : ""}
        </div>
        <div className="local-location__bottom">
          <button className="local-location__button">
            Показать 5 объявлений
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { FC, useState, useRef } from "react";
import { Link } from "react-router-dom";

import { useClosePop } from "../../../../hooks/common-hooks/useClosePop";
import { useAppSelector } from "../../../../hooks";
import { ILocalLocation } from "../../types/types";

import { Button } from "../../../../UI";

import { LocalHood } from "./LocalHood";
import { LocalRadius } from "./LocalRadius";
import { LocalSubway } from "./LocalSubway";

import styles from './LocalLocation.module.scss'


export const LocalLocation: FC<ILocalLocation> = ({ setIsMetroOpen }) => {
  const styleAlias = 'local-location__'
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
    <div className={styles['local-location']}>
      <div className={styles[`local-location__container`]} ref={root}>
        <div className={styles[`local-location__close`]} onClick={() => setIsMetroOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className={styles[`local-location__top`]}>
          <ul className={styles[`local-location__menu`]}>
            <li 
              className={`${styles['local-location__menu-item']} ${isRadius && `${styles['local-location__menu-item--active']}`}`}
              onClick={() => openPop(true, false, false)}
            >
              Радиус поиска
            </li>
            {
              districts && districts.length
              ?
              <li 
                className={`${styles[`local-location__menu-item`]} ${isSubway && `${styles['local-location__menu-item--active']}`}`}
                onClick={() => openPop(false, true, false)}
              >
                Метро
              </li>
              :
              ''
            }
            {
              metroes && metroes.length
              ?
              <li className={`${styles['local-location__menu-item']} ${isHood && `${styles['local-location__menu-item--active']}`}`}
                onClick={() => openPop(false, false, true)}>
                Районы
              </li>
              :
              ''
            }
          </ul>
        </div>
        <div className={styles[`local-location__center`]}>
          {isHood ? <LocalHood /> : ""}
          {isRadius ? <LocalRadius /> : ""}
          {isSubway ? <LocalSubway /> : ""}
        </div>
        <div className={styles[`local-location__bottom`]}>
          <Button>Показать 5 объявлений</Button>
        </div>
      </div>
    </div>
  );
};

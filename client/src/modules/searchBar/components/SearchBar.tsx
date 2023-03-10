import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/img/logo.png';
import styles from './SearchBar.module.scss'

import { bodyScrollBlock } from '../../../utils/bodyScrollBlock';
import { useAppSelector } from '../../../hooks';

import { Button } from '../../../UI';
import { Categories } from './Categories/Categories';
import { GenLocation } from './GenLocation/GenLocation';
import { LocalLocation } from './LocalLocation/LocalLocation';

export const SearchBar: FC = () => {
  const { city } = useAppSelector(state => state.userReducer.data.contactInfo.location)

  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);
  const [isLocationOpen, setIsLocationOpen] = useState<boolean>(false);
  const [isMetroOpen, setIsMetroOpen] = useState<boolean>(false);

  const togglePop = (state: boolean, changeStateFn: React.Dispatch<React.SetStateAction<boolean>>) => {
    changeStateFn(!state);
    bodyScrollBlock(document);
  }
  
  return (
    <div className={styles['search-bar']}>
      <div className={styles[`search-bar__container`]}>
        <div className={styles[`search-bar__left`]}>
          <Link to='/'><img src={logo} alt='Логотип' className={styles[`search-bar__logo`]} /></Link>
          <Button onClick={() => togglePop(isCategoriesOpen, setIsCategoriesOpen)}>Все категории</Button>
          {
            isCategoriesOpen 
            ? 
            <Categories setIsCategoriesOpen={setIsCategoriesOpen} /> 
            : 
            ``
          }
        </div>
        <div className={styles[`search-bar__right`]}>
          <input type='text' className={styles[`search-bar__input`]} placeholder='Поиск по объявлениям' />
          <div className={styles[`search-bar__right-transform`]}>
            <button
              className={styles[`search-bar__location`]}
              onClick={() => togglePop(isLocationOpen, setIsLocationOpen)}>
              {city.title !== '' ? city.title : 'Город...'} <i className='fa-solid fa-caret-down'></i>
            </button>
            {
              isLocationOpen 
              ? 
              <GenLocation setIsLocationOpen={setIsLocationOpen} /> 
              : 
              ``
            }
            <button className={styles[`search-bar__metro`]} onClick={() => togglePop(isMetroOpen, setIsMetroOpen)}>Радиус / Метро / Район <i className='fa-solid fa-caret-down'></i></button>
            {
              isMetroOpen 
              ? 
              <LocalLocation setIsMetroOpen={setIsMetroOpen} /> 
              : 
              ''
            }
            <Button>Найти</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

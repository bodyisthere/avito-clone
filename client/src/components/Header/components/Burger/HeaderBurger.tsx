//импорт внешних пакетов
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//импорт стилей
import styles from './Burger.module.scss'

//импорт типов

//импорт функционала
import { useActions, useAppSelector } from "../../../../hooks";
import { otherLinks, extendedLinks } from '../../data/links'

//импорт компонентов
import { Button } from "../../../../UI";

interface IHeaderBurger {
  setIsBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const HeaderBurger: FC<IHeaderBurger> = ({setIsBurgerOpen}) => {
  const { avatar, name } = useAppSelector(state => state.userReducer.data);
  const { setAuthPop } = useActions();

  const newPost = (e: any) => {
    if(!avatar) {
      setAuthPop(true);
      e.preventDefault();
    };
  }

  return (
    <div className={styles.burger} onClick={() => setIsBurgerOpen(false)}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <ul className={styles.list}>
          {
            avatar 
            ?
            <>
              <li className={styles.avatar}>
                <img src={`http://localhost:5000/uploads/${avatar}`} alt="" />
                <p>{name}</p>
              </li>
              {
                extendedLinks.map((e, i) => {
                  return (
                    e.map((el, index) => {
                      return (
                        <li className={styles.item} onClick={() => setIsBurgerOpen(false)} key={index}>
                          <Link to={el.link}>{el.title}</Link>
                        </li>
                      )
                    })
                  )
                })
              }
            </>
            :
              <button className={styles.enter} onClick={() => setAuthPop(true)}>
                Вход и регистрация
              </button>
          }
          {
            otherLinks.map((el, index) => {
              return (
                <li className={styles.item} onClick={() => setIsBurgerOpen(false)}>
                  <Link to={el.link}>{el.title}</Link>
                </li>
              )
            })
          }
          <button className={styles.enter}>
            <Link to="/addads" onClick={(e) => newPost(e)}>
              Разместить объявление
            </Link>
          </button>
        </ul>
      </div>
    </div>
  )
}
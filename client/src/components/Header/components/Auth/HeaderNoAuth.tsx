//импорт внешних пакетов
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//импорт стилей
import styles from './Auth.module.scss'

//импорт типов

//импорт функционала
import { useActions } from "../../../../hooks";

//импорт компонентов

interface IHeaderNoAuth {
  
}

export const HeaderNoAuth: FC<IHeaderNoAuth> = () => {
  const { setAuthPop } = useActions();

  return (
    <ul className={styles.list}>
      <li className={styles.item} title="Избранное">
        <Link to="/">
          <i className="fa-solid fa-heart"></i>
        </Link>
      </li>
      <li className={styles.item}>
        <button className={styles.enter} onClick={() => setAuthPop(true)}>
          Вход и регистрация
        </button>
      </li>
    </ul>
  )
}
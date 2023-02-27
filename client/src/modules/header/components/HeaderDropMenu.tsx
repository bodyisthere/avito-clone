import React, { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../../hooks";

import { useClosePop } from "../../../hooks/common-hooks/useClosePop";
import { authApi } from "../../../store/api/authApi";

import styles from './Header.module.scss'

//описывает прилетающие в него пропсы
interface ITest {
  setShowDropMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderDropMenu: FC<ITest> = ({ setShowDropMenu }) => {
  const [ logout, {  } ] = authApi.useLazyLogoutQuery();
  const { logout: logoutStore } = useActions()

  const root = useRef<HTMLDivElement | null>(null);
  useClosePop(root, setShowDropMenu);

  const logoutHandle = () => {
    logout(); 
    logoutStore();
    document.location.reload();
  }

  return (
    <div className={styles["header-drop"]} ref={root}>
      <div className={styles["header-drop__rate"]}>
        <div className={styles["header-drop__rate-avg"]}>5,0</div>
        <div className={styles["header-drop__stars"]}>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className={styles["header-drop__reviews"]}>6 отзывов</div>
      </div>
      <ul className={styles["header-drop__list"]}>
        <li className={styles["header-drop__item"]}>
          <Link to="/my-ads">Мои объявления</Link>
        </li>
        <li className={styles["header-drop__item"]}>
          <Link to="/my-orders">Заказы</Link>
        </li>
        <li className={styles["header-drop__item"]}>
          <Link to="/my-reviews">Мои отзывы</Link>
        </li>
        <li className={styles["header-drop__item"]}>
          <Link to="/favorites">Избранное</Link>
        </li>
      </ul>
      <ul className={styles["header-drop__list"]}>
        <li className={styles["header-drop__item"]}>
          <Link to="/dialogues">Сообщения</Link>
        </li>
        <li className={styles["header-drop__item"]}>
          <Link to="/notifications">Уведомления</Link>
        </li>
      </ul>
      <ul className={styles["header-drop__list"]}>
        <li className={styles["header-drop__item"]}>
          <Link to="/wallet">Кошелёк</Link>
        </li>
        <li className={styles["header-drop__item"]}>
          <Link to="/paid-services">Платные услуги</Link>
        </li>
        <li className={styles["header-drop__item"]}>
          <Link to="/special-offers">Спецпредложения</Link>
        </li>
      </ul>
      <ul className={styles["header-drop__list"]}>
        <li className={styles["header-drop__item"]}>
          <Link to="/profile/basic">Управление профилем</Link>
        </li>
        <li className={styles["header-drop__item"]}>
          <Link to="/profile/safety">Защита профиля</Link>
        </li>
        <li className={styles["header-drop__item"]}>
          <Link to="/profile/settings">Настройки</Link>
        </li>
      </ul>
      <button className={styles["header-drop__leave"]} onClick={() => logoutHandle()}>Выйти</button>
    </div>
  );
};

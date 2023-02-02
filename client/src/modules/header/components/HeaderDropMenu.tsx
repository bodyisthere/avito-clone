import React, { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { useClosePop } from "../../../hooks/common-hooks/useClosePop";

//описывает прилетающие в него пропсы
interface ITest {
  setShowDropMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderDropMenu: FC<ITest> = ({ setShowDropMenu }) => {
  const root = useRef<HTMLDivElement | null>(null);
  useClosePop(root, setShowDropMenu);

  return (
    <div className="header-drop" ref={root}>
      <div className="header-drop__rate">
        <div className="header-drop__rate-avg">5,0</div>
        <div className="header-drop__stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="header-drop__reviews">6 отзывов</div>
      </div>
      <ul className="header-drop__list">
        <li className="header-drop__item">
          <Link to="">Мои объявления</Link>
        </li>
        <li className="header-drop__item">
          <Link to="">Заказы</Link>
        </li>
        <li className="header-drop__item">
          <Link to="">Мои отзывы</Link>
        </li>
        <li className="header-drop__item">
          <Link to="">Избранное</Link>
        </li>
      </ul>
      <ul className="header-drop__list">
        <li className="header-drop__item">
          <Link to="">Сообщения</Link>
        </li>
        <li className="header-drop__item">
          <Link to="">Уведомления</Link>
        </li>
      </ul>
      <ul className="header-drop__list">
        <li className="header-drop__item">
          <Link to="">Кошелёк</Link>
        </li>
        <li className="header-drop__item">
          <Link to="">Платные услуги</Link>
        </li>
        <li className="header-drop__item">
          <Link to="">Спецпредложения</Link>
        </li>
      </ul>
      <ul className="header-drop__list">
        <li className="header-drop__item">
          <Link to="">Управление профилем</Link>
        </li>
        <li className="header-drop__item">
          <Link to="">Защита профиля</Link>
        </li>
        <li className="header-drop__item">
          <Link to="">Настройки</Link>
        </li>
      </ul>
      <button className="header-drop__leave">Выйти</button>
    </div>
  );
};

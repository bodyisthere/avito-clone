import { FC } from "react";
import { Link } from "react-router-dom";

import "./PopularCategories.scss";

export const PopularCategories: FC = () => {
  return (
    <div className="popular">
      <div className="popular__container">
        <ul className="popular__list">
          <li className="popular__item">
            <Link to="">Одежда, обувь и аксессуары</Link>
          </li>
          <li className="popular__item">
            <Link to="">Транспорт</Link>
          </li>
          <li className="popular__item">
            <Link to="">Работа</Link>
          </li>
          <li className="popular__item">
            <Link to="">Автозапчасти и аксессуары</Link>
          </li>
          <li className="popular__item">
            <Link to="">Для дома и дачи</Link>
          </li>
          <li className="popular__item">
            <Link to="">Недвижимость</Link>
          </li>
          <li className="popular__item">
            <Link to="">Услуги</Link>
          </li>
          <li className="popular__item">
            <Link to="">Хобби и отдых</Link>
          </li>
          <li className="popular__item">
            <Link to="">Электроника</Link>
          </li>
          <li className="popular__item">
            <Link to="">Товары для детей и игрушки</Link>
          </li>
          <li className="popular__item">
            <Link to="">Красота и здоровье</Link>
          </li>
          <li className="popular__item">
            <Link to="">Животные</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

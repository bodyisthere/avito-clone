import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import "./RecentlyWatched.scss";

export const RecentlyWatched: FC = () => {
  // const [productHistory, setProductHistory] = useState<number | null>(2)

  return (
    <div className="recently-watched">
      <div className="recently-watched__title">Вы смотрели</div>
      <ul className="recently-watched__products">
        <li className="recently-watched__product">
          <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" className="recently-watched__product-img" />
          <div className="recently-watched__product-info">
            <div className="recently-watched__product-top">
              <div className="recently-watched__product-name">Чертов слонЧертов слонЧертов слон</div>
              <button className="recently-watched__product-like"><i className="fa-solid fa-heart"></i></button>
            </div>
            <div className="recently-watched__product-price">11 000Р</div>
            <div className="recently-watched__product-adress">Республика Татарстан, Казань, Чуйкова 38А, дом 15, квартира 145</div>
          </div>
        </li>
        <li className="recently-watched__product">
          <Link to={''}><img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" className="recently-watched__product-img" /></Link>
          <div className="recently-watched__product-info">
            <div className="recently-watched__product-top">
              <Link to='/' className="recently-watched__product-name">Чертов слонЧертов слонЧертов слон</Link>
              <button className="recently-watched__product-like"><i className="fa-solid fa-heart"></i></button>
            </div>
            <div className="recently-watched__product-price">11 000Р</div>
            <div className="recently-watched__product-adress">Республика Татарстан, Казань, Чуйкова 38А, дом 15, квартира 145</div>
          </div>
        </li>
        <li className="recently-watched__product">
          <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" className="recently-watched__product-img" />
          <div className="recently-watched__product-info">
            <div className="recently-watched__product-top">
              <div className="recently-watched__product-name">Чертов слонЧертов слонЧертов слон</div>
              <button className="recently-watched__product-like"><i className="fa-solid fa-heart"></i></button>
            </div>
            <div className="recently-watched__product-price">11 000Р</div>
            <div className="recently-watched__product-adress">Республика Татарстан, Казань, Чуйкова 38А, дом 15, квартира 145</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

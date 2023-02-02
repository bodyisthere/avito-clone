import React, { FC } from "react";

import "./Products.scss";
import { Product } from "./Product";

export const Products: FC = () => {
  return (
    <div className="products">
      <div className="products__container">
        <div className="products__title">Рекомендации для вас</div>
        <div className="products__list">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

import React, { FC } from "react";

import styles from './Products.module.scss'
import { Product } from "./Product";

export const Products: FC = () => {
  return (
    <div className={styles["products"]}>
      <div className={styles["products__container"]}>
        <div className={styles["products__title"]}>Рекомендации для вас</div>
        <div className={styles["products__list"]}>
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

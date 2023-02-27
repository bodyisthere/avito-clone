import React, { FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { ProductReport } from "./ProductReport";
import { ProductSlider } from "./ProductSlider/ProductSlider";

import styles from './Products.module.scss'

export const Product: FC = () => {
  //лайк прожат или нет
  const [isLike, setIsLike] = useState<boolean>(false);
  //открыт ли репорт о посте - скрыть или не нравится категория
  const [isReport, setIsReport] = useState<boolean>(false);
  //спрятан ли пост от репорта или нет
  const [isHide, setIsHide] = useState<boolean>(false);
  //открыт ли слайдер или нет
  const [isSlider, setIsSlider] = useState<boolean>(false);

  //переменные слайдера
  const [slides, setSlides] = useState<string[]>([
    "https://sun7-8.userapi.com/impg/7Ib4l1fX7PYs-vjl6WBcfUuhLHbr_ocuMerK6w/g2pNYXNLT70.jpg?size=1620x2160&quality=95&sign=eac95bf1e0d100e1e1936ff508911be0&type=album",
    "https://sun7-7.userapi.com/impg/kmOHLqafS-LNQyZqpIaOP7lL4nHMLzckXd68BQ/5NTu0XWsVv4.jpg?size=810x1080&quality=95&sign=69a75c92577f011a82f2cbcdd885cdc0&type=album",
    "https://sun7-8.userapi.com/impg/S3Iu9GSvo3n0XuMXsc4m6dNuaaJdGZEt0RPzlA/mSV30oN3eNQ.jpg?size=1280x960&quality=95&sign=d5b100fea95ce9eae731a1ac003e5631&type=album",
    "https://sun7-6.userapi.com/impg/0IgGgwqxI09_zXxIHfLucP88FhYjGHlc8fr_FA/TsEw5YrXexc.jpg?size=1280x960&quality=95&sign=c0dc6725d8d066a81c04c6ee8f045d61&type=album",
    "https://sun7-15.userapi.com/impg/s6dxoR9hgn482IKUTAgLK0c97_LJERzP7cUOtQ/_2TSldruEbs.jpg?size=1280x960&quality=95&sign=01db4d70496f633d540e46ea9f4d1c32&type=album",
    "5",
  ]);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { current } = root;
    if (current) current.addEventListener("mouseover", () => setIsSlider(true));
    if (current)
      current.addEventListener("mouseout", () => {
        setIsSlider(false);
        setActiveSlide(0);
      });
  });

  return isHide 
  ? 
  (
    <div className={`${styles["product"]} ${styles["product__hide"]}`}>Объявление скрыто</div>
  ) 
  : 
  (
    <div className={"product"} ref={root}>
      <div className={styles["product__imgs"]}>
        {slides.length > 5 && activeSlide === 4 ? (
          <div className={styles["product__img-not-last"]}>
            <img className={styles["product__img"]} src={slides[activeSlide]} alt="" />
            <div className={styles["product__img--blured"]}>
              Ещё {slides.length - 5} фото
            </div>
          </div>
        ) : (
          <img className={styles["product__img"]} src={slides[activeSlide]} alt="" />
        )}
        {isSlider ? (
          <ProductSlider
            setActiveSlide={setActiveSlide}
            slides={slides}
            activeSlide={activeSlide}
          />
        ) : (
          ""
        )}
      </div>
      <div className={styles["product__center"]}>
        <Link to="">
          <div className={styles["product__title"]}>Кроссовки nike</div>
        </Link>
        <button
          className={`${styles['product__like']} ${isLike && `${styles["product__like--active"]}`}`}>
          <i className="fa-solid fa-heart"></i>
        </button>
      </div>
      <div className={styles["product__price"]}>
        <div className={styles["product__price-info"]}>
          <span>5000Р</span>
          <div className={styles["product__ship"]} title="Авито доставка">
            <i className="fa-solid fa-truck"></i>
          </div>
        </div>
        <div className={styles["product__price-report"]}>
          <button
            className={styles["product__price-dots"]}
            onClick={() => setIsReport(!isReport)}>
            <i className="fa-solid fa-ellipsis"></i>
          </button>
          {isReport ? (
            <ProductReport setIsReport={setIsReport} setIsHide={setIsHide} />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles["product__location"]}>Казань, Дубравная</div>
    </div>
  );
};

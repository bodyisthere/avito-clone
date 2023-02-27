import React, { FC } from "react";
import { ProductSlide } from "./ProductSlide";

import styles from '../Products.module.scss'

interface IProductSlider {
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
  slides: string[];
  activeSlide: number;
}

export const ProductSlider: FC<IProductSlider> = ({
  setActiveSlide,
  activeSlide,
  slides,
}) => {
  return (
    <div className={styles["product__slide-counts"]}>
      {slides.length > 1
        ? slides.length > 5
          ? slides.map((el, index) => {
              if (index > 4) return "";
              return (
                <ProductSlide
                  key={index}
                  activeSlide={activeSlide}
                  index={index}
                  setActiveSlide={setActiveSlide}
                  width={
                    slides.length === 2
                      ? "134px"
                      : slides.length === 3
                      ? "87.68px"
                      : slides.length === 4
                      ? "64.5px"
                      : slides.length >= 5
                      ? "50px"
                      : ""
                  }
                />
              );
            })
          : slides.map((el, index) => {
              return (
                <ProductSlide
                  key={index}
                  activeSlide={activeSlide}
                  index={index}
                  setActiveSlide={setActiveSlide}
                  width={
                    slides.length === 2
                      ? "134px"
                      : slides.length === 3
                      ? "87.68px"
                      : slides.length === 4
                      ? "64.5px"
                      : slides.length >= 5
                      ? "50px"
                      : ""
                  }
                />
              );
            })
        : ""}
    </div>
  );
};

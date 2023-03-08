import React, { FC, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Loader } from "../../../../UI";

import { CategoryItem } from "./CategoryItem";
import { useClosePop } from "../../../../hooks/common-hooks/useClosePop";
import { ICategories } from "../../types/types";
import { useActions } from "../../../../hooks";
import { categoriesApi } from "../../../../store/api/categoriesApi";

import styles from './Categories.module.scss'


export const Categories: FC<ICategories> = ({ setIsCategoriesOpen }) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const { setCategories } = useActions();
  const { data, isLoading, error, isError } = categoriesApi.useGetCategoriesQuery();

  useEffect(() => {
    if(data) {
      setCategories(data);
    }
  }, [data])

  const root = useRef<HTMLDivElement | null>(null);
  useClosePop(root, setIsCategoriesOpen);

  return (
    <div className={styles["categories"]}>
      <div className={styles["categories__container"]} ref={root}>
        <div
          className={styles["categories__close"]}
          onClick={() => setIsCategoriesOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        {isLoading ? <Loader widthMain={80} widthAdditional={64}/> : ''}
        {isError ? `${error}` : ''}
        <ul className={styles["categories__type-list"]}>
          {
            data
            ?
            <>
              {data.map((el, index) => {
                return (
                  <li
                  className={styles["categories__type-item"]}
                  key={index}
                  onClick={() => setActiveCategory(index)}>
                  {el.category}
                </li>
                );
              })}
            </>
            :
            ''
          }
        </ul>
        <CategoryItem
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
    </div>
  );
};

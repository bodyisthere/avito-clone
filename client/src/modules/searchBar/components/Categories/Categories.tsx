import React, { FC, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { CategoryItem } from "./CategoryItem";
import { useClosePop } from "../../../../hooks/common-hooks/useClosePop";
import { useAppSelector } from "../../../../hooks/redux-hooks/redux";
import { ICategories } from "../../types/types";

export const Categories: FC<ICategories> = ({ setIsCategoriesOpen }) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const {data} = useAppSelector(state => state.categoryReducer);

  const root = useRef<HTMLDivElement | null>(null);
  useClosePop(root, setIsCategoriesOpen);

  return (
    <div className="categories">
      <div className="categories__container" ref={root}>
        <div
          className="categories__close"
          onClick={() => setIsCategoriesOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <ul className="categories__type-list">
          {data.map((el, index) => {
            return (
              <li
                className="categories__type-item"
                key={index}
                onClick={() => setActiveCategory(index)}>
                {el.category}
              </li>
            );
          })}
        </ul>
        <CategoryItem
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
    </div>
  );
};

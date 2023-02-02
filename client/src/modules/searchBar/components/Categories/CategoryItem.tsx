import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import { Subchapter } from "./Subchapter";
import { useAppSelector } from "../../../../hooks/redux-hooks/redux";
import { ICategoryItem } from "../../types/types";

export const CategoryItem: FC<ICategoryItem> = ({activeCategory, setActiveCategory}) => {
  const {data} = useAppSelector(state => state.categoryReducer);

  return (
    <ul className="categories__type-sublist">
      {data.map((category, index): ReactNode => {
        if (activeCategory !== index) return "";
        return (
          <li className="categories__type-subitem" key={index}>
            <div className="categories__type-subitem-title">{category.category}</div>
            <ul className="categories__type-subitem-list">
              {category.chapter.map((subchapter, index): ReactNode => {
                return <Subchapter subchapter={subchapter} key={index}/>
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

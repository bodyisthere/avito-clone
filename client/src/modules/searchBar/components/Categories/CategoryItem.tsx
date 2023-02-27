import React, { FC, ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";

import { Subchapter } from "./Subchapter";
import { useAppSelector } from "../../../../hooks";
import { ICategoryItem } from "../../types/types";

import styles from './Categories.module.scss'

export const CategoryItem: FC<ICategoryItem> = ({activeCategory, setActiveCategory}) => {
  const data = useAppSelector(state => state.categoryReducer);

  return (
    <ul className={styles["categories__type-sublist"]}>
      {data.map((category, index): ReactNode => {
        if (activeCategory !== index) return "";
        return (
          <li className={styles["categories__type-subitem"]} key={index}>
            <div className={styles["categories__type-subitem-title"]}>{category.category}</div>
            <ul className={styles["categories__type-subitem-list"]}>
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

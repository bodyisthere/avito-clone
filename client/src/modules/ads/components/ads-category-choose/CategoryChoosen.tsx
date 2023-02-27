import React, {FC, useEffect, useState} from 'react'

import { useAppSelector } from '../../../../hooks'
import { categoryFormat } from '../../helpers/categoryFormat'
import { ICategoryChoosen } from '../../types/types'

import { AutoNew, AutoRun } from '../ads-categories'

import styles from './CategoryChoose.module.scss'

export const CategoryChoosen: FC<ICategoryChoosen> = () => {
  const { category } = useAppSelector(state => state.adsReducer);

  const [prettyCategory, setPrettyCategory] = useState(categoryFormat(category));

  return (
    <div className={styles["category-choosen"]}>
      <div className={styles["category-choosen__category-title"]}>
        <div className={styles["category-choosen__title-second"]}>Категория:</div>
        <div className={styles["category-choosen__subtitle-second"]}>{prettyCategory}</div>
      </div>
      {
      category[0] === 'Транспорт' 
        ? 
        category[1] === 'Автомобили' 
          ? 
            category[2] === 'Новый'
            ?
            <AutoNew />
            :
            <AutoRun />
          : 
          ''
        : 
        ''
      }

    </div>
  )
}
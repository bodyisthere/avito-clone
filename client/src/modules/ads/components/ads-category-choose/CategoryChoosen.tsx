//импорт внешних пакетов
import React, {FC, useEffect, useState} from 'react'

//импорт стилей
import styles from './CategoryChoosen.module.scss'

//импорт типов

//импорт функционала
import { useAppSelector } from '../../../../hooks'
import { categoryFormat } from '../../helpers/categoryFormat'

//импорт компонентов
import { AutoNew, AutoRun } from '../ads-categories'

interface ICategoryChoosen {
  
}

export const CategoryChoosen: FC<ICategoryChoosen> = () => {
  const { category } = useAppSelector(state => state.adsReducer);

  const [prettyCategory, setPrettyCategory] = useState(categoryFormat(category));

  console.log(category)

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
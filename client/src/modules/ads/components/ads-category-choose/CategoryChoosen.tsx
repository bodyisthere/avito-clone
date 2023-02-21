import React, {FC, useEffect, useState} from 'react'

import { useAppSelector } from '../../../../hooks'
import { categoryFormat } from '../../helpers/categoryFormat'
import { ICategoryChoosen } from '../../types/types'

import { AutoNew, AutoRun } from '../ads-categories'

export const CategoryChoosen: FC<ICategoryChoosen> = () => {
  const { category } = useAppSelector(state => state.adsReducer);

  const [prettyCategory, setPrettyCategory] = useState(categoryFormat(category));

  return (
    <div className="category-choosen">
      <div className="category-choosen__category-title">
        <div className="new-category-ads__title">Категория:</div>
        <div className="new-category-ads__subtitle">{prettyCategory}</div>
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
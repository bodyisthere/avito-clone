import React, {FC, useEffect, useState} from 'react'
import { useAppSelector } from '../../../../hooks/redux-hooks/redux'

import {newAdsSlice} from "../../store/newAdsSlice"
import { categoryFormat } from '../../helpers/categoryFormat'
import { AutoNew } from '../Transport/Auto/AutoNew'
import { AutoRun } from '../Transport/Auto/AutoRun'

export const CategoryChoosen: FC = () => {
  const {category} = useAppSelector(state => state.newAdsReducer);

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
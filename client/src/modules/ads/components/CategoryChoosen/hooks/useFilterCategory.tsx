import { useEffect, useState } from 'react'

import { categoryFormat } from '../../../helpers/categoryFormat'
import { useAppSelector } from '../../../../../hooks'

import { categories } from '../data/categories'

export const useFilterCategory = () => {
  const { category } = useAppSelector(state => state.categoryChooseReducer);

  const [prettyCategory, setPrettyCategory] = useState(categoryFormat(category));
  const [element, setElement] = useState<any>();

  const filterFunction = () => {
    let iCount = 0;
    let result = null;
    while(!result && iCount <= categories.length - 1) {
      if(JSON.stringify(categories[iCount].key) === JSON.stringify(category)) {
        result = categories[iCount].element;
      }
      iCount++;
    }
    return result;
  }

  useEffect(() => {
    setElement(filterFunction);
  }, [])

  return {
    prettyCategory,
    element
  }
}
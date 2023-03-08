import { useEffect } from 'react'
import { categoriesApi } from '../../../../../store/api/categoriesApi';
import { useActions, useAppSelector } from '../../../../../hooks';

export const useLoadCategories = () => {
  const { categoryReducer: categories } = useAppSelector(state => state)
  const [ loadCategories, { isLoading, isError} ] = categoriesApi.useLazyGetCategoriesQuery();
  const { setCategories } = useActions();

  useEffect(() => {
    if(categories.length > 0) return
    loadCategories()
    .then((payload) => {
      if(payload.data) setCategories(payload.data);
    })
  }, [categories]); 

  return {
    categories, isLoading, isError
  }
}
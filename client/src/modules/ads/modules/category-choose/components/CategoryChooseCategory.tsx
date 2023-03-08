//импорт внешних пакетов
import { FC } from 'react'

//импорт стилей
import styles from './CategoryChoose.module.scss'

//импорт типов

//импорт функционала
import { useAppSelector } from '../../../../../hooks';
import { ICategory } from '../../../../../types/category';

//импорт компонентов

interface ICategoryChooseCategory {
  setActiveCategory: any
  setActiveChapter: any 
  setCategory: any
  activeCategory: any
}

export const CategoryChooseCategory: FC<ICategoryChooseCategory> = ( { setActiveCategory, setActiveChapter, setCategory, activeCategory } ) => {
  const { categoryReducer: categories } = useAppSelector(state => state);

  const set = (el: ICategory, index: number) => {
    setActiveCategory(index); 
    setActiveChapter(null); 
    setCategory([el.category])
  }

  return (
    <>
    {
      categories.map((el, index) => {
        return (
          <div 
            key={index}
            className={`${styles['category-choose__main-point']} ${activeCategory === index && styles["category-choose__main-point--active"] }`}
            onClick={() => set(el, index)}
          >
            {el.category}
          </div>
        )
      })
    }
    </>
  )
}
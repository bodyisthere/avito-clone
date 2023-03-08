//импорт внешних пакетов
import React, { FC } from 'react'

//импорт стилей
import styles from './CategoryChoose.module.scss'

//импорт типов

//импорт функционала
import { useAppSelector } from '../../../../../hooks'

//импорт компонентов

interface ICategoryChooseChapter {
  setActiveSubChapter: React.Dispatch<React.SetStateAction<number | null>> 
  setCategory: React.Dispatch<React.SetStateAction<string[] | []>>
  setActiveChapter: React.Dispatch<React.SetStateAction<number | null>>
  activeChapter: number | null
  activeCategory: number | null
}

export const CategoryChooseChapter: FC<ICategoryChooseChapter> = ( { activeCategory, activeChapter, setActiveChapter, setCategory, setActiveSubChapter } ) => {
  const { categoryReducer } = useAppSelector(state => state);

  const set = (el: {title: string;subchapter: string[]}, index: number) => {
    setActiveChapter(index);
    setActiveSubChapter(null); 
    setCategory(prev => [prev[0], prev[1] = el.title])
  }

  return (
    <>
    {
      activeCategory !== null && activeCategory >= 0
      ?
      <div className={styles["category-choose__main"]}>
        <div className={styles["category-choose__title"]}>{categoryReducer[activeCategory].category}</div>
        {
          categoryReducer[activeCategory].chapter.map((el, index): React.ReactNode => {
            return (
              <div 
              className={`${styles['category-choose__main-point']} ${activeChapter === index && styles["category-choose__main-point--active"]}`} 
              key={index}
              onClick={() => set(el, index)}
              >
                {el.title}
            </div>
          )
        })}
      </div>
      :
      ''
    }
    </>
  )
}
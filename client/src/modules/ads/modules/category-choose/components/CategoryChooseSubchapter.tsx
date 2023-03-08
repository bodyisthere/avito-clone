//импорт внешних пакетов
import React, { FC } from 'react'

//импорт стилей
import styles from './CategoryChoose.module.scss'

//импорт типов

//импорт функционала
import { useAppSelector } from '../../../../../hooks'

//импорт компонентов

interface ICategoryChooseSubchapter {
  setActiveSubChapter: React.Dispatch<React.SetStateAction<number | null>> 
  setCategory: React.Dispatch<React.SetStateAction<string[] | []>>
  activeChapter: number | null
  activeCategory: number | null
  activeSubChapter: number | null
  submitCategory: () => void
}

export const CategoryChooseSubchapter: FC<ICategoryChooseSubchapter> = ( { activeCategory, activeChapter, activeSubChapter, setActiveSubChapter, setCategory, submitCategory } ) => {
  const { categoryReducer: categories } = useAppSelector(state => state);

  const set = (el: any, index: number) => {
    setActiveSubChapter(index); 
    setCategory(prev => [prev[0], prev[1], prev[2] = el]);
  }

  return (
    <>
    {activeCategory !== null && activeCategory >= 0  && activeChapter !== null && activeChapter >= 0
    ?
    categories[activeCategory].chapter[activeChapter].subchapter.length > 0
      ?
      <div className={styles["category-choose__main"]}>
        <div className={styles["category-choose__title"]}>{categories[activeCategory].chapter[activeChapter].title}</div>
        {
          categories[activeCategory].chapter[activeChapter].subchapter.map((el, index): React.ReactNode => {
            return (
              <div 
              className={`${styles['category-choose__main-point']} ${activeSubChapter === index && styles["category-choose__main-point--active"]}`} 
              key={index}
              onClick={() => set(el, index)}
              >
                {el}
              </div>
            )
          })
        }
      </div>
      :
      <div className={styles['category-choose__continue-btn']} onClick={submitCategory}>Продолжить<i className="fa-solid fa-arrow-right"></i></div>
    :
    ''}
    </>
  )
}
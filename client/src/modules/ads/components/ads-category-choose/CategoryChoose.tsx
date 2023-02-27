import React, {FC, useEffect, useState} from 'react';

import styles from './CategoryChoose.module.scss';

import { ICategoryChoose } from '../../types/types';

import { useAppSelector, useActions } from '../../../../hooks';
import { categoriesApi } from '../../../../store/api/categoriesApi';

import { Loader } from '../../../../UI';


export const CategoryChoose: FC<ICategoryChoose> = ({setStep}) => {
  const [loadCategories, {data: categories, isLoading, error, isError}] = categoriesApi.useLazyGetCategoriesQuery();
  const { changeCategory, setCategories } = useActions();
  const { categoryReducer } = useAppSelector(state => state);

  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [activeSubChapter, setActiveSubChapter] = useState<number | null>(null);

  const [category, setCategory] = useState<string[] | []>([]);

  useEffect(() => {
    if(categoryReducer.length === 0) {
      loadCategories(null)
      .then((payload) => {
        if(payload.data) {
          setCategories(payload.data)
        }
      })
    }
  }, [categoryReducer])
  
  const submitCategory = () => {
    changeCategory(category);
    setStep('category-choosen');
  }

  const generateCategory = () => {
    return (
      categoryReducer.map((el, index): React.ReactNode => {
        return (
          <div 
          className={`${styles['category-choose__main-point']} ${activeCategory === index && styles["category-choose__main-point--active"] }`} 
          key={index} 
          onClick={() => {setActiveCategory(index); setActiveChapter(null); setCategory([el.category])}}>
            {el.category}
        </div>
        )
      })
    )
  }

  const generateChapter = () => {
    return (
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
              onClick={() => {
                setActiveChapter(index);
                setActiveSubChapter(null); 
                setCategory(prev => [prev[0], prev[1] = el.title])}
              }
              >
                {el.title}
            </div>
          )
        })}
      </div>
      :
      ''
    )
  }
  
  const generateSubChapter = () => {
    return (
      activeCategory !== null && activeCategory >= 0  && activeChapter !== null && activeChapter >= 0
      ?
        categoryReducer[activeCategory].chapter[activeChapter].subchapter.length > 0
        ?
        <div className={styles["category-choose__main"]}>
          <div className={styles["category-choose__title"]}>{categoryReducer[activeCategory].chapter[activeChapter].title}</div>
          {
            categoryReducer[activeCategory].chapter[activeChapter].subchapter.map((el, index): React.ReactNode => {
              return (
                <div 
                  className={`${styles['category-choose__main-point']} ${activeSubChapter === index && styles["category-choose__main-point--active"]}`} 
                  key={index}
                  onClick={() => {
                    setActiveSubChapter(index); 
                    setCategory(prev => [prev[0], prev[1], prev[2] = el]);
                  }}
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
      ''
    )
  }

  return (
    <>
      {isError ? 'some error...' : ''}
      {isLoading ? <Loader widthMain={80} widthAdditional={64}/> : ''}
      {
        categoryReducer.length !== 0
        ?
        <div className={styles['category-choose']}>
          <div className={styles["category-choose__main"]}>
            <div className={styles["category-choose__title"]}>Категория</div>
            {generateCategory()}
          </div>
          {generateChapter()}
          {generateSubChapter()}
        </div>
        :
        ''
      }
      {category.length === 3 ? <div className={`${styles['category-choose__continue-btn']} ${styles['category-choose__continue-btn--three']}`} onClick={submitCategory}>Продолжить<i className="fa-solid fa-arrow-right"></i></div> : ''}
    </>
  )
}
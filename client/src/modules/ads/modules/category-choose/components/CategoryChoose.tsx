//импорт внешних пакетов
import React, {FC, useEffect, useState} from 'react';

//импорт стилей
import styles from './CategoryChoose.module.scss';

//импорт типов

//импорт функционала
import { useActions } from '../../../../../hooks';

//импорт компонентов
import { Loader } from '../../../../../UI';
import { CategoryChooseCategory } from './CategoryChooseCategory';
import { CategoryChooseChapter } from './CategoryChooseChapter';
import { CategoryChooseSubchapter } from './CategoryChooseSubchapter';
import { useLoadCategories } from '../hooks/useLoadCategories';

interface ICategoryChoose {
  setStep: React.Dispatch<React.SetStateAction<"category-choose" | "category-choosen">>
}

export const CategoryChoose: FC<ICategoryChoose> = ({setStep}) => {
  const { categories, isError, isLoading } = useLoadCategories();
  const { changeCategory } = useActions();

  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [activeSubChapter, setActiveSubChapter] = useState<number | null>(null);
  const [category, setCategory] = useState<string[] | []>([]);

  const submitCategory = () => {
    changeCategory(category);
    setStep('category-choosen');
  }

  return (
    <>
      {isError ? 'some error...' : ''}
      {isLoading ? <Loader widthMain={80} widthAdditional={64}/> : ''}
      {
        categories.length !== 0
        ?
        <div className={styles['category-choose']}>
          <div className={styles["category-choose__main"]}>
            <div className={styles["category-choose__title"]}>Категория</div>
            <CategoryChooseCategory 
              setActiveCategory={setActiveCategory} 
              setActiveChapter={setActiveChapter} 
              setCategory={setCategory}
              activeCategory={activeCategory} 
            />
          </div>
          <CategoryChooseChapter 
            setActiveChapter={setActiveChapter} 
            setCategory={setCategory} 
            setActiveSubChapter={setActiveSubChapter}
            activeCategory={activeCategory} 
            activeChapter={activeChapter} 
          />
          <CategoryChooseSubchapter 
            setActiveSubChapter={setActiveSubChapter}
            setCategory={setCategory} 
            activeCategory={activeCategory} 
            activeSubChapter={activeSubChapter} 
            activeChapter={activeChapter} 
            submitCategory={submitCategory}
          />
        </div>
        :
        ''
      }
      {
        category.length === 3 
        &&
        <div className={`${styles['category-choose__continue-btn']} ${styles['category-choose__continue-btn--three']}`} onClick={submitCategory}>Продолжить<i className="fa-solid fa-arrow-right"></i></div> 
      }
    </>
  )
}
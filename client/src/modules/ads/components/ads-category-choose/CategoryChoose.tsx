import React, {FC, useEffect, useState} from 'react'

import '../ads.scss'
import { adsSlice } from '../../store/adsSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks/redux';

import { ICategoryChoose } from '../../types/types';

export const CategoryChoose: FC<ICategoryChoose> = ({setStep}) => {
  const {data} = useAppSelector(state => state.categoryReducer);
  const { changeCategory } = adsSlice.actions;

  const dispatch = useAppDispatch();
  
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [activeSubChapter, setActiveSubChapter] = useState<number | null>(null);

  const [category, setCategory] = useState<string[] | []>([]);
  console.log(category)
  
  const submitCategory = () => {
    dispatch(changeCategory(category));
    setStep('category-choosen');
  }

  const generateCategory = () => {
    return data.map((el, index): React.ReactNode => {
      return (
        <div 
          className={`category-choose__main-point ${activeCategory === index ? "category-choose__main-point--active" : "" }`} 
          key={index} 
          onClick={() => {setActiveCategory(index); setActiveChapter(null); setCategory([el.category])}}>
            {el.category}
        </div>
      )
    })
  }
  const generateChapter = () => {
    return (
      activeCategory !== null && activeCategory >= 0
      ?
      <div className="category-choose__main">
        <div className="category-choose__title">{data[activeCategory].category}</div>
        {
        data[activeCategory].chapter.map((el, index): React.ReactNode => {
          return (
            <div 
              className={`category-choose__main-point ${activeChapter === index ? "category-choose__main-point--active" : "" }`} 
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
        data[activeCategory].chapter[activeChapter].subchapter.length > 0
        ?
        <div className="category-choose__main">
          <div className="category-choose__title">{data[activeCategory].chapter[activeChapter].title}</div>
          {
            data[activeCategory].chapter[activeChapter].subchapter.map((el, index): React.ReactNode => {
              return (
                <div 
                  className={`category-choose__main-point ${activeSubChapter === index ? "category-choose__main-point--active" : "" }`} 
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
        <div className='category-choose__continue-btn' onClick={submitCategory}>Продолжить<i className="fa-solid fa-arrow-right"></i></div>
      :
      ''
    )
  }

  return (
    <>
      <div className='category-choose'>
        <div className="category-choose__main">
          <div className="category-choose__title">Категория</div>
          {generateCategory()}
        </div>
        {generateChapter()}
        {generateSubChapter()}
      </div>
      {category.length === 3 ? <div className='category-choose__continue-btn category-choose__continue-btn--three' onClick={submitCategory}>Продолжить<i className="fa-solid fa-arrow-right"></i></div> : ''}
    </>
  )
}
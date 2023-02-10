import React, { FC, useState, useEffect } from 'react'

import { damaged } from '../../../data/damaged'

import { Select } from '../../../../../UI'
import { CheckboxList } from '../../ads-ui'
import { CarConditionFBLR } from './CarConditionFBLR'

interface ICarConditionWImg {
  setOption: (key: string, value: any) => void
  optionKey: string
}

export const CarConditionWImg: FC<ICarConditionWImg> = ({optionKey, setOption}) => {
  //активный основной слайд - спереди, сзади и тд...
  const [activeSlide, setActiveSlide] = useState<string>(damaged[0].id);
  //активная позиция слайда - передний бампер, правое зеркало и тд...
  const [activeSlideCategory, setActiveSlideCategory] = useState<string | null>(null);

  //каркас для формы body, впоследствии его будем изменять
  const [conditionBody, setConditionBody] = useState<{position: string, places: {title: string, points: string[] | null}[]}[]>([
    {position: 'спереди', places: [
      {title: 'Крыша', points: null},
      {title: 'Лобовое стекло', points: null},
      {title: 'Капот', points: null},
      {title: 'Передний бампер', points: null},
      {title: 'Передняя правая фара', points: null},
      {title: 'Передняя левая фара', points: null},
      {title: 'Правое зеркало', points: null},
      {title: 'Левое зеркало', points: null},
    ]},
    {position: 'сзади', places: [
      {title: 'Заднее стекло', points: null},
      {title: 'Дверь багажника', points: null},
      {title: 'Задняя левая фара', points: null},
      {title: 'Задняя правая фара', points: null},
      {title: 'Задний бампер', points: null},
    ]},
    {position: 'слева', places: [
      {title: 'Переднее левое крыло', points: null},
      {title: 'Задняя левая дверь', points: null},
      {title: 'Передняя левая дверь', points: null},
      {title: 'Заднее левое крыло', points: null},
    ]},
    {position: 'справа', places: [
      {title: 'Заднее правое крыло', points: null},
      {title: 'Передняя правая дверь', points: null},
      {title: 'Задняя правая дверь', points: null},
      {title: 'Переднее правое крыло', points: null},
    ]},
  ]);

  useEffect(() => setOption(optionKey, conditionBody), [])

  // const toggleCheckbox = (el: string) => {
  //   setConditionBody(prev => {
  //     if(activeSlideCategory === null || activeSlideCategory < 0) return prev;

  //     if(!prev[activeSlide - 1].places[activeSlideCategory].points) {
  //       prev[activeSlide - 1].places[activeSlideCategory].points = [el];
  //       return prev;
  //     } else {
  //       const arr = prev[activeSlide - 1].places[activeSlideCategory].points;
  //       arr?.push(el);
  //       prev[activeSlide - 1].places[activeSlideCategory].points = arr;
  //       return prev;
  //     }
  //   })
  // }

  useEffect(() => setOption(optionKey, conditionBody), [conditionBody])

  const classConfig = (id: string): string => {
    return `car-condition-w-img__control-item ${activeSlide === id ? 'car-condition-w-img__control-item--active' : ''}`
  }
  
  return (
    <div className="car-condition-w-img">
      <div className="car-condition-w-img__slides">
        {
          damaged.map(el => {
            if(el.id === activeSlide) {
              return (
                <CarConditionFBLR data={el} activeSlideCategory={activeSlideCategory} setActiveSlideCategory={setActiveSlideCategory} />
              )
            }
            return undefined
          })
        }
      </div>
      <div className="car-condition-w-img__control">
        {
          damaged.map(el => {
            return (
              <button 
                className={classConfig(el.id)} 
                onClick={() => {setActiveSlide(el.id); setActiveSlideCategory(null)}} 
                key={el.id}
              >
                <img src={`http://localhost:5000/uploads/${el.img}`} alt={el.position} />
                {el.position}
              </button>
            )
          })
        }
      </div>
      <div className="car-condition-w-img__select">
        {/* {
          activeSlideCategory !== null  && activeSlideCategory >= 0
            ?
            <CheckboxList 
              data={
                {
                  title: damaged[activeSlide - 1].places[activeSlideCategory].title,
                  data: damaged[activeSlide - 1].places[activeSlideCategory].points
                }
              } 
              changeFunction={toggleCheckbox}
            />
            :
            ''
        } */}
      </div>
    </div>
  )
}
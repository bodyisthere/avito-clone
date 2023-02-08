import React, { FC, useState, useContext } from 'react'

import forward from '../../../../../assets/img/car-condition-forward.png'
import left from '../../../../../assets/img/car-condition-left.png'
import back from '../../../../../assets/img/car-condition-back.png'
import right from '../../../../../assets/img/car-condition-right.png'

import { Select } from '../../../../../UI'
import { CarConditionFBLR } from './CarConditionFBLR'
import { CheckboxList } from '../../ADS-UI'

import { damaged } from '../../../data/damaged'


interface ICarConditionWImg {
  setOption: (key: string, value: any) => void
  optionKey: string
}

type ISlides = {
  img: any,
  title: string,
  index: 1 | 2 | 3 | 4
}

export const CarConditionWImg: FC<ICarConditionWImg> = () => {
  const [activeSlide, setActiveSlide] = useState<1 | 2 | 3 | 4>(1);
  const [activeSlideCategory, setActiveSlideCategory] = useState<number | null>();
  const [slides, setSlides] = useState<ISlides[]>([
    {img: forward, title: 'спереди', index: 1}, 
    {img: back, title: 'сзади', index: 2}, 
    {img: left, title: 'слева', index: 3}, 
    {img: right, title: 'справа', index: 4}
  ])

  // const [activeHits, setActiveHits] = useState<IDamagedPositions[]>([
  //   {position: 'спереди', places: [
  //     {title: 'Правое зеркало', points: null, id: Math.random()},
  //     {title: 'Левое зеркало', points: null, id: Math.random()},
  //     {title: 'Передняя правая фара', points: null, id: Math.random()},
  //     {title: 'Передняя левая фара', points: null, id: Math.random()},
  //     {title: 'Передний бампер', points: null, id: Math.random()},
  //     {title: 'Капот', points: null, id: Math.random()},
  //     {title: 'Лобовое стекло', points: null, id: Math.random()},
  //     {title: 'Крыша', points: null, id: Math.random()},
  //   ]},
  //   {position: 'слева', places: [
  //     {title: 'Переднее левое крыло', points: null, id: Math.random()},
  //     {title: 'Передняя левая дверь', points: null, id: Math.random()},
  //     {title: 'Задняя левая дверь', points: null, id: Math.random()},
  //     {title: 'Заднее левое крыло', points: null, id: Math.random()},
  //   ]},
  //   {position: 'сзади', places: [
  //     {title: 'Заднее стекло', points: null, id: Math.random()},
  //     {title: 'Дверь багажника', points: null, id: Math.random()},
  //     {title: 'Задний бампер', points: null, id: Math.random()},
  //     {title: 'Задняя правая фара', points: null, id: Math.random()},
  //     {title: 'Задняя левая фара', points: null, id: Math.random()},
  //   ]},
  //   {position: 'справа', places: [
  //     {title: 'Переднее правое крыло', points: null, id: Math.random()},
  //     {title: 'Передняя правая дверь', points: null, id: Math.random()},
  //     {title: 'Задняя правая дверь', points: null, id: Math.random()},
  //     {title: 'Заднее правое крыло', points: null, id: Math.random()},
  //   ]},
  // ]);
  console.log(activeSlideCategory ? damaged[activeSlide].places[activeSlideCategory - 1].points : '')

  const classConfig = (index: number): string => {
    return `car-condition-w-img__control-item ${activeSlide === index ? 'car-condition-w-img__control-item--active' : ''}`
  }

  return (
    <div className="car-condition-w-img">
      <div className="car-condition-w-img__slides">
        <CarConditionFBLR type={activeSlide} activeSlideCategory={activeSlideCategory} setActiveSlideCategory={setActiveSlideCategory}/>
      </div>
      <div className="car-condition-w-img__control">
         {
          slides.map((el, index) => {
            return (
              <button 
                className={classConfig(el.index)} 
                onClick={() => {setActiveSlide(el.index); setActiveSlideCategory(null)}} 
                key={index}
              >
                <img src={el.img} alt={el.title} />
                {el.title}
              </button>
            )
          })
        }
      </div>
      <div className="car-condition-w-img__select">
        {/* {
          activeSlideCategory
            ?
            // damaged[activeSlide].places[activeSlideCategory].points.map((el, index) => {
            <CheckboxList data={damaged[activeSlide].places[activeSlideCategory].points}/>
            // })
            :
            ''
        } */}
      </div>
    </div>
  )
}
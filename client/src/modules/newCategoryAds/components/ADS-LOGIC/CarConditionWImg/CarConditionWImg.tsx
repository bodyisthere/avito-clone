import React, { FC, useState, useContext } from 'react'

import forward from '../../../../../assets/img/car-condition-forward.png'
import left from '../../../../../assets/img/car-condition-left.png'
import back from '../../../../../assets/img/car-condition-back.png'
import right from '../../../../../assets/img/car-condition-right.png'

import { Select } from '../../../../../UI'
import { CarConditionFBLR } from './CarConditionFBLR'
import { CheckboxList } from '../../ADS-UI'


interface ICarConditionWImg {
  
}

// interface IDamagedPositions {
//   position: 'сзади' | 'спереди' | 'слева' | 'справа',
//   places: {title: string, points: string[] | [null]}[]
// }

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

  const [hit, setHits] = useState<IDamagedPositions[]>()
  const [activeHits, setActiveHits] = useState<IDamagedPositions[]>([
    {position: 'спереди', places: [
      {title: 'Правое зеркало', points: [null]},
      {title: 'Левое зеркало', points: [null]},
      {title: 'Передняя правая фара', points: [null]},
      {title: 'Передняя левая фара', points: [null]},
      {title: 'Передний бампер', points: [null]},
      {title: 'Капот', points: [null]},
      {title: 'Лобовое стекло', points: [null]},
      {title: 'Крыша', points: [null]},
    ]},
    {position: 'слева', places: [
      {title: 'Переднее левое крыло', points: [null]},
      {title: 'Передняя левая дверь', points: [null]},
      {title: 'Задняя левая дверь', points: [null]},
      {title: 'Заднее левое крыло', points: [null]},
    ]},
    {position: 'сзади', places: [
      {title: 'Заднее стекло', points: [null]},
      {title: 'Дверь багажника', points: [null]},
      {title: 'Задний бампер', points: [null]},
      {title: 'Задняя правая фара', points: [null]},
      {title: 'Задняя левая фара', points: [null]},
    ]},
    {position: 'справа', places: [
      {title: 'Переднее правое крыло', points: [null]},
      {title: 'Передняя правая дверь', points: [null]},
      {title: 'Задняя правая дверь', points: [null]},
      {title: 'Заднее правое крыло', points: [null]},
    ]},
  ]);

  const [t, sett] = useState<string[]>()

  const classConfig = (index: number): string => {
    return `car-condition-w-img__control-item ${activeSlide === index ? 'car-condition-w-img__control-item--active' : ''}`
  }

  return (
    <div className="car-condition-w-img">
      <div className="car-condition-w-img__slides">
        <CarConditionFBLR type={activeSlide} data={hit} activeSlideCategory={activeSlideCategory} setActiveSlideCategory={setActiveSlideCategory}/>
      </div>
      <div className="car-condition-w-img__control">
         {
          slides.map((el, index) => {
            return (
              <button className={classConfig(el.index)} onClick={() => {setActiveSlide(el.index); setActiveSlideCategory(null)}} key={index}>
                <img src={el.img} alt={el.title} />
                {el.title}
              </button>
            )
          })
        }
      </div>
      <div className="car-condition-w-img__select">
        {
          activeSlide === 1 
          ?
            hit[0].places.map((el, index) => {
              if(index !== activeSlideCategory) return
              console.log(hit[0].places[activeSlideCategory])
              return (
                <div></div>
                // <CheckboxList data={hit[0].places[activeSlideCategory]}/>
              )
            })
          : 
            ''
        }
      </div>
    </div>
  )
}
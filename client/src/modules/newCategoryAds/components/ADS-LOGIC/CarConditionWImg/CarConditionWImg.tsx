import React, { FC, useState } from 'react'

import forward from '../../../../../assets/img/car-condition-forward.png'
import left from '../../../../../assets/img/car-condition-left.png'
import back from '../../../../../assets/img/car-condition-back.png'
import right from '../../../../../assets/img/car-condition-right.png'

import { CarConditionBack } from './CarConditionBack'
import { CarConditionForward } from './CarConditionForward'
import { CarConditionLeft } from './CarConditionLeft'
import { CarConditionRight } from './CarConditionRight'

interface ICarConditionWImg {
  
}

export const CarConditionWImg: FC<ICarConditionWImg> = () => {
  const [activeSlide, setActiveSlide] = useState<number>(1);
  const [hit, setHits] = useState<any>(
    [
      {
        position: 'сзади',
        places: [
          {
          title: 'Заднее стекло',
          points: ['Скол', 'Трещина', 'Разбито или отсутствует']
          },
          {
            title: 'Дверь багажника',
            points: ['Скол или царапина', 'Вмятина', 'Коррозия', 'Заменена', 'Окрашена']
          },
          {
            title: 'Задний бампер',
            points: ['Скол или царапина', 'Вмятина', 'Коррозия', 'Заменён', 'Окрашен']
          },
          {
            title: 'Задняя правая фара',
            points: ['Скол', 'Трещина', 'Разбита или отсутствует']
          },
          {
            title: 'Задняя левая фара',
            points: ['Скол', 'Трещина', 'Разбита или отсутствует']
          }
        ]
      },
      {
        position: 'спереди',
        places: [
          {
            title: 'Правое зеркало',
            points: ['Скол', 'Трещина', 'Разбито или отсутствует']
          },
          {
            title: 'Левое зеркало',
            points: ['Скол', 'Трещина', 'Разбито или отсутствует']
          },
          {
            title: 'Передняя правая фара',
            points: ['Скол', 'Трещина', 'Разбито или отсутствует']
          },
          {
            title: 'Передняя левая фара',
            points: ['Скол', 'Трещина', 'Разбито или отсутствует']
          },
          {
            title: 'Передний бампер',
            points: ['Скол или царапина', 'Вмятина', 'Коррозия', 'Заменён', 'Окрашен']
          },
          {
            title: 'Капот',
            points: ['Скол или царапина', 'Вмятина', 'Коррозия', 'Заменён', 'Окрашен']
          },
          {
            title: 'Лобовое стекло',
            points: ['Скол', 'Трещина', 'Разбито или отсутсвует']
          },
          {
            title: 'Крыша',
            points: ['Скол или царапина', 'Вмятина', 'Коррозия', 'Заменена', 'Окрашена']
          },
        ]
      },
      {
        position: 'слева',
        places: [
          {
            title: 'Переднее левое крыло',
            points: ['Скол или царапина', 'Вмятина', 'Коррозия', 'Заменено', 'Окрашено']
          },
          {
            title: 'Передняя левая дверь',
            points: ['Скол или царапина', 'Вмятина', 'Коррозия', 'Заменена', 'Окрашена']
          },
          {
            title: 'Задняя левая дверь',
            points: ['Скол или царапина', 'Вмятина', 'Коррозия', 'Заменена', 'Окрашена']
          },
          {
            title: 'Заднее левое крыло',
            points: ['Скол или царапина', 'Вмятина', 'Коррозия', 'Заменено', 'Окрашено']
          },
        ]
      },
      {
        position: 'справа',
        places: [
          {
            title: 'Переднее правое крыло',
            points: ['Скол или царапина', 'Вмятина', 'Коррозия', 'Заменено', 'Окрашено']
          },
          {
            title: 'Передняя правая дверь',
            points: ['Скол или царапина', 'Вмятина', 'Коррозия', 'Заменена', 'Окрашена']
          },
          {
            title: 'Задняя правая дверь',
            points: ['Скол или царапина', 'Вмятина', 'Коррозия', 'Заменена', 'Окрашена']
          },
          {
            title: 'Заднее правое крыло',
            points: ['Скол или царапина', 'Вмятина', 'Коррозия', 'Заменено', 'Окрашено']
          },
        ]
      },
    ]
  )

  return (
    <div className="car-condition-w-img">
      <div className="car-condition-w-img__slides">
        {activeSlide === 1 ? <CarConditionForward /> : ''}
        {activeSlide === 2 ? <CarConditionLeft /> : ''}
        {activeSlide === 3 ? <CarConditionBack /> : ''}
        {activeSlide === 4 ? <CarConditionRight /> : ''}
      </div>
      <div className="car-condition-w-img__control">
        <button 
          className={`car-condition-w-img__control-item ${activeSlide === 1 ? 'car-condition-w-img__control-item--active' : ''}`} 
          onClick={() => setActiveSlide(1)}>
            <img src={forward} alt="спереди" />
            спереди
        </button>
        <button 
          className={`car-condition-w-img__control-item ${activeSlide === 2 ? 'car-condition-w-img__control-item--active' : ''}`} 
          onClick={() => setActiveSlide(2)}>
            <img src={left} alt="слева" />
            слева
        </button>
        <button 
          className={`car-condition-w-img__control-item ${activeSlide === 3 ? 'car-condition-w-img__control-item--active' : ''}`} 
          onClick={() => setActiveSlide(3)}>
            <img src={back} alt="сзади" />
            сзади
        </button>
        <button 
          className={`car-condition-w-img__control-item ${activeSlide === 4 ? 'car-condition-w-img__control-item--active' : ''}`} 
          onClick={() => setActiveSlide(4)}>
            <img src={right} alt="справа" />
            справа
        </button>
      </div>
    </div>
  )
}
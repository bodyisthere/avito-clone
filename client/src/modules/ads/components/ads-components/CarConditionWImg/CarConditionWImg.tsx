import React, { FC, useState, useEffect } from 'react'

import { damaged } from '../../../data/transportData'

import { Select } from '../../../../../UI'
import { CheckboxList } from '../../ads-ui'
import { CarConditionFBLR } from './CarConditionFBLR'

interface ICarConditionWImg {
  setOption: (key: string, value: any) => void
  optionKey: string
}

interface IActiveSlideCategory {
  title: string,
  points: {id: string, title: string}[],
  id: string,
  class: string,
}

export const CarConditionWImg: FC<ICarConditionWImg> = ({optionKey, setOption}) => {
  //активный основной слайд - спереди, сзади и тд...
  const [activeSlide, setActiveSlide] = useState<string>(damaged[0].id);
  //активная позиция слайда - передний бампер, правое зеркало и тд...
  const [activeSlideCategory, setActiveSlideCategory] = useState<IActiveSlideCategory | null>(null);
  const [activeSpans, setActiveSpans] = useState<string[]>([]);

  const [damagedPlaces, setDamagedPlaces] = useState<{position: string, id: string, places: {title: string, id: string, points: string[] | null}[]}[]>([
    {
      position: 'спереди', 
      id: 'cef1a2ea-8467-41b1-8434-eaa09bf315da',
      places: [
        {title: 'Крыша', id: '2cd2e683-4523-4f6f-b337-80a745eecd94', points: null},
        {title: 'Лобовое стекло', id: '0c4935a4-a0dd-4f5c-a8b0-609019d4aecb', points: null},
        {title: 'Капот', id: 'c9dc290e-e54d-47af-b274-2a115a1dea31', points: null},
        {title: 'Передний бампер', id: '884bfbab-448b-40ac-873e-1b8bc02e8596', points: null},
        {title: 'Передняя правая фара', id: '62c59e24-2349-4f3e-91da-8fdf9d53d2ba', points: null},
        {title: 'Передняя левая фара', id: '3ef0d376-78c0-40f4-974f-c676cf421cee', points: null},
        {title: 'Правое зеркало', id: '5793f514-b3ee-4f43-85bd-b94a1c7ad64a', points: null},
        {title: 'Левое зеркало', id: '475a33fe-7390-418f-962f-604fdaefc337', points: null},
      ]
    },
    {
      position: 'сзади', 
      id: 'a2e2ff1f-29ee-4f89-ba20-b8b319887c42',
      places: [
        {title: 'Заднее стекло', id: 'ec19788d-b8c3-4979-ae25-5c8f19a85683', points: null},
        {title: 'Дверь багажника', id: 'b31e3838-c16f-4ea4-978a-ee516a95fc82', points: null},
        {title: 'Задняя левая фара', id: '85e43e41-2759-4b34-b9d1-584b334b3fbd', points: null},
        {title: 'Задняя правая фара', id: '7a6730c9-2137-460f-964b-963009cca2f9', points: null},
        {title: 'Задний бампер', id: '6470937e-e4d9-4f19-beb0-8c0f6761d945', points: null},
      ]
    },
    {
      position: 'слева', 
      id: '659a5410-3593-464f-afcc-1c72b41f7d0f',
      places: [
        {title: 'Переднее левое крыло', id: '51e53624-c5f4-4690-a4c8-7c7b5185fc51', points: null},
        {title: 'Задняя левая дверь', id: 'a714589a-d835-4581-8bb6-ed0805e7c6d3', points: null},
        {title: 'Передняя левая дверь', id: 'f8298c61-98a2-4939-b5a1-2490a01089f7', points: null},
        {title: 'Заднее левое крыло', id: '3861cafc-ed3a-4012-ad01-c0ecb967bd9d', points: null},
      ]
    },
    {
      position: 'справа', 
      id: '24c22de3-116c-4fee-9f32-27040b9c980d',
      places: [
        {title: 'Заднее правое крыло', id: 'd790c257-cfb4-4f7c-99ee-ed322b87dcf8', points: null},
        {title: 'Передняя правая дверь', id: '18ea0ef1-0fc1-43c7-96e3-c883758b84c2', points: null},
        {title: 'Задняя правая дверь', id: 'f45728cf-6f5e-4ce7-9797-c2c06f345dd9', points: null},
        {title: 'Переднее правое крыло', id: 'f4e68e20-1003-4e73-9cbe-0900cf09e4da', points: null},
      ]
    },
  ]);

  const toggleCheckbox = (el: string) => {
    setDamagedPlaces(prev => {
      for(let i = 0; i < prev.length; i++) {
        if(prev[i].id === activeSlide) {
          const prevPosition = prev[i];
          for(let j = 0; j < prevPosition.places.length; j++) {
            if(prevPosition.places[j].id === activeSlideCategory?.id) {
              const prevPositionPlace = prevPosition.places[j];
              //проверка на пустой(null) массив
              if(!prevPositionPlace.points || prevPositionPlace.points === null) {
                prev[i].places[j].points = [el];
                setActiveSpans(prev => {return [...prev, el]})
                return prev;
              }
              if(prevPositionPlace.points?.includes(el)) {
                prev[i].places[j].points = prevPositionPlace.points.filter(e => e !== el)
                setActiveSpans(prev => prev.filter(e => e !== el))
                return prev;
              } else {
                prev[i].places[j].points = [...prevPositionPlace.points, el]
                setActiveSpans(prev => {return [...prev, el]})
                return prev;
              }
            }
          }
        }
      }
      return prev
    })
    
  }

  useEffect(() => setOption(optionKey, damagedPlaces), [damagedPlaces])

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
                <CarConditionFBLR 
                  damagedPlaces={damagedPlaces}
                  activeSpans={activeSpans} 
                  data={el} 
                  activeSlideCategory={activeSlideCategory} 
                  setActiveSlideCategory={setActiveSlideCategory} 
                  key={el.id}/>
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
        {
          activeSlideCategory !== null
          ?
          <CheckboxList 
            data={{title: activeSlideCategory.title, data: activeSlideCategory.points}}
            dataReady={activeSpans}
            changeFunction={toggleCheckbox}
          />
          :
          ''
        }
      </div>
    </div>
  )
}
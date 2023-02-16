import React, { FC, useState } from 'react'

import './AStory.scss'

interface IAStory {
  setPopType: any
}

export const AStory: FC<IAStory> = ( { setPopType }) => {
  const [condition, setCondition] = useState<'selected' | 'no-select'>('no-select');

  return (
    <>
      {
      condition === 'no-select'
        ?
          <div className="astory__no-select" onClick={() => setCondition('selected')}>
            <div className="astory__card-title">Истории</div>
            <img src="http://localhost:5000/uploads/d4001215-667d-4254-a26a-ae1dc9e125f0.png" alt="Телефон" className="astory__card-img" />
          </div>
        :
          <div className="astory__selected">
            <div className="astory__subcard" onClick={() => setPopType('addStory')}>
              <div className="astory__subcard-title">Добавить</div>
            </div>
            <div className="astory__subcard" onClick={() => setPopType('deleteStory')}>
              <div className="astory__subcard-title">Удалить</div>
            </div>
           </div>
          }
    </>
  )
}
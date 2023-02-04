import React, { FC } from 'react'

interface ITipCarCondition {
  ref: React.MutableRefObject<HTMLDivElement | null>
}

export const TipCarCondition: FC<ITipCarCondition> = () => {
  return (
    <div className='tip__content'>
      <div className="tip__text">
      Автомобиль битый, если он сейчас не на ходу или требует восстановления после ДТП.
      К битым не относятся машины со сколами, царапинами и небольшими вмятинами.
      </div>
    </div>
  )
}
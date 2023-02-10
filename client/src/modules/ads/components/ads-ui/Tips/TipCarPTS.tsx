import React, { FC } from 'react'

interface ITipCarPTS {
  ref: React.MutableRefObject<HTMLDivElement | null>
}

export const TipCarPTS: FC<ITipCarPTS> = () => {
  return (
    <div className='tip__content'>
      <div className="tip__text">
        Бумажный паспорт может быть оригинальным или дубликатом. В дубликате будет отметка об этом.
        Электронные ПТС получают все новые авто с ноября 2020 года. 
      </div>
    </div>
  )
}
//импорт внешних пакетов
import React, { FC, useRef } from 'react'

//импорт стилей
import styles from './Tips.module.scss'

//импорт типов

//импорт функционала
import { useClosePop } from '../../../../hooks'

//импорт компонентов
import { TipVIN } from './TipTypes/TipVIN'
import { TipCarCondition } from './TipTypes/TipCarCondition'
import { TipCarPTS } from './TipTypes/TipCarPTS'

interface ITip {
  type: 'VIN(номер кузова)' | 'Состояние машины' | 'ПТС машины'
  setIsTipOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Tip: FC<ITip> = ( { type, setIsTipOpen } ) => {
  const tipRef = useRef<null | HTMLDivElement>(null);
  useClosePop(tipRef, setIsTipOpen);

  return (
  <div className={styles.tip}>
    {type === 'VIN(номер кузова)' ? <TipVIN ref={tipRef}/> : ''}
    {type === 'Состояние машины' ? <TipCarCondition ref={tipRef}/> : ''}
    {type === 'ПТС машины' ? <TipCarPTS ref={tipRef}/> : ''}
  </div>
  )
}
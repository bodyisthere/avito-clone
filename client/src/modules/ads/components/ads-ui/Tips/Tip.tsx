import React, { FC, useRef } from 'react'

import { useClosePop } from '../../../../../hooks/common-hooks/useClosePop'

import { TipVIN } from './TipVIN'
import { TipCarCondition } from './TipCarCondition'
import { TipCarPTS } from './TipCarPTS'


interface ITip {
  type: 'VIN(номер кузова)' | 'Состояние машины' | 'ПТС машины'
  setIsTipOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Tip: FC<ITip> = ( { type, setIsTipOpen } ) => {
  const tipRef = useRef<null | HTMLDivElement>(null);
  useClosePop(tipRef, setIsTipOpen);

  return (
  <div className="tip">
    {type === 'VIN(номер кузова)' ? <TipVIN ref={tipRef}/> : ''}
    {type === 'Состояние машины' ? <TipCarCondition ref={tipRef}/> : ''}
    {type === 'ПТС машины' ? <TipCarPTS ref={tipRef}/> : ''}
  </div>
  )
}
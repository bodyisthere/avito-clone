import React, { FC } from 'react'

import './ConditionInfo.scss'

interface IConditionInfo {
  message: string
  closeFunction: any
  isError: boolean
}

export const ConditionInfo: FC<IConditionInfo> = ( {closeFunction, message, isError} ) => {
  return (
    <div className={`condition-info ${isError ? 'condition-info--error' : 'condition-info--success'}`} onClick={() => closeFunction(false)}>
      <div className="condition-info__text">{isError ? message : 'Успех'}</div>
    </div>
  )
}
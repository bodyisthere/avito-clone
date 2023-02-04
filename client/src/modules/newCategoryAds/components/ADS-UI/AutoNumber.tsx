import React, { FC, useEffect, useRef } from 'react'

import './ADS-UI.scss'

import flag from '../../../../assets/img/russia-flag.png'

interface IAutoNumber {
  autoNumber: {main: string, region: string}
  setAutoNumber: React.Dispatch<React.SetStateAction<{main: string; region: string;}>>
}


export const AutoNumber: FC<IAutoNumber> = ({ autoNumber, setAutoNumber }) => {

  return (
    <div className="auto-number">
      <div className="auto-number__left">
        <input 
          type='text' 
          className="auto-number__input-left" 
          placeholder='о 000 оо' 
          maxLength={6} 
          value={autoNumber.main}
          onChange={e => setAutoNumber(prev => {
            return {main: e.target.value, region: prev.region}
          })}
        />
      </div>
      <div className="auto-number__right">
        <input 
          type="text" 
          className="auto-number__input-right"  
          maxLength={3} 
          value={autoNumber.region} 
          onChange={e => setAutoNumber(prev => {
            return {main: prev.main, region: e.target.value}
          })}
        />
        <div className="auto-number__region">
          <span>RUS</span>
          <img src={flag} alt="" />
        </div>
      </div>
    </div>
  )
}
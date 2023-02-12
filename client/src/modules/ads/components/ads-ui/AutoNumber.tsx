import React, { FC, useEffect, useRef, useState } from 'react'

import './ADS-UI.scss'

import flag from '../../../../assets/img/russia-flag.png'

interface IAutoNumber {
  autoNumber: {main: string, region: number} | null
  setOption: (key: string, value: any) => void
  optionKey: string
}


export const AutoNumber: FC<IAutoNumber> = ({ autoNumber, setOption, optionKey }) => {
  const [main, setMain] = useState<string>('');
  const [region, setRegion] = useState<string>();

  return (
    <div className="auto-number">
      <div className="auto-number__left">
        <input 
          type='text' 
          className="auto-number__input-left" 
          placeholder='о 000 оо' 
          maxLength={6} 
          value={autoNumber?.main || ''}
          onChange={e => {
            setMain(e.target.value);
            setOption(optionKey, {main: e.target.value, region});
          }}
        />
      </div>
      <div className="auto-number__right">
        <input 
          type="text" 
          className="auto-number__input-right"  
          maxLength={3} 
          value={autoNumber?.region || ''} 
          onChange={e => {
            setRegion(e.target.value);
            setOption(optionKey, {main, region: +e.target.value});
          }}
        />
        <div className="auto-number__region">
          <span>RUS</span>
          <img src={flag} alt="" />
        </div>
      </div>
    </div>
  )
}
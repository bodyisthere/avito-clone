import React, { FC, useEffect, useRef, useState } from 'react'

import styles from './AutoNumber.module.scss'

interface IAutoNumber {
  autoNumber: {main: string, region: number} | null
  setOption: (key: string, value: any) => void
  optionKey: string
}


export const AutoNumber: FC<IAutoNumber> = ({ autoNumber, setOption, optionKey }) => {
  const [main, setMain] = useState<string>('');
  const [region, setRegion] = useState<string>();

  return (
    <div className={styles["auto-number"]}>
      <div className={styles["auto-number__left"]}>
        <input 
          type='text' 
          className={styles["auto-number__input-left"]} 
          placeholder='о 000 оо' 
          maxLength={6} 
          value={autoNumber?.main || ''}
          onChange={e => {
            setMain(e.target.value);
            setOption(optionKey, {main: e.target.value, region});
          }}
        />
      </div>
      <div className={styles["auto-number__right"]}>
        <input 
          type="text" 
          className={styles["auto-number__input-right"]}  
          maxLength={3} 
          value={autoNumber?.region || ''} 
          onChange={e => {
            setRegion(e.target.value);
            setOption(optionKey, {main, region: +e.target.value});
          }}
        />
        <div className={styles["auto-number__region"]}>
          <span>RUS</span>
          {/* <img src={flag} alt="" /> */}
        </div>
      </div>
    </div>
  )
}
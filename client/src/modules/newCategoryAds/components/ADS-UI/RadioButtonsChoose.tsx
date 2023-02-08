import React, { FC, useLayoutEffect, useState } from 'react'
 
interface IRadioButtonChoose {
  data: string[]
  value: any
  setOption: (key: string, value: any) => void
  optionKey: string
}

export const RadioButtonsChoose: FC<IRadioButtonChoose> = ({ data, optionKey, setOption, value }) => {
  const [id, setId] = useState<number>()

  useLayoutEffect(() => {
    setId(Math.random())
  }, [])

  return (
    <div className="radio-buttons-choose">
      {
        data.map((el, index) => {
          return (
            <label className={`radio-button-choose__label ${value === el ? 'radio-button-choose--active' : ''}`} key={index} onClick={() => setOption(optionKey, el)}>
              <input type="radio" className="radio-button-choose__input" name={String(id)}/>
              <span className="radio-button-choose__span">{el}</span>
            </label>
          )
        })
      }
    </div>
  )
}
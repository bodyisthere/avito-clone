import React, { FC, useLayoutEffect, useState } from 'react'
 
interface IRadioButtonChoose {
  data: string[]
  active: string | null
  setActive: React.Dispatch<React.SetStateAction<string | null>>
}

export const RadioButtonsChoose: FC<IRadioButtonChoose> = ({ data, active, setActive }) => {
  const [id, setId] = useState<number>()

  useLayoutEffect(() => {
    setId(Math.random())
  }, [])

  return (
    <div className="radio-buttons-choose">
      {
        data.map((el, index) => {
          return (
            <label className={`radio-button-choose__label ${active === el ? 'radio-button-choose--active' : ''}`} key={index} onClick={() => setActive(el)}>
              <input type="radio" className="radio-button-choose__input" name={String(id)}/>
              <span className="radio-button-choose__span">{el}</span>
            </label>
          )
        })
      }
    </div>
  )
}
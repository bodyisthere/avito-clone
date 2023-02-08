import React, { FC, useState, useEffect } from 'react'

interface ICheckboxList {
  data: {title: string | null, data: string[]}
  setOption: (key: string, value: any) => void
  optionKey: string
}

export const CheckboxList: FC<ICheckboxList> = ( { data, optionKey, setOption } ) => {
  const [clicked, setClicked] = useState<string[]>([])

  const toggleCheckbox = (el: string) => {
    setClicked(prev => {
      if(prev.includes(el)) {
        return prev.filter(e => e !== el)
      } else {
        prev[prev.length] = el
        return prev
      }
    })
  }
  
  useEffect(() => {
    setOption(optionKey, clicked)
  }, [clicked])

  return (
    <div className="checkbox-list">
      {data.title ? <div className="checkbox-list__title">{data.title}</div> : ''}
      <ul className="checkbox-list__list">
        {
          data.data.map((el, index) => {
            return (
              <li className="checkbox-list__item" key={index} >
                <label className="checkbox-list__label" onChange={() => toggleCheckbox(el)}>
                  <input type="checkbox" className="checkbox-list__input" />
                  {el}
                </label>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
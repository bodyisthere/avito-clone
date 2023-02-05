import React, { FC } from 'react'

interface ICheckboxList {
  data: {title: string | null, data: string[]}
  checkbox: string[]
  setCheckbox: React.Dispatch<React.SetStateAction<string[]>>
}

export const CheckboxList: FC<ICheckboxList> = ( { data, checkbox, setCheckbox } ) => {

  const toggleCheckbox = (el: string) => {
    if(checkbox.length === 0) return setCheckbox([el]);
    if(checkbox.includes(el)) {
      return setCheckbox(prev => {
        return prev.filter(e => e !== el)
      })
    } else {
      return setCheckbox(prev => [...prev, el])
    }
  }

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
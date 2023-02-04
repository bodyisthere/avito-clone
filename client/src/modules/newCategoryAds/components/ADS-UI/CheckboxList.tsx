import React, { FC } from 'react'

interface ICheckboxList {
  data: {title: string | null, data: string[]}
  checkbox: string[] | []
  setCheckbox: React.Dispatch<React.SetStateAction<string[] | []>>
}

export const CheckboxList: FC<ICheckboxList> = ( { data, checkbox, setCheckbox } ) => {

  const onClick = (el: string) => {
    if(checkbox.length === 0) return setCheckbox([el]);
    // if(checkbox.length === 0) return setCheckbox(prev => [...prev, el]);
  }

  // console.log(checkbox)

  return (
    <div className="checkbox-list">
      {data.title ? <div className="checkbox-list__title">{data.title}</div> : ''}
      <ul className="checkbox-list__list">
        {
          data.data.map((el, index) => {
            return (
              <li className="checkbox-list__item" key={index} >
                <label className="checkbox-list__label" onClick={(e) => onClick(el)}>
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
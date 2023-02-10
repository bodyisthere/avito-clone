import React, { FC, useState, useEffect } from 'react'

interface ICheckboxList {
  data: {title: string | null, data: string[]}
  changeFunction: any
}

export const CheckboxList: FC<ICheckboxList> = ( { data, changeFunction } ) => {
  return (
    <div className="checkbox-list">
      {data.title ? <div className="checkbox-list__title">{data.title}</div> : ''}
      <ul className="checkbox-list__list">
        {
          data.data.map((el, index) => {
            return (
              <li className="checkbox-list__item" key={index} >
                <label className="checkbox-list__label" onChange={() => changeFunction(el)}>
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
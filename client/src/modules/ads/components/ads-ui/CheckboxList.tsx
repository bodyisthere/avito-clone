import React, { FC, useState, useEffect } from 'react'

interface ICheckboxList {
  data: {title: string | null, data: {title: string, id?: string}[]}
  changeFunction: any
  dataReady?: string[]
}

export const CheckboxList: FC<ICheckboxList> = ( { data, changeFunction, dataReady } ) => {
  return (
    <div className="checkbox-list">
      {data.title ? <div className="checkbox-list__title">{data.title}</div> : ''}
      <ul className="checkbox-list__list">
        {
          dataReady
          ?
          data.data.map(el => {
            return (
              <li className="checkbox-list__item" key={el.id} >
                <label className="checkbox-list__label">
                  <input type="checkbox" onChange={() => changeFunction(el.id)} className="checkbox-list__input" checked={el.id ? dataReady.includes(el.id) ? true : false : false}/>
                  {el.title}
                </label>
              </li>
            )
          })
          :
          data.data.map(el => {
            return (
              <li className="checkbox-list__item" key={el.id} >
                <label className="checkbox-list__label" onChange={() => changeFunction(el.id)}>
                  <input type="checkbox" className="checkbox-list__input" />
                  {el.title}
                </label>
              </li>
            )
          })

        }
      </ul>
    </div>
  )
}
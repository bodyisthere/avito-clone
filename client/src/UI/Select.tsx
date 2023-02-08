import React, { FC } from 'react'

interface ISelect {
  options : string[]
  optionKey: string
  setOption: (key: string, value: any) => void
}

export const Select: FC<ISelect> = ( { options, setOption, optionKey } ) => {
  return (
    <select className="select" onChange={(e: any) => setOption(optionKey, e.target.value)}>
      {
        options.map((el, index): React.ReactNode => {
          return <option value={el} key={index}>{el}</option>
        })
      }
    </select>
  )
}
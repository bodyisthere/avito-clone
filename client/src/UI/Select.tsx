import React, { FC } from 'react'

interface ISelect {
  options : string[]
  setOption: React.Dispatch<React.SetStateAction<string | null>>
}

export const Select: FC<ISelect> = ( { options, setOption } ) => {
  return (
    <select className="select" onChange={(e: any) => setOption(e.target.value)}>
      {
        options.map((el, index): React.ReactNode => {
          return <option value={el} key={index}>{el}</option>
        })
      }
    </select>
  )
}
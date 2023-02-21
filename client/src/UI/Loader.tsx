import React, { FC } from 'react'

interface ILoader {

}

export const Loader: FC<ILoader> = () => {
  return (
    <div className="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
import React, { FC, useRef } from 'react'

import { useClosePop } from '../hooks'

interface IPopUp {
  children: any
  changeStateFunction: any
}

export const PopUp: FC<IPopUp> = ( {children, changeStateFunction} ) => {
  const ref = useRef<any | null>(null);

  useClosePop(ref, changeStateFunction)

  return (
    <div className="pop-up">
      <div className="pop-up__content" ref={ref}>
        <div className="pop-up__close" onClick={() => changeStateFunction(false)}><i className="fa-solid fa-xmark"></i></div>
        {children}
      </div>
    </div>
  )
}
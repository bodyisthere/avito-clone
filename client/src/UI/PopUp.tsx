import React, { FC, useRef } from 'react'

interface IPopUp {
  children: any
  changeStateFunction: any
}

export const PopUp: FC<IPopUp> = ( {children, changeStateFunction} ) => {

  return (
    <div className="pop-up" onClick={() => changeStateFunction(false)}>
      <div className="pop-up__content" onClick={e => e.stopPropagation()}>
        <div className="pop-up__close" onClick={() => changeStateFunction(false)}><i className="fa-solid fa-xmark"></i></div>
        {children}
      </div>
    </div>
  )
}
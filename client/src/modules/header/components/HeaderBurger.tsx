import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";


interface IHeaderBurger {
  setIsBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const HeaderBurger: FC<IHeaderBurger> = ({setIsBurgerOpen}) => {
  return (
    <div className="header-burger">
      <ul className="header-burger__text-list">
        <li className="header-burger__text-item" onClick={() => setIsBurgerOpen(false)}><Link to="/">Для бизнеса</Link></li>
        <li className="header-burger__text-item" onClick={() => setIsBurgerOpen(false)}><Link to="/">Авито Pro</Link></li>
        <li className="header-burger__text-item" onClick={() => setIsBurgerOpen(false)}><Link to="/">Помощь</Link></li>
        <li className="header-burger__text-item" onClick={() => setIsBurgerOpen(false)}><Link to="/">Каталоги</Link></li>
      </ul>
    </div>
  )
}
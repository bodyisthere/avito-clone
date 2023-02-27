import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from './Header.module.scss'

interface IHeaderBurger {
  setIsBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const HeaderBurger: FC<IHeaderBurger> = ({setIsBurgerOpen}) => {
  return (
    <div className={styles["header-burger"]}>
      <ul className={styles["header-burger__text-list"]}>
        <li className={styles["header-burger__text-item"]} onClick={() => setIsBurgerOpen(false)}><Link to="/">Для бизнеса</Link></li>
        <li className={styles["header-burger__text-item"]} onClick={() => setIsBurgerOpen(false)}><Link to="/">Авито Pro</Link></li>
        <li className={styles["header-burger__text-item"]} onClick={() => setIsBurgerOpen(false)}><Link to="/">Помощь</Link></li>
        <li className={styles["header-burger__text-item"]} onClick={() => setIsBurgerOpen(false)}><Link to="/">Каталоги</Link></li>
      </ul>
    </div>
  )
}
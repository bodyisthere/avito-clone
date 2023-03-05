//импорт внешних пакетов
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//импорт стилей
import styles from "./Header.module.scss";

//импорт типов

//импорт функционала
import { useAppSelector, useActions } from "../../hooks";
import { otherLinks } from "./data/links";

//импорт компонентов
import { HeaderBurger } from "./components/Burger/HeaderBurger";
import { HeaderBurgerIcon } from "./components/Burger/HeaderBurgerIcon";
import { Button } from "../../UI";
import { HeaderAuth } from "./components/Auth/HeaderAuth";
import { HeaderNoAuth } from "./components/Auth/HeaderNoAuth";

export const Header: FC = () => {
  const { isAuth } = useAppSelector((state) => state.userReducer);
  const { setAuthPop } = useActions();

  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  const newAds = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isAuth) {
      setAuthPop(true);
      e.preventDefault();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HeaderBurgerIcon isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen}/>
        <div className={styles.left}>
          <ul className={styles.list}>
            {otherLinks.map((el, index) => <li key={index} className={styles.item}><Link to={el.link}>{el.title}</Link></li>)}
          </ul>
        </div>
        {isBurgerOpen ? <HeaderBurger setIsBurgerOpen={setIsBurgerOpen} /> : ""}
        <div className={styles.right}>
          {isAuth ? <HeaderAuth /> : <HeaderNoAuth />}
          <Button className={styles.post}>
            <Link to="/addads" onClick={(e) => newAds(e)}>
              Разместить объявление
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

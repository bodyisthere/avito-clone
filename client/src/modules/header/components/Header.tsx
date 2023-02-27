import React, { FC, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { HeaderBurger } from "./HeaderBurger";
import { HeaderDropMenu } from "./HeaderDropMenu";
import { useAppSelector, useActions } from "../../../hooks";

import styles from './Header.module.scss'

import { Button } from "../../../UI";

export const Header: FC = () => {
    const { isAuth, isAuthPopOpen } = useAppSelector(state => state.userReducer);
    const { userReducer } = useAppSelector(state => state)
    const { setAuthPop } = useActions();

    const [showDropMenu, setShowDropMenu] = useState<boolean>(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    const newAds = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if(!isAuth) {
            setAuthPop(true);
            e.preventDefault();
        }
    }

    return (
        <header className={styles["header"]}>
            <div className={styles["header__container"]}>
                {
                    screenWidth <= 768 
                    ?
                    <div className={styles["header__burger"]} onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
                        <span className={`${styles['header__burger-item']} ${isBurgerOpen && styles['header__burger-item--active-first']}`}></span>
                        <span className={`${styles['header__burger-item']} ${isBurgerOpen && styles['header__burger-item--active-second']}`}></span>
                        <span className={`${styles['header__burger-item']} ${isBurgerOpen && styles['header__burger-item--active-third']}`}></span>
                    </div>
                    :
                    <div className={styles["header__left"]}>
                        <ul className={styles["header__text-list"]}>
                            <li className={styles["header__text-item"]}><Link to="/">Для бизнеса</Link></li>
                            <li className={styles["header__text-item"]}><Link to="/">Авито Pro</Link></li>
                            <li className={styles["header__text-item"]}><Link to="/">Помощь</Link></li>
                            <li className={styles["header__text-item"]}><Link to="/">Каталоги</Link></li>
                        </ul>
                    </div>
                }
                {isBurgerOpen ? <HeaderBurger setIsBurgerOpen={setIsBurgerOpen} /> : ''}
                <div className={styles["header__right"]}>
                    {
                        isAuth
                        ?
                        <>
                            <ul className={styles["header__btn-list"]}>
                                <li className={styles["header__btn-item"]} title="Избранное"><Link to="/favorites"><i className="fa-solid fa-heart"></i></Link></li>
                                <li className={styles["header__btn-item"]} title="Уведомления"><Link to="/notifications"><i className="fa-solid fa-bell"></i></Link></li>
                                <li className={styles["header__btn-item"]} title="Сообщения"><Link to="/dialogues"><i className="fa-solid fa-comment"></i></Link></li>
                                <li className={styles["header__btn-item"]} title="Корзина"><Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link></li>
                            </ul>
                            <div className={styles["header__profile"]}>
                                <div className={styles["header__profile-inner"]} onClick={() => setShowDropMenu(!showDropMenu)}>
                                    <img src={`http://localhost:5000/uploads/${userReducer.data.avatar}`} alt="" className={styles["header__profile-img"]} />
                                    <div className={styles["header__profile-name"]}>{userReducer.data.name}</div>
                                    <i className="fa-solid fa-caret-down"></i>
                                </div>
                                {showDropMenu ? <HeaderDropMenu setShowDropMenu={setShowDropMenu}/> : ""}
                            </div>
                        </>
                        :
                        <>
                           <ul className={styles["header__btn-list"]}>
                                <li className={styles["header__btn-item"]} title="Избранное"><Link to="/"><i className="fa-solid fa-heart"></i></Link></li>
                                <li className={styles["header__btn-item"]}><button className={styles["header__btn-item-enter"]} onClick={() => setAuthPop(true)}>Вход и регистрация</button></li>
                            </ul> 
                        </>
                    }
                    <Button><Link to="/addads" onClick={(e) => newAds(e)}>Разместить объявление</Link></Button>
                </div>
            </div>
        </header>
    )
  }

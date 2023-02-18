import React, { FC, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "./Header.scss"
import avatar from "../../../assets/img/avatar.jpg"
import { HeaderBurger } from "./HeaderBurger";
import { HeaderDropMenu } from "./HeaderDropMenu";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks/redux";
// import { authSlice } from "../../auth";

export const Header: FC = () => {
    // const { isOpen } = useAppSelector(state => state.authReducer);
    // const { toggleAuth } = authSlice.actions;
    const dispatch = useAppDispatch();

    const [showDropMenu, setShowDropMenu] = useState<boolean>(false);
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    
    return (
        <header className="header">
            <div className="header__container">
                {
                    screenWidth <= 768 
                    ?
                    <div className="header__burger" onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
                        <span className={`header__burger-item ${isBurgerOpen ? 'header__burger-item--active-first' : ''}`}></span>
                        <span className={`header__burger-item ${isBurgerOpen ? 'header__burger-item--active-second' : ''}`}></span>
                        <span className={`header__burger-item ${isBurgerOpen ? 'header__burger-item--active-third' : ''}`}></span>
                    </div>
                    :
                    <div className="header__left">
                        <ul className="header__text-list">
                            <li className="header__text-item"><Link to="/">Для бизнеса</Link></li>
                            <li className="header__text-item"><Link to="/">Авито Pro</Link></li>
                            <li className="header__text-item"><Link to="/">Помощь</Link></li>
                            <li className="header__text-item"><Link to="/">Каталоги</Link></li>
                        </ul>
                    </div>
                }
                {isBurgerOpen ? <HeaderBurger setIsBurgerOpen={setIsBurgerOpen} /> : ''}
                <div className="header__right">
                    {
                        isAuth
                        ?
                        <>
                            <ul className="header__btn-list">
                                <li className="header__btn-item" title="Избранное"><Link to="/"><i className="fa-solid fa-heart"></i></Link></li>
                                <li className="header__btn-item" title="Уведомления"><Link to="/"><i className="fa-solid fa-bell"></i></Link></li>
                                <li className="header__btn-item" title="Сообщения"><Link to="/"><i className="fa-solid fa-comment"></i></Link></li>
                                <li className="header__btn-item" title="Корзина"><Link to="/"><i className="fa-solid fa-cart-shopping"></i></Link></li>
                            </ul>
                            <div className="header__profile">
                                <div className="header__profile-inner" onClick={() => setShowDropMenu(!showDropMenu)}>
                                    <img src={avatar} alt="" className="header__profile-img" />
                                    <div className="header__profile-name">Артем</div>
                                    <i className="fa-solid fa-caret-down"></i>
                                </div>
                                {showDropMenu ? <HeaderDropMenu setShowDropMenu={setShowDropMenu}/> : ""}
                            </div>
                        </>
                        :
                        <>
                           <ul className="header__btn-list">
                                <li className="header__btn-item" title="Избранное"><Link to="/"><i className="fa-solid fa-heart"></i></Link></li>
                                <li className="header__btn-item"><button className="header__btn-item-enter">Вход и регистрация</button></li>
                            </ul> 
                        </>
                    }
                    <div className="button"><Link to="/addads">Разместить объявление</Link></div>
                </div>
            </div>
        </header>
    )
  }

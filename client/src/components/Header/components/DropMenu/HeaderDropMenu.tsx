//импорт внешних пакетов
import React, { FC, useRef } from "react";
import { Link } from "react-router-dom";

//импорт стилей
import styles from './DropMenu.module.scss'

//импорт типов

//импорт функционала
import { useActions } from "../../../../hooks";
import { useClosePop } from "../../../../hooks/common-hooks/useClosePop";
import { authApi } from "../../../../store/api/authApi";
import { extendedLinks } from "../../data/links";

//импорт компонентов


interface IHeaderDropMenu {
  setShowDropMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderDropMenu: FC<IHeaderDropMenu> = ({ setShowDropMenu }) => {
  const [ logout ] = authApi.useLazyLogoutQuery();
  const { logout: logoutStore } = useActions()

  const root = useRef<HTMLDivElement | null>(null);
  useClosePop(root, setShowDropMenu);

  const logoutHandle = () => {
    logout(); 
    logoutStore();
    document.location.reload();
  }

  return (
    <div className={styles.drop}>
      <div className={styles.content} ref={root}>
        <div className={styles.rate}>
          <div className={styles.avg}>5,0</div>
          <div className={styles.stars}>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <div>6 отзывов</div>
        </div>
        {
          extendedLinks.map((e, i) => {
            return (
              <ul className={styles.list} key={i}>
                {
                  e.map((el, index) => {
                    return (
                      <li className={styles.item} key={index}>
                        <Link to={el.link}>{el.title}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            )
          })
        }
        <div className={styles.leave} onClick={() => logoutHandle()}>Выйти</div>
      </div>
    </div>
  );
};

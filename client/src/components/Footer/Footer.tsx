import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'

interface IFooter {

}

export const Footer: FC<IFooter> = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__container"]}>
        <div className={styles["footer__top"]}>
          <ul className={styles["footer__top-list"]}>
            <li className={styles["footer__top-item"]}><Link to=''>Разместить объявление</Link></li>
            <li className={styles["footer__top-item"]}><Link to=''>Объявления</Link></li>
            <li className={styles["footer__top-item"]}><Link to=''>Помощь</Link></li>
            <li className={styles["footer__top-item"]}><Link to=''>Безопасность</Link></li>
            <li className={styles["footer__top-item"]}><Link to=''>Реклама на сайте</Link></li>
            <li className={styles["footer__top-item"]}><Link to=''>О компании</Link></li>
            <li className={styles["footer__top-item"]}><Link to=''>Карьера</Link></li>
            <li className={styles["footer__top-item"]}><Link to=''>Авито Журнал</Link></li>
            <li className={styles["footer__top-item"]}><Link to=''>Блог</Link></li>
            <li className={styles["footer__top-item"]}><Link to=''>Мобильное приложение</Link></li>
          </ul>
        </div>
        <div className={styles["footer__bottom"]}>
          Авито - <Link to=''>сайт объявлений России.</Link>
          © ООО «КЕХ еКоммерц» 2007–2023. 
          <Link to=''>Правила Авито.</Link>
          <Link to=''>Политика обработки данных.</Link>
          Оплачивая услуги на Авито, вы принимаете<Link to=''>оферту.</Link>
        </div>
      </div>
    </footer>
  )
}
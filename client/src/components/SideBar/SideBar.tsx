import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks'


import './SideBar.scss'

interface ISideBar {
  
}

export const SideBar: FC<ISideBar> = () => {
  const { data } = useAppSelector(state => state.userReducer);

  return (
    <div className="side-bar">
      <div className="side-bar__section">
        <div className="side-bar__avatar">
          <img src={`http://localhost:5000/uploads/${data.avatar}`} alt={data.name} className="side-bar__avatar-img" />
          <label className="side-bar__avatar-change"><i className="fa-solid fa-camera"><input type="file"/></i></label>
        </div>
        <div className="side-bar__name">{data.name}</div>
        <Link className="side-bar__rating" to='/'>
          <div className="side-bar__rating-rate">5,0</div>
          <div className="side-bar__rating-line">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="side-bar__rating-reviews">6 отзывов</div>
        </Link>
      </div>
      <div className="side-bar__section">
        <ul className="side-bar__list">
          <li className="side-bar__link"><Link to='/my-ads'>Мои объявления</Link></li>
          <li className="side-bar__link"><Link to='/my-orders'>Заказы</Link></li>
          <li className="side-bar__link"><Link to='/my-reviews'>Мои отзывы</Link></li>
          <li className="side-bar__link"><Link to='/favorites'>Избранное</Link></li>
          <li className="side-bar__link"><Link to='/'>Резюме</Link></li>
        </ul>
      </div>
      <div className="side-bar__section">
        <ul className="side-bar__list">
          <li className="side-bar__link"><Link to='/dialogues'>Сообщения</Link></li>
          <li className="side-bar__link"><Link to='/notifications'>Уведомления</Link></li>
        </ul>
      </div>
      <div className="side-bar__section">
        <ul className="side-bar__list">
          <li className="side-bar__link"><Link to='/wallet'>Кошелёк</Link></li>
          <li className="side-bar__link"><Link to='/paid-services'>Платные услуги</Link></li>
          <li className="side-bar__link"><Link to='/'>Для профессионалов</Link></li>
          <li className="side-bar__link"><Link to='/special-offers'>Спецпредложения</Link></li>
        </ul>
      </div>
      <div className="side-bar__section">
        <ul className="side-bar__list">
          <li className="side-bar__link"><Link to='/profile/basic'>Управление профилем</Link></li>
          <li className="side-bar__link"><Link to='/profile/safety'>Защита профиля</Link></li>
          <li className="side-bar__link"><Link to='/profile/settings'>Настройки</Link></li>
          <li className="side-bar__link"><Link to=''>Авито доставка</Link></li>
        </ul>
      </div>
    </div>
  )
}
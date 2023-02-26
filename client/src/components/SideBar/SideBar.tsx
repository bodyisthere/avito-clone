import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'

import './SideBar.scss'
import { PopUp } from '../../UI/PopUp'
import { Button, Loader } from '../../UI'
import { ConditionInfo } from '../ConditionInfo/ConditionInfo'

import { useAppSelector } from '../../hooks'
import { useChangeAvatar } from './useChangeAvatar'

interface ISideBar {
  
}

export const SideBar: FC<ISideBar> = () => {
  const { data } = useAppSelector(state => state.userReducer);
  const { 
    handleAvatarUpload, handleImgUpload, 
    uploadedImg, isImgLoading, isPopOpen, isConditionInfoOpen,
    setIsPopOpen, setIsConditionInfoOpen,
  } = useChangeAvatar();

  return (
    <div className="side-bar">
      {isConditionInfoOpen && <ConditionInfo isError={true} closeFunction={setIsConditionInfoOpen} message={'Ошибка загрузки файла'}/>}
      {
        isPopOpen
        &&
        <PopUp changeStateFunction={setIsPopOpen}>
          <p style={{'fontWeight':'700','fontSize':'25px', 'marginBottom':'10px'}}>Загруженное изображение</p>
          <img style={{'width':'100%' ,'objectFit':'cover', 'marginBottom':'10px'}} src={`http://localhost:5000/uploads/${uploadedImg}`} alt="" />
          <Button onClick={() => handleAvatarUpload(uploadedImg)}>Изменить аватар</Button>
        </PopUp>
      }
      <div className="side-bar__section">
        <div className="side-bar__avatar">
          {
            isImgLoading
            ?
            <Loader widthAdditional={64} widthMain={80}/>
            :
            <img 
              src={`http://localhost:5000/uploads/${data.avatar}`} 
              alt={data.name} 
              className="side-bar__avatar-img"
            />
          }
          <label className="side-bar__avatar-change">
            <i className="fa-solid fa-camera">
              <input 
                type="file"
                onChange={(e: any) => handleImgUpload(e)}
                accept="image/*,.png,.jpg,.jpeg"
                multiple={false}
              />
            </i>
          </label>
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
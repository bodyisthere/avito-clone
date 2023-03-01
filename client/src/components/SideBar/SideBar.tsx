import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './SideBar.module.scss'

import { useAppSelector } from '../../hooks'
import { useChangeAvatar } from './useChangeAvatar'
import { sideBarRoutes } from './sideBarRoutes'

import { ConditionInfo } from '../ConditionInfo/ConditionInfo'
import { PopUp } from '../../UI/PopUp/PopUp'
import { Button, Loader } from '../../UI'

interface ISideBar {
  
}

export const SideBar: FC<ISideBar> = () => {
  const { data } = useAppSelector(state => state.userReducer);
  const { 
    handleAvatarUpload, handleImgUpload, 
    uploadedImg, isImgLoading, isPopOpen, isConditionInfoOpen,
    setIsPopOpen, setIsConditionInfoOpen,
  } = useChangeAvatar();

  const generateLi = (index: number) => {
    const url = window.location.pathname;
    return (
      sideBarRoutes[index].map((el, i) => {
        return (
          <li className={`${styles["side-bar__link"]} ${url === el.link && styles['side-bar__link--active']}`} key={i}><Link to={`${el.link}`}>{el.title}</Link></li>
        )
      })
    )
  }

  const generateStars = (rate: number) => {
    let arr: string[] = [];
    for(let i = 0; i < rate; i++) {
      arr.push('i')
    }
    return (
      arr.map((el, index) => {
        return <i className="fa-solid fa-star" key={index}></i>
      })
    )
  }

  return (
    <div className={styles["side-bar"]}>
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
      <div className={styles["side-bar__section"]}>
        <div className={styles["side-bar__avatar"]}>
          {
            isImgLoading || !data.avatar
            ?
            <Loader widthAdditional={64} widthMain={80}/>
            :
            <img 
              src={`http://localhost:5000/uploads/${data.avatar}`} 
              alt={data.name} 
              className={styles["side-bar__avatar-img"]}
            />
          }
          <label className={styles["side-bar__avatar-change"]}>
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
        <div className={styles["side-bar__name"]}>{data.name}</div>
        <Link className={styles["side-bar__rating"]} to='/'>
          <div className={styles["side-bar__rating-rate"]}>5,0</div>
          <div className={styles["side-bar__rating-line"]}>
            {generateStars(5)}
          </div>
          <div className={styles["side-bar__rating-reviews"]}>6 отзывов</div>
        </Link>
      </div>
      <div className={styles["side-bar__section"]}>
        <ul className={styles["side-bar__list"]}>
          {generateLi(0)}
        </ul>
      </div>
      <div className={styles["side-bar__section"]}>
        <ul className={styles["side-bar__list"]}>
          {generateLi(1)}
        </ul>
      </div>
      <div className={styles["side-bar__section"]}>
        <ul className={styles["side-bar__list"]}>
          {generateLi(2)}
        </ul>
      </div>
      <div className={styles["side-bar__section"]}>
        <ul className={styles["side-bar__list"]}>
          {generateLi(3)}
        </ul>
      </div>
    </div>
  )
}
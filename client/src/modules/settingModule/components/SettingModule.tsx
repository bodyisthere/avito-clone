import React, { FC, useState } from 'react'

import './SettingModule.scss'

import { Select } from '../../../UI'

interface ISettingModule {

}

export const SettingModule: FC<ISettingModule> = () => {
  const [isConfirmMail, setIsConfirmMail] = useState<boolean>(false);

  return (
    <div className="setting-module">
      <div className="setting-module__title">Настройки</div>
      <div className="setting-module__section">
        <div className="setting-module__mail">
          <div className="setting-module__mail-e">
            artemka.lunev@mail.ru
            <span><i className="fa-solid fa-pen"></i></span>
          </div>
          {
            isConfirmMail 
            ? 
            <div className="setting-module__mail-condition setting-module__mail-condition--green">
              <i className="fa-solid fa-check"></i>Подтверждён
            </div> 
            : 
            <div className="setting-module__mail-condition setting-module__mail-condition--red">
              <i className="fa-solid fa-xmark"></i>Не подтверждён
            </div> 
          }
        </div>
      </div>
      <div className="setting-module__section">
        <div className="setting-module__subtitle">Контактная информация</div>
        <div className="setting-module__content">
          <div className="setting-module__left">Город</div>
          <div className="setting-module__right">
            <div className="setting-module__selects">
              <Select options={['Казань']} onChange={''}/>
              <Select options={['Козья слобода']} onChange={''}/>
            </div>
            <button className="setting-module__button">Сохранить</button>
          </div>
        </div>
      </div>
      <div className="setting-module__section">
        <div className="setting-module__subtitle">Телефоны</div>
      </div>
    </div>
  )
}
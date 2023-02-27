import React, { FC } from 'react'
import { SideBar } from '../../components/SideBar/SideBar'
import { AvitoFastLinks } from '../../components/AvitoFastLinks/AvitoFastLinks'
import { SettingModule } from '../../modules/settingModule'

import './Settings.scss'

interface ISettings {

}

export const Settings: FC<ISettings> = () => {
  return (
    <div className="settings">
      <div className="settings__container">
        <div className="settings__top"> 
          <AvitoFastLinks />
        </div>
        <div className="settings__bottom">
          <SideBar />
          <SettingModule />
        </div>
      </div>
    </div>
  )
}
import React, { FC } from 'react'
import { SideBar } from '../../components/SideBar/SideBar'

import './Settings.scss'

interface ISettings {

}

export const Settings: FC<ISettings> = () => {
  return (
    <div className="settings">
      <div className="settings__container">
        <div className="settings__top">

        </div>
        <div className="settings__bottom">
          <SideBar />

        </div>
      </div>
    </div>
  )
}
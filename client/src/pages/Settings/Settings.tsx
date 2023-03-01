import React, { FC } from 'react'
import { SettingModule } from '../../modules/settingModule'

import { LayoutProfile } from '../../components/Layout/LayoutProfile'

interface ISettings {

}

export const Settings: FC<ISettings> = () => {
  return (
    <LayoutProfile>
      <SettingModule /> 
    </LayoutProfile>
  )
}
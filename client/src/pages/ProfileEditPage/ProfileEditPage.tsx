import React, { FC } from 'react'

import { LayoutProfile } from '../../components/Layout/LayoutProfile'
import { ProfileEditModule } from '../../modules/profileEditModule/index'

interface IProfileEditPage {

}

export const ProfileEditPage: FC<IProfileEditPage> = () => {
  return (
    <LayoutProfile>
      <ProfileEditModule />
    </LayoutProfile>
  )
}
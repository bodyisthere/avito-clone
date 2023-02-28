import React, { FC } from 'react'

import { LayoutProfile } from '../../components/Layout/LayoutProfile'
import { ProfileControlModule } from '../../modules/profileControlModule/index'

interface IProfileControl {

}

export const ProfileControl: FC<IProfileControl> = () => {
  return (
    <LayoutProfile>
      <ProfileControlModule />
    </LayoutProfile>
  )
}
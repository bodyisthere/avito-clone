import React, { FC } from 'react'

import { LayoutProfile } from '../../components/Layout/LayoutProfile'
import { SafetyModule } from '../../modules/safetyModule/index'

interface ISafety {

}

export const Safety: FC<ISafety> = () => {
  return (
    <LayoutProfile>
      <SafetyModule />
    </LayoutProfile>
  )
}
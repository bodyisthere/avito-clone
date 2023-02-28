import React, { FC } from 'react'

import { LayoutProfile } from '../../components/Layout/LayoutProfile'
import { SpecialOffersModule } from '../../modules/specialOffersModule//index'

interface ISpecialOffers {

}

export const SpecialOffers: FC<ISpecialOffers> = () => {
  return (
    <LayoutProfile> 
      <SpecialOffersModule />
    </LayoutProfile> 
  )
}
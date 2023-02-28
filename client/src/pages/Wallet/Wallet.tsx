import React, { FC } from 'react'

import { LayoutProfile } from '../../components/Layout/LayoutProfile'
import { WalletModule } from '../../modules/walletModule/index'

interface IWallet {

}

export const Wallet: FC<IWallet> = () => {
  return (
    <LayoutProfile>
      <WalletModule />
    </LayoutProfile>
  )
}
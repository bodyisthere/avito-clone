import React, { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'

import { AvitoFastLinks } from '../AvitoFastLinks/AvitoFastLinks'
import { Footer } from '../Footer/Footer'
import { SideBar } from '../SideBar/SideBar'


export const LayoutProfile: FC<PropsWithChildren> = ( { children } ) => {
  return (
    <div className={styles['profile']}>
      <div className={styles["profile__container"]}>
        <div className={styles["profile__top"]}>
          <AvitoFastLinks />
        </div>
        <div className={styles["profile__middle"]}>
          <SideBar />
          {children}
        </div>
      </div>
    </div>
  )
}
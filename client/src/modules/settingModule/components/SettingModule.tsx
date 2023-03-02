import React, { FC, useState } from 'react'

import styles from './SettingModule.module.scss'

import { OnOff } from '../../../UI'
import { SettingEmailNotifications } from './setting-fields/SettingEmailNotifications';
import { SettingMessenger } from './setting-fields/SettingMessenger';
import { SettingSocialMedia } from './setting-fields/SettingSocialMedia';
import { SettingDelete } from './setting-fields/SettingDelete';
import { SettingEmail } from './setting-fields/SettingEmail';
import { SettingContactInfo } from './setting-fields/SettingContactInfo/SettingContactInfo';
import { SettingPhoneNumber } from './setting-fields/SettingPhoneNumber';
import { SettingSellCount } from './setting-fields/SettingSellCount';

interface ISettingModule {

}

export const SettingModule: FC<ISettingModule> = () => {
  return (
    <div className={styles["setting-module"]}>
      <div className={styles["setting-module__title"]}>Настройки</div>
      <SettingEmail />
      <SettingContactInfo />
      <SettingPhoneNumber />
      <SettingSocialMedia />
      <SettingSellCount />
      <SettingEmailNotifications />
      <SettingMessenger />
      <SettingDelete />
    </div>
  )
}
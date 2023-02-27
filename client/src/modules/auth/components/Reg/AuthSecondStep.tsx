import React, { FC } from 'react';

import { IAuth } from '../auth-types';
import styles from '../Auth.module.scss'

export const AuthSecondStep: FC<IAuth> = ({setStep}) => {
  return (
  <div className={styles['auth-pop__send-link']}>
    <div className={styles["auth-pop__title"]}>Регистрация</div>
    <div className={styles["auth-pop__text"]}>На вашу почту была отправлена ссылка с активацией вашего аккаунта</div>
    <span>😎</span>
  </div>
  )
}
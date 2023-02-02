import React, { FC } from 'react';

import { IAuth } from '../auth-types';

export const AuthSecondStep: FC<IAuth> = ({setStep}) => {
  return (
  <div className='auth-pop__send-link'>
    <div className="auth-pop__title">Регистрация</div>
    <div className="auth-pop__text">На вашу почту была отправлена ссылка с активацией вашего аккаунта</div>
    <span>😎</span>
  </div>
  )
}
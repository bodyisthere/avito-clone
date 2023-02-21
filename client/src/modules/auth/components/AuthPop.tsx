import React, { FC, useState, useRef } from 'react';

import './Auth.scss'
import { AuthLogin } from './Log/AuthLogin';
import { AuthReg } from './Reg/AuthReg';
import { AuthRecover } from './Recover/AuthRecover';

interface IAuthPop {
  setIsAuthPopOpen: any
}

export const AuthPop: FC<IAuthPop>= ( { setIsAuthPopOpen } ) => {  
  const [condition, setCondition] = useState<'log' | 'reg' | 'recover'>('log');

  return (
  <div className="auth-pop">
    <div className="auth-pop__container">
      <div className="auth-pop__close" onClick={() => setIsAuthPopOpen(false)}><i className="fa-solid fa-xmark"></i></div>
      {condition === 'log' ? <AuthLogin setCondition={setCondition} /> : ''}
      {condition === 'reg' ? <AuthReg setCondition={setCondition}/> : ''}
      {condition === 'recover' ? <AuthRecover setCondition={setCondition}/> : ''}
    </div>
  </div>
  )
}
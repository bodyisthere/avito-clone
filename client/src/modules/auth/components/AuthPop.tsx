import React, { FC, useState, useRef } from 'react';

import './Auth.scss'
import { AuthLogin } from './Log/AuthLogin';
import { AuthReg } from './Reg/AuthReg';
import { AuthRecover } from './Recover/AuthRecover';
import { useClosePop } from '../../../hooks';
import { authSlice } from '../store/authSlice';
import { useAppDispatch } from '../../../hooks/redux-hooks/redux';

export const AuthPop: FC= () => {  
  const [condition, setCondition] = useState<'log' | 'reg' | 'recover'>('log');

  const root = useRef<HTMLDivElement | null>(null);
  const { toggleAuth } = authSlice.actions;
  const dispatch = useAppDispatch();

  // useClosePop(root, () => dispatch(toggleAuth()))

  return (
  <div className="auth-pop">
    <div className="auth-pop__container" ref={root}>
      <div className="auth-pop__close" onClick={() => dispatch(toggleAuth())}><i className="fa-solid fa-xmark"></i></div>
      {condition === 'log' ? <AuthLogin setCondition={setCondition} /> : ''}
      {condition === 'reg' ? <AuthReg setCondition={setCondition}/> : ''}
      {condition === 'recover' ? <AuthRecover setCondition={setCondition}/> : ''}
    </div>
  </div>
  )
}
import React, { FC, useState, useRef } from 'react';

import { AuthLogin } from './Log/AuthLogin';
import { AuthReg } from './Reg/AuthReg';
import { AuthRecover } from './Recover/AuthRecover';

import styles from './Auth.module.scss'

import { useActions } from '../../../hooks';

interface IAuthPop {
}

export const AuthPop: FC<IAuthPop>= () => {  
  const { setAuthPop } = useActions();

  const [condition, setCondition] = useState<'log' | 'reg' | 'recover'>('log');

  return (
  <div className={styles["auth-pop"]} onClick={() => setAuthPop(false)}>
    <div className={styles["auth-pop__container"]} onClick={e => e.stopPropagation()}>
      <div className={styles["auth-pop__close"]} onClick={() => setAuthPop(false)}><i className="fa-solid fa-xmark"></i></div>
      {condition === 'log' ? <AuthLogin setCondition={setCondition} /> : ''}
      {condition === 'reg' ? <AuthReg setCondition={setCondition}/> : ''}
      {condition === 'recover' ? <AuthRecover setCondition={setCondition}/> : ''}
    </div>
  </div>
  )
}
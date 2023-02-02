import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { IAuth } from '../auth-types';
import { AuthFirstStep } from './AuthFirstStep';
import { AuthSecondStep } from './AuthSecondStep';

export const AuthReg: FC<IAuth>= ({setCondition}) => {
  const [step, setStep] = useState<'reg' | 'send-activate-link'>('reg');

  return (
    <>
      {step === 'reg' ? <AuthFirstStep setCondition={setCondition} setStep={setStep}/> : ''}
      {step === 'send-activate-link' ? <AuthSecondStep setCondition={setCondition} setStep={setStep}/> : ''}
    </>

  )
}
import React, { FC, useState } from 'react';

import { IAuth } from '../auth-types';
import { InputText, Button } from '../../../../UI';

export const AuthRecover: FC<IAuth> = () => {
  const [email, setEmail] = useState<string>('')
  return (
    <div className='auth-pop__send-link'>
      <div className="auth-pop__title" style={{'marginBottom': '20px'}}>Забыли пароль?</div>
      <label>
        Введите вашу почту
        <InputText onChange={e => setEmail(e.target.value)} value={email} clearInput={() => setEmail('')}></InputText>
      </label>
      <Button>Далее</Button>
    </div>
  )
}
import { useState } from 'react'
import { IErrorValidation } from '../components/auth-types';
import { useAppSelector, useActions } from '../../../hooks';
import { useLoginMutation } from '../../../store/api/authApi';

export const useLoginForm = () => {
  const { login, setAuthPop, setAuth } = useActions();
  const [ loginReq, {isError, isLoading}] = useLoginMutation()

  const [error, setError] = useState<IErrorValidation | null>(null)
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberPassword, setRememberPassword] = useState<boolean>(false);
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);

  const loginSend = async () => {
    if(email.length === 0 || password.length === 0) {return setError({message: 'Заполните все поля'})}
    await loginReq({email, password})
      .unwrap()
      .then((payload) => login(payload))
      .catch((error) => setError(error.data))
  }

  return {
    email, setEmail, 
    password, setPassword, 
    rememberPassword, setRememberPassword,
    isPasswordShow, setIsPasswordShow,
    error, setError,
    isError, isLoading,
    loginSend
  }
}
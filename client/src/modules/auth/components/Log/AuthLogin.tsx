import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button, InputPassword, InputText } from "../../../../UI";
import { IAuth, IErrorValidation } from "../auth-types";

import { useLoginMutation } from "../../../../store/api/authApi";
import { useActions, useAppSelector } from "../../../../hooks";

export const AuthLogin: FC<IAuth> = ({ setCondition }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberPassword, setRememberPassword] = useState<boolean>(false);
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);

  // const { } = useAppSelector(state => state.userReducer)

  const { login } = useActions();

  const [error, setError] = useState<IErrorValidation | null>(null)

  const [ loginReq, {isError}] = useLoginMutation()

  const loginSubmit = async () => {
    if(email.length === 0 || password.length === 0) {return setError({message: 'Заполните все поля'})}
    await loginReq({email, password})
      .unwrap()
      .then((payload) => {
        setEmail('');
        setPassword('');
        console.log(payload)
        login(payload);
      })
      .catch((error) => setError(error.data))
  }

  const checkFieldOnError = (field: string) => {
    let result = false;
    let message = '';
    error?.errors?.forEach((el) => {
      if(el.param === field) {
        result = true;
        message = el.msg;
      }
    })
    return {result, message}
  }

  return (
    <>
      <div className="auth-pop__title">Вход</div>
      <div className="auth-pop__form">
        <span
          className={`auth-pop__span ${isError ? "auth-pop__span--error" : ""}`}>
            {error ? error.message : ''}
        </span>
        <InputText
          placeholder="Телефон или почта"
          clearInput={() => setEmail("")}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={error ? checkFieldOnError('email').result ? 'input-text__input--error' : '' : ''}
          errorMessage={error ? checkFieldOnError('email').message : ''}
        />
        <InputPassword
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          isShow={isPasswordShow}
          setIsShow={() => setIsPasswordShow(!isPasswordShow)}
          className={`auth-pop__input-span ${error ? checkFieldOnError('password').result ? 'input-text__input--error' : '' : ''}`}
          errorMessage={error ? checkFieldOnError('password').message : ''}
        />
        <div className="auth-pop__form-password-settings">
          <label>
            <input
              type="checkbox"
              name=""
              onClick={() => setRememberPassword(!rememberPassword)}
            />
            Запомнить пароль
          </label>
          <button
            className="auth-pop__form-password-forgot"
            onClick={() => setCondition("recover")}>
            Забыли пароль?
          </button>
        </div>
        <Button onClick={() => loginSubmit()}>Войти</Button>
      </div>
      <div className="auth-pop__reg">
        или <button onClick={() => setCondition("reg")}>регистрация</button>
      </div>
      <div className="auth-pop__caution">
        При регистрации и входе вы соглашаетесь с{" "}
        <Link to="">условиями использования Авито</Link> и{" "}
        <Link to="">политикой обработки данных</Link>
      </div>
    </>
  );
};

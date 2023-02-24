import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button, InputPassword, InputText } from "../../../../UI";
import { useLoginForm } from "../../hooks/useLoginForm";
import { checkFieldOnError } from "../../helpers/checkFieldOnError";
import { IAuth } from "../auth-types";
import { useActions } from "../../../../hooks";

export const AuthLogin: FC<IAuth> = ({ setCondition }) => {
  const { 
    email, setEmail, 
    password, setPassword, 
    rememberPassword, setRememberPassword,
    isPasswordShow, setIsPasswordShow,
    error, isError,
    loginSend
  } = useLoginForm();

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
          className={error ? checkFieldOnError(error,'email').result ? 'input-text__input--error' : '' : ''}
          errorMessage={error ? checkFieldOnError(error,'email').message : ''}
        />
        <InputPassword
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          isShow={isPasswordShow}
          setIsShow={() => setIsPasswordShow(!isPasswordShow)}
          className={`auth-pop__input-span ${error ? checkFieldOnError(error,'password').result ? 'input-text__input--error' : '' : ''}`}
          errorMessage={error ? checkFieldOnError(error,'password').message : ''}
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
        <Button onClick={() => loginSend()}>Войти</Button>
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

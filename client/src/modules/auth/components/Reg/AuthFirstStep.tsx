import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Button, InputPassword, InputText, Loader } from "../../../../UI";
import { IAuth } from "../auth-types";
import { useRegistrationForm } from "../../hooks/useRegistrationForm";
import { checkFieldOnError } from "../../helpers/checkFieldOnError";

export const AuthFirstStep: FC<IAuth> = ({ setCondition, setStep }) => {
  const { 
    email, name, password, passwordRepeat, isPasswordShow, rememberPassword, error, isError, isLoading,
    setEmail, setName, setPassword, setPasswordRepeat, setIsPasswordShow, setRememberPassword, setError,
    registrationSend
  } = useRegistrationForm(setStep);

  return (
    <>
      <div className="auth-pop__title">Регистрация</div>
      <span
          className={`auth-pop__span ${isError ? "auth-pop__span--error" : ""}`}>
            {error && error.message}
      </span>
      {
        isLoading 
        ? 
        <Loader /> 
        :
        <>
          <div className="auth-pop__form">
            <span
              className={`auth-pop__span ${error ? "auth-pop__span--error" : ""}`}>
            </span>
            <InputText
              className={error ? checkFieldOnError(error, 'name').result ? 'input-text__input--error' : '' : ''}
              placeholder="Имя и фамилия"
              clearInput={() => setName("")}
              onChange={(e) => setName(e.target.value)}
              errorMessage={error ? checkFieldOnError(error, 'name').message : ''}
              value={name}
              />
            <InputText
              placeholder="Почта"
              className={error ? checkFieldOnError(error, 'email').result ? 'input-text__input--error' : '' : ''}
              clearInput={() => setEmail("")}
              onChange={(e) => setEmail(e.target.value)}
              errorMessage={error ? checkFieldOnError(error, 'email').message : ''}
              value={email}
              />

            <InputPassword
              placeholder="Пароль"
              className={error ? checkFieldOnError(error, 'password').result ? 'input-text__input--error' : '' : ''}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              isShow={isPasswordShow}
              errorMessage={error ? checkFieldOnError(error, 'password').message : ''}
              setIsShow={() => setIsPasswordShow(!isPasswordShow)}
              />

            <InputPassword
              placeholder="Повторите пароль"
              className={error ? checkFieldOnError(error, 'passwordRepeat').result ? 'input-text__input--error' : '' : ''}
              onChange={(e) => setPasswordRepeat(e.target.value)}
              value={passwordRepeat}
              isShow={isPasswordShow}
              setIsShow={() => setIsPasswordShow(!isPasswordShow)}
            />

            <div
              className="auth-pop__form-password-settings"
              style={{ marginBottom: "10px" }}>
              <label>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onClick={() => setRememberPassword(!rememberPassword)}
                />
                Запомнить пароль
              </label>
            </div>
            <Button onClick={() => registrationSend()}>
              Зарегистрироваться
            </Button>
          </div>
          <div className="auth-pop__reg">
            или <button onClick={() => setCondition("log")}>войти</button>
          </div>
          <div className="auth-pop__caution">
            При регистрации и входе вы соглашаетесь с{" "}
            <Link to="">условиями использования Авито</Link> и{" "}
            <Link to="">политикой обработки данных</Link>
          </div>

        </>
      }
    </>
  );
};

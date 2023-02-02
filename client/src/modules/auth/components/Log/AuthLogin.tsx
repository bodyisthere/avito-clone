import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button, InputPassword, InputText } from "../../../../UI";
import { IAuth } from "../auth-types";

export const AuthLogin: FC<IAuth> = ({ setCondition }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberPassword, setRememberPassword] = useState<boolean>(false);
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  //input-password__input--error

  return (
    <>
      <div className="auth-pop__title">Вход</div>
      <div className="auth-pop__form">
        <span
          className={`auth-pop__span ${error ? "auth-pop__span--error" : ""}`}>
          .
        </span>
        <InputText
          placeholder="Телефон или почта"
          clearInput={() => setEmail("")}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <InputPassword
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          isShow={isPasswordShow}
          setIsShow={() => setIsPasswordShow(!isPasswordShow)}
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
        <Button>Войти</Button>
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

import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button, InputPassword, InputText } from "../../../../UI";
import { validationRegistartion } from "../../helpers/validation";
import { IAuth } from "../auth-types";

export const AuthFirstStep: FC<IAuth> = ({ setCondition, setStep }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [error, setError] = useState<{fields: number[], message: string[]} | null>(null);

  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");
  const [rememberPassword, setRememberPassword] = useState<boolean>(false);
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);

  useEffect(() => console.log(error), [error])

  return (
    <>
      <div className="auth-pop__title">Регистрация</div>
      <div className="auth-pop__form">
        <span
          className={`auth-pop__span ${error ? "auth-pop__span--error" : ""}`}>
        </span>
        <InputText
          className={error?.fields.includes(1) ? 'input-password__input--error' : ''}
          placeholder="Имя и фамилия"
          clearInput={() => setName("")}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <InputText
          placeholder="Почта"
          className={error?.fields.includes(2) ? 'input-password__input--error' : ''}
          clearInput={() => setEmail("")}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <InputPassword
          placeholder="Пароль"
          className={error?.fields.includes(3) ? 'input-password__input--error' : ''}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          isShow={isPasswordShow}
          setIsShow={() => setIsPasswordShow(!isPasswordShow)}
        />

        <InputPassword
          placeholder="Повторите пароль"
          className={error?.fields.includes(4) ? 'input-password__input--error' : ''}
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
        <Button onClick={() => validationRegistartion({email, name, password, passwordRepeat, setError})}>
        {/* <Button onClick={() => (setStep ? setStep("send-activate-link") : "")}> */}
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
  );
};

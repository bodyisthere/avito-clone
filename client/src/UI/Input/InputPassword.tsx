import React, { FC } from "react";

import styles from './Input.module.scss'

interface IInputPassword {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
  placeholder?: string;
  isShow: boolean;
  setIsShow: () => void;
  errorMessage?: string
}

export const InputPassword: FC<IInputPassword> = ({
  className,
  placeholder,
  onChange,
  value,
  isShow,
  setIsShow,
  errorMessage
}) => {
  return (
    <div className={`${styles['input-password']} ${className && className}`}>
      <input
        type={isShow ? "text" : "password"}
        className={styles['input-password__input']}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {errorMessage ? <span className={`${styles['input-password__error-span']}`}>{errorMessage}</span> : ''}
      <button
        className={styles["input-password__show"]}
        onClick={setIsShow}
        title="Показать/скрыть пароль">
        {isShow ? (
          <i className="fa-solid fa-eye"></i>
        ) : (
          <i className="fa-solid fa-eye-slash"></i>
        )}
      </button>
    </div>
  );
};

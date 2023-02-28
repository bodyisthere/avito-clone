import React, { FC } from "react";

import styles from './Input.module.scss'

interface IInputText {
  clearInput?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined;
  className?: string;
  placeholder?: string;
  errorMessage?: string
}

export const InputText: FC<IInputText> = ( {clearInput, onChange, className, placeholder, value, errorMessage} ) => {
  return (
    <div className={`${styles['input-text']} ${className}`}>
      <input
        type="text"
        className={styles['input-text__input']}
        placeholder={placeholder}
        onChange={onChange}
        value={value ? value : ''}
        />
      {errorMessage ? <span className={styles[`input-text__error-span`]}>{errorMessage}</span> : ''}
      <button className={styles["input-text__clear"]} onClick={clearInput}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

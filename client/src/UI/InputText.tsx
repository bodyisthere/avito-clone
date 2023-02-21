import React, { FC } from "react";

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
    <div className={`input-text ${className}`}>
      <input
        type="text"
        className='input-text__input'
        placeholder={placeholder}
        onChange={onChange}
        value={value ? value : ''}
        />
      {errorMessage ? <span className={`input-text__error-span`}>{errorMessage}</span> : ''}
      <button className="input-text__clear" onClick={clearInput}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

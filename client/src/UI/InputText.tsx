import React, { FC } from "react";

interface IInputText {
  clearInput?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
  placeholder?: string;
}

export const InputText: FC<IInputText> = ({
  clearInput,
  onChange,
  className,
  placeholder,
  value,
}) => {
  return (
    <div className="input-text">
      <input
        type="text"
        className={`input-text__input ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <button className="input-text__clear" onClick={clearInput}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

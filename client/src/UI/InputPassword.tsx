import React, { FC } from "react";

interface IInputPassword {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
  placeholder?: string;
  isShow: boolean;
  setIsShow: () => void;
}

export const InputPassword: FC<IInputPassword> = ({
  className,
  placeholder,
  onChange,
  value,
  isShow,
  setIsShow,
}) => {
  return (
    <div className="input-password">
      <input
        type={isShow ? "text" : "password"}
        className={`input-password__input ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <button
        className="input-password__show"
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

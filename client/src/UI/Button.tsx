import React, { FC } from "react";

import "./UI.scss";

interface IButton {
  children: string;
  onClick?: any;
  className?: string;
}

export const Button: FC<IButton> = ({ children, onClick, className }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

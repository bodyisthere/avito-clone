import React, { FC, ButtonHTMLAttributes} from "react";

import styles from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: any;
  className?: string;
}

export const Button: FC<IButton> = ({ children, className, ...props }) => {
  return (
    <button className={`${styles.button} ${className ? className : ''}`} {...props} >
      {children}
    </button>
  );
};

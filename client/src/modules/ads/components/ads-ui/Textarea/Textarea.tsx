import React, { FC, TextareaHTMLAttributes } from "react";

import styles from './Textarea.module.scss'

interface ITextarea  extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  className?: string;
}

export const Textarea: FC<ITextarea> = ( {className, ...props} ) => {
  return (
    <textarea 
      className={`${styles['text-area']} ${className}`} 
      {...props} 
    />
  )
}
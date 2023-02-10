import React, { FC } from "react";

interface ITextarea {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  className?: string;
  placeholder?: string;
}

export const Textarea: FC<ITextarea> = ( {onChange, value, className, placeholder} ) => {
  return (
    <textarea className={`text-area ${className}`} placeholder={placeholder} onChange={onChange} value={value}></textarea>
  )
}
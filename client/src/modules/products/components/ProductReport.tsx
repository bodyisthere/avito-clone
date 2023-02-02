import React, { FC, useState } from 'react';

interface IProductReport {
  setIsReport: React.Dispatch<React.SetStateAction<boolean>>
  setIsHide: React.Dispatch<React.SetStateAction<boolean>>
}

export const ProductReport: FC<IProductReport> = ({setIsReport, setIsHide}) => {
  return (
    <div className="product-report">
      <div className="product-report__title">Скрыть рекомендацию</div>
      <div className="product-report__buttons">
        <button className="product-report__button" onClick={() => {setIsReport(false);setIsHide(true)}}>Не интересует это объявление</button>
        <button className="product-report__button" onClick={() => {setIsReport(false);setIsHide(true)}}>Не интересует эта категория</button>
        <button className="product-report__button" onClick={() => {setIsReport(false);setIsHide(true)}}>Не подходит город или регион</button>
      </div>
    </div>
  )
}
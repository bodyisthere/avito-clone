import React, { FC, useState } from "react"
import { Link } from "react-router-dom"

import './NewAds.scss'
import logo from '../../assets/img/logo.png'
import { CategoryChoose, CategoryChoosen } from "../../modules/newCategoryAds"

export const NewAds: FC = () => {
  const [step, setStep] = useState<'category-choose' | 'category-choosen'>('category-choose');

  return (
    <div className="new-ads">
      <div className="new-ads__container">
        <div className="new-ads__title">
          <Link to='/'>
            <img src={logo} alt="Логотип" />
          </Link>
            Новое объявление
        </div>
        {step === 'category-choose' ? <CategoryChoose setStep={setStep}/> : ''}
        {step === 'category-choosen' ? <CategoryChoosen /> : ''}
      </div>
    </div>
  )
}
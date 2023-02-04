import React, { FC, useRef } from 'react'

import tipFirstImg from '../../../../assets/img/tip-1-car.png'
import tipSecondImg from '../../../../assets/img/tip-2-car.png'

import { useClosePop } from '../../../../hooks'

interface ITipAuto {
  setIsTipOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const TipAuto: FC<ITipAuto> = ( { setIsTipOpen } ) => {
  const tipRef = useRef<null | HTMLDivElement>(null);
  useClosePop(tipRef, setIsTipOpen);

  return (
    <div className="new-category-ads__tip-content" ref={tipRef}>
      <div className="new-category-ads__tip-title">Зачем указывать</div>
      <div className="new-category-ads__tip-text">По VIN мы проверяем историю автомобиля в сервисе «Автотека». Проверенные машины вызывают больше доверия у покупателей и продаются быстрее.</div>
      <div className="new-category-ads__tip-title">Где найти</div>
      <div className="new-category-ads__tip-img">
        <div className="new-category-ads__tip-img-item">
          <img src={tipFirstImg} alt="" />
          <div className="new-category-ads__tip-gray-text">На панели под стеклом, на стойке у передней двери, под капотом</div>
        </div>
        <div className="new-category-ads__tip-img-item">
          <img src={tipSecondImg} alt="" />
          <div className="new-category-ads__tip-gray-text">В паспорте ТС, свидетельстве о регистрациии и полисе ОСАГО</div>
        </div>
      </div>
    </div> 
  )
}
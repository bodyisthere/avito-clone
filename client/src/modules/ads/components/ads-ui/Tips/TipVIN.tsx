import React, { FC } from 'react'

import tipFirstImg from '../../../../../assets/img/tip-1-car.png'
import tipSecondImg from '../../../../../assets/img/tip-2-car.png'

interface ITipVin {
  ref: React.MutableRefObject<HTMLDivElement | null>
}

export const TipVIN: FC<ITipVin> = () => {
  
return (
    <div className="tip__content">
      <div className="tip__title">Зачем указывать</div>
      <div className="tip__text">По VIN мы проверяем историю автомобиля в сервисе «Автотека». Проверенные машины вызывают больше доверия у покупателей и продаются быстрее.</div>
      <div className="tip__title">Где найти</div>
      <div className="tip__img">
        <div>
          <img src={tipFirstImg} alt="" />
          <div className="tip__text">На панели под стеклом, на стойке у передней двери, под капотом</div>
        </div>
        <div>
          <img src={tipSecondImg} alt="" />
          <div className="tip__text">В паспорте ТС, свидетельстве о регистрациии и полисе ОСАГО</div>
        </div>
      </div>
    </div> 
)
}
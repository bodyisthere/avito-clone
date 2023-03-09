//импорт внешних пакетов
import React, { FC } from 'react'

//импорт стилей
import styles from '../Tips.module.scss'

//импорт типов

//импорт функционала
import tipFirstImg from '../../../../../assets/img/tip-1-car.png'
import tipSecondImg from '../../../../../assets/img/tip-2-car.png'

//импорт компонентов

interface ITipVin {
  ref: React.MutableRefObject<HTMLDivElement | null>
}

export const TipVIN: FC<ITipVin> = () => {
  
return (
    <div className={styles.content}>
      <div className={styles.title}>Зачем указывать</div>
      <div className={styles.text}>По VIN мы проверяем историю автомобиля в сервисе «Автотека». Проверенные машины вызывают больше доверия у покупателей и продаются быстрее.</div>
      <div className={styles.title}>Где найти</div>
      <div className={styles.img}>
        <div>
          <img src={tipFirstImg} alt="" />
          <div className={styles.text}>На панели под стеклом, на стойке у передней двери, под капотом</div>
        </div>
        <div>
          <img src={tipSecondImg} alt="" />
          <div className={styles.text}>В паспорте ТС, свидетельстве о регистрациии и полисе ОСАГО</div>
        </div>
      </div>
    </div> 
)
}
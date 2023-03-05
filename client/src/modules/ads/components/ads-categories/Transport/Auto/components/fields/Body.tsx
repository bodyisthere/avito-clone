//импорт внешних пакетов
import React, { FC } from 'react'

//импорт стилей
import standart from '../../../../../../styles/ads.module.scss'
import styles from '../Auto.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов
import { CarConditionWImg } from '../../../../../ads-components'

interface IBody {
  form: any
  setFunction: any
}

export const Body: FC<IBody> = ( { form, setFunction } ) => {
  return (
    <>
    <div className={standart.title}>Состояние кузова</div>
      <div className={styles["auto__text"]}>Укажите, что было повреждено или окрашено</div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Тип повреждения</label>
        </div>
        <div className={standart["item-right"]}>
          <CarConditionWImg setOption={setFunction} optionKey={'conditionBody'} />
        </div>
      </div>
    </>
  )
}
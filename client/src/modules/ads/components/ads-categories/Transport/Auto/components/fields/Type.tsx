//импорт внешних пакетов
import React, { FC } from 'react'

//импорт стилей
import standart from '../../../../../../styles/ads.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов
import { Select } from '../../../../../../../../UI'

interface IType {
  setFunction: any
}

export const Type: FC<IType> = ( { setFunction } ) => {
  return (
    <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Вид объявления</label>
        </div>
        <div className={standart["item-right"]}>
          <Select 
            options={['Продаю личный автомобиль', 'Автомобиль приобретен на продажу']} 
            onChange={(e: any) => setFunction('type', e)} 
          />
        </div>
      </div>
  )
}
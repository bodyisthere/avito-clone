//импорт внешних пакетов
import React, { FC } from 'react'

//импорт стилей
import standart from '../../../../../styles/ads.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов
import { InputText } from '../../../../../../../UI'

interface IName {
  setFunction: any
  form: any
  validationErrors: string[]
}

export const Name: FC<IName> = ( { form, setFunction, validationErrors } ) => {
  return (
    <>
    <div className={standart.title}>Информация об объявлении</div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Название объявления</label>
        </div>
        <div className={standart["item-right"]}>
          <InputText 
            value={form.name}
            clearInput={() => setFunction('name', null)}
            onChange={e => setFunction('name', e.target.value)} 
          />
          {validationErrors.includes('name') && <span className={standart['error-text']}>Укажите название объявления</span>}
        </div>
      </div>
    </>
  )
}
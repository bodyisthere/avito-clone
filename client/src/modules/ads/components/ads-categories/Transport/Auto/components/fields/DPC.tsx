//импорт внешних пакетов
import React, { FC } from 'react'

//импорт стилей
import standart from '../../../../../../styles/ads.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов
import { Textarea, Price } from '../../../../../ads-ui'
import { Contacts } from '../../../../../ads-components'

interface IDPC {
  form: any
  setFunction: any
  setForm: any
}

export const DPC: FC<IDPC> = ( { form, setFunction, setForm } ) => {
  return (
    <>
      <div className={standart.title}>Описание</div>
      <div className={standart.item}>
        <Textarea onChange={e => setFunction('description', e.target.value)}  value={form.description ? form.description : ''}/>
      </div>
      <div className={standart.title}>Цена</div>
      <div className={standart.item}>
        <Price value={form.price ? form.price : 0} onChange={e => setFunction('price', e.target.value)}/>
      </div>
      <div className={standart.title}>Контакты</div>
      <div className={standart.item}>
        <Contacts setForm={setForm}/>
      </div>  
    </>
  )
}
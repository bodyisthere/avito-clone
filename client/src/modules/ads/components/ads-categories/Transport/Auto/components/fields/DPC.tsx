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
  validationErrors: string[]
}

export const DPC: FC<IDPC> = ( { form, setFunction, setForm, validationErrors } ) => {
  return (
    <>
      <div className={standart.title}>Описание*</div>
      <div className={standart.item} style={{'display':"flex", 'flexDirection':'column', 'alignItems':'flex-start'}}>
        <Textarea onChange={e => setFunction('description', e.target.value)}  value={form.description ? form.description : ''}/>
        {validationErrors.includes('description') && <span className={standart['error-text']}>Заполните описание</span>}
      </div>
      <div className={standart.title}>Цена*</div>
      <div className={standart.item} style={{'display':"flex", 'flexDirection':'column', 'alignItems':'flex-start'}}>
        <Price value={form.price ? form.price : 0} onChange={e => setFunction('price', e.target.value)}/>
        {validationErrors.includes('price') && <span className={standart['error-text']}>Укажите цену</span>}
      </div>
      <div className={standart.title}>Контакты*</div>
      <div className={standart.item}>
        <Contacts setForm={setForm}/>
      </div>  
    </>
  )
}
//импорт внешних пакетов
import React, { FC } from 'react'

//импорт стилей
import standart from '../../../../../styles/ads.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов
import { CarMileage, RadioButtonsChoose } from '../../../../../UI'

interface IConditionMotorcycles {
  form: any
  setFunction: any
  validationErrors: string[]
  fields: string[]
}

export const ConditionMotorcycles: FC<IConditionMotorcycles> = ({ form, setFunction, validationErrors, fields }) => {
  return (
    <>
      <div className={standart.title}>История эксплаутации и состояние</div>
      {
        fields.includes('condition')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Состояние*</label>
          </div>
          <div className={standart["item-right"]}>
            <RadioButtonsChoose data={['Новое', 'Б/у', 'На запчасти']} value={form.condition} setOption={setFunction} optionKey={'condition'}/>
            {validationErrors.includes('condition') && <span className={standart['error-text']}><br/>Выберите состояние машины</span>}
          </div>
        </div>
      }
      {
        fields.includes('availability')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Доступность*</label>
          </div>
          <div className={standart["item-right"]}>
            <RadioButtonsChoose data={['В наличии', 'Под заказ']} value={form.availability} setOption={setFunction} optionKey={'availability'}/>
            {validationErrors.includes('availability') && <span className={standart['error-text']}><br/>Выберите доступность</span>}
          </div>
        </div>
      }
      {
        fields.includes('mileage')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Пробег*</label>
          </div>
          <div className={standart["item-right"]}>
            <CarMileage carMileage={form.mileage} setOption={setFunction} optionKey={'mileage'}/>
            {validationErrors.includes('mileage') && <span className={standart['error-text']}><br/>Выберите доступность</span>}
          </div>
        </div>
      }
      {
        fields.includes('pts')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>ПТС</label>
          </div>
          <div className={standart["item-right"]}>
            <CarMileage carMileage={form.mileage} setOption={setFunction} optionKey={'mileage'}/>
            {validationErrors.includes('mileage') && <span className={standart['error-text']}><br/>Выберите доступность</span>}
          </div>
        </div>
      }
      {
        fields.includes('mileage')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Пробег*</label>
          </div>
          <div className={standart["item-right"]}>
            <CarMileage carMileage={form.mileage} setOption={setFunction} optionKey={'mileage'}/>
            {validationErrors.includes('mileage') && <span className={standart['error-text']}><br/>Выберите доступность</span>}
          </div>
        </div>
      }
    </>
  )
}
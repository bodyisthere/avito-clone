//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей
import standart from '../../../../../styles/ads.module.scss'

//импорт типов

//импорт функционала
import { inspectionData } from '../../data/Auto/autoData'

//импорт компонентов
import { CarMileage, RadioButtonsChoose, CheckboxList, Tip } from '../../../../../UI'
import { Select } from '../../../../../../../UI'

interface ICondition {
  setForm?: any
  form: any
  setFunction: any
  validationErrors: string[]
  fields: Array<
  'condition' | 'availability' | 'mileage' | 
  'vehiclePassport' | 'inspectionData' | 'vehiclePassportOwners' |
  'condition-car'
  >
}

export const Condition: FC<ICondition> = ( { fields, form, setFunction, validationErrors, setForm } ) => {
  const [isFirstTip, setIsFirstTip] = useState<boolean>(false);
  const [isSecondTip, setIsSecondTip] = useState<boolean>(false);

  const inspectionDataCheckbox = (el: any) => {
    setForm((prev: any) => {
      if(!prev.inspectionData) {
        prev.inspectionData = [el];
        return prev;
      }
      if(prev.inspectionData?.includes(el)) {
        prev.inspectionData = prev.inspectionData?.filter((e: any) => e !== el);
        return prev;
      } else {
        prev.inspectionData[prev.inspectionData.length] = el;
        return prev;
      }
    })
  }

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
            {validationErrors.includes('condition') && <span className={standart['error-text']}><br/>Выберите состояние</span>}
          </div>
        </div>
      }
      {
        fields.includes('condition-car')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Состояние*</label>
            <div className={standart.tip} onClick={() => setIsFirstTip(!isFirstTip)}>
              ?
              { isFirstTip && <Tip setIsTipOpen={setIsFirstTip} type='Состояние машины'/> }
            </div>
          </div>
          <div className={standart["item-right"]}>
            <RadioButtonsChoose data={['Не битый', 'Битый']} value={form.condition} setOption={setFunction} optionKey={'condition'}/>
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
            {validationErrors.includes('mileage') && <span className={standart['error-text']}><br/>Выберите пробег</span>}
          </div>
        </div>
      }
      {
        fields.includes('vehiclePassport')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>ПТС</label>
            <div className={standart.tip} onClick={() => setIsSecondTip(!isSecondTip)}>
            ?
            { isSecondTip && <Tip setIsTipOpen={setIsSecondTip} type='ПТС машины'/> }
          </div>
          </div>
          <div className={standart["item-right"]}>
            <Select onChange={(e: any) => setFunction('vehiclePassport', e)} options={['-Не выбрано-', 'Оригинал', 'Дубликат', 'Электронный']}/>
            {validationErrors.includes('vehiclePassport') && <span className={standart['error-text']}><br/>Выберите птс</span>}
          </div>
        </div>
      }
      {
        fields.includes('vehiclePassportOwners')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Владельцев по ПТС</label>
          </div>
          <div className={standart["item-right"]}>
            <RadioButtonsChoose data={['1', '2', '3', '4+']} optionKey='vehiclePassportOwners' setOption={setFunction} value={form.vehiclePassportOwners}/>
            {validationErrors.includes('vehiclePassportOwners') && <span className={standart['error-text']}><br/>Выберите владельцев ПТС</span>}
          </div>
        </div>
      }
      {
        fields.includes('inspectionData') 
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Данные о ТО</label>
          </div>
          <div className={standart["item-right"]}>
            <CheckboxList 
              data={{title: null, data: inspectionData}} 
              changeFunction={inspectionDataCheckbox}
              />
            {validationErrors.includes('inspectionData') && <span className={standart['error-text']}><br/>Укажите информацию о ТО</span>}
          </div>
        </div>
      }
    </>
  )
}
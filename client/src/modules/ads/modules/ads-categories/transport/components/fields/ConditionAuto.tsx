//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей
import standart from '../../../../../styles/ads.module.scss'
import styles from '../constructor/Auto/Auto.module.scss'

//импорт типов

//импорт функционала
import { inspectionData } from '../../data/carData'

//импорт компонентов
import { CarMileage, RadioButtonsChoose, CheckboxList, Tip } from '../../../../../UI'
import { Select } from '../../../../../../../UI'

interface ICondition {
  form: any
  setFunction: any
  setForm: any
  fields: string[]
  validationErrors: string[]
}

export const Condition: FC<ICondition> = ( { form, setFunction, setForm, fields, validationErrors } ) => {
  const [isFirtTip, setIsFirstTip] = useState<boolean>(false);
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
        fields.includes('Mileage') &&
        <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Пробег*</label>
        </div>
        <div className={standart["item-right"]}>
          <CarMileage carMileage={form.mileage} setOption={setFunction} optionKey={'mileage'}/>
          {validationErrors.includes('mileage') && <span className={standart['error-text']}><br/>Выберите количество километров пробега</span>}
        </div>
      </div>}
      {
        fields.includes('Condition') &&
        <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Состояние*</label>
          <div className={styles["auto__tip"]} onClick={() => setIsFirstTip(!isFirtTip)}>
            ?
            {
              isFirtTip 
              ? 
              <Tip setIsTipOpen={setIsFirstTip} type='Состояние машины'/>
              : 
              ''
            }
          </div>
        </div>
        <div className={standart["item-right"]}>
          <RadioButtonsChoose data={['Не битый', 'Битый']} value={form.condition} setOption={setFunction} optionKey={'condition'}/>
          {validationErrors.includes('condition') && <span className={standart['error-text']}><br/>Выберите состояние машины</span>}
        </div>
      </div>}
      {
        fields.includes('VehiclePassport') &&
        <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>ПТС*</label>
          <div className={styles["auto__tip"]} onClick={() => setIsSecondTip(!isSecondTip)}>
            ?
            {isSecondTip 
              ? 
              <Tip setIsTipOpen={setIsSecondTip} type='ПТС машины'/>
              : 
              ''
            }
          </div>
        </div>
        <div className={standart["item-right"]}>
          <Select options={['-','Оригинал','Дубликат','Электронный']} onChange={(e: any) => setFunction('vehiclePassport', e)} ></Select>
          {validationErrors.includes('vehiclePassport') && <span className={standart['error-text']}><br/><br/>Выберите ПТС</span>}
        </div>
      </div>}
      {
        fields.includes('VehiclePassportOwners') &&
        <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Владельцев по ПТС*</label>
        </div>
        <div className={standart["item-right"]}>
          <RadioButtonsChoose data={['1', '2', '3', '4+']} optionKey='vehiclePassportOwners' setOption={setFunction} value={form.vehiclePassportOwners}/>
          {validationErrors.includes('vehiclePassportOwners') && <span className={standart['error-text']}><br/>Выберите владельцев ПТС</span>}
        </div>
      </div>}
      {
        fields.includes('InspectionData') &&
        <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Данные о ТО*</label>
        </div>
        <div className={standart["item-right"]}>
          <CheckboxList 
            data={{title: null, data: inspectionData}} 
            changeFunction={inspectionDataCheckbox}
            />
          {validationErrors.includes('inspectionData') && <span className={standart['error-text']}><br/>Укажите информацию о ТО</span>}
        </div>
      </div>}
    </>
  )
}
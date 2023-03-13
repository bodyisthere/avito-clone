//импорт внешних пакетов
import { FC, useState, useEffect } from 'react'

//импорт стилей
import styles from './Auto.module.scss'

//импорт типов
import { carOld } from '../../../types/transport/Auto/ICarOld'
import { additionalOptions } from '../../../types/transport/Auto/ICarNew'

//импорт функционала
import { adsApi } from '../../../../../../../../store/api/adsApi'
import { carOldForm } from '../../../forms/Auto/carOld'
import { useAppSelector } from '../../../../../../../../hooks'
import { carOldValidation } from '../../../validation/Auto/carOldValidation'
import { autoAdditional } from '../../../data/Auto/autoAdditional'
import { autoBrands } from '../../../data/Auto/autoBrands'
import { useTransportAds } from '../../../hooks/useTransportAds'

//импорт компонентов
import { Select, Button } from '../../../../../../../../UI'
import { CarBody } from '../../fields/Auto/CarBody/CarBody'
import { 
  Name, Appereance, RegistrationInfo, 
  Specifications, Condition, Additional, 
  DPC, Type
} from '../../fields'

export const AutoRun: FC = () => {
  const { category } = useAppSelector(state => state.categoryChooseReducer);
  
  const [postSend, {} ] = adsApi.useNewPostMutation();
  
  const { setFunction, submitForm, validationErrors, form, setForm } = useTransportAds(carOldForm, carOldValidation);

  useEffect(() => {
    setFunction('tags', category)
  }, [])
  
  const conditionBodyPretty = () => {
    let conditionBody: string[] = []; 
    form.conditionBody.forEach(el => {
      el.places.forEach(e => {
        if(e.points && e.points.length > 0) conditionBody.push(...e.points)
      })
    })
  }

  const additionalOptionsPretty = () => {
    let additionalOptions: any = [];
    let k: keyof additionalOptions;
    for(k in form.additionalOptions) {
      const key = k;
      if(form.additionalOptions[key] === null || form.additionalOptions[key] === '-Не выбрано-') return;
      if(Array.isArray(form.additionalOptions[key])) {
        if(form.additionalOptions[k])
        additionalOptions = {
          ...additionalOptions,
          [k]: form.additionalOptions[k]
        }
      }
    };
    return additionalOptions;
  }

  return (
    <div className={styles["auto"]}>
      <Name setFunction={setFunction} form={form} validationErrors={validationErrors}/>
      <Type setFunction={setFunction} form={form} validationErrors={validationErrors} />
      <Appereance form={form} setFunction={setFunction} validationErrors={validationErrors} fields={['color', 'photo', 'video']}/>
      <RegistrationInfo form={form} setFunction={setFunction} fields={['vin', 'autoNumber']} validationErrors={validationErrors}/>
      <Specifications setFunction={setFunction} validationErrors={validationErrors} fields={['brand']} form={form} data={{brands: autoBrands}}/>
      <Condition form={form} setFunction={setFunction} setForm={setForm} fields={['mileage', 'condition-car', 'vehiclePassport', 'vehiclePassportOwners', 'inspectionData']} validationErrors={validationErrors}/>
      <CarBody form={form} setFunction={setFunction}/>
      <Additional setForm={setForm} data={autoAdditional}/>
      <DPC form={form} setFunction={setFunction} setForm={setForm} validationErrors={validationErrors}/>
      <Button onClick={() => {submitForm()}}>Отправить</Button>
    </div>
  )
}
// {/* <div className={standart.title}>Место осмотра</div> */}
//   {/* <MapInput /> */}
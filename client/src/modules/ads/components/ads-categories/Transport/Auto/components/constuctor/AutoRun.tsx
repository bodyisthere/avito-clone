//импорт внешних пакетов
import { FC, useState, useEffect } from 'react'

//импорт стилей
import styles from '../Auto.module.scss'
import standart from '../../../../../../styles/ads.module.scss'

//импорт типов
import { carOld } from '../../../../../../../../types/ads/transportTypes'
import { additionalOptions } from '../../../../../../../../types/ads/transportTypes'

//импорт функционала
import { adsApi } from '../../../../../../../../store/api/adsApi'
import { carOldForm } from '../../form'
import { useAppSelector } from '../../../../../../../../hooks'

//импорт компонентов
import { Select, Button } from '../../../../../../../../UI'

import { Appereance } from '../fields/Appereance'
import { RegistrationInfo } from '../fields/RegistrationInfo'
import { Specifications } from '../fields/Specifications'
import { Condition } from '../fields/Condition'
import { Body } from '../fields/Body'
import { Additional } from '../fields/Additional'
import { DPC } from '../fields/DPC'
import { Type } from '../fields/Type'
import { Name } from '../fields/Name'

export const AutoRun: FC = () => {
  const [validationErrors, setValidationErrors] = useState<any>([]);
  const { category } = useAppSelector(state => state.adsReducer);
  
  const [postSend, {} ] = adsApi.useNewPostMutation();
  
  const [form, setForm] = useState<carOld>(carOldForm);


  const setFunction = (key: string, value: any) => {
    setForm((prev) => {
      return {
        ...prev, [key] : value
      } as carOld
    })
  } 

  useEffect(() => {
    setFunction('tags', category)
  }, [])
  
  const validateForms = () => {
    let errors = [];
    if(!form.name) errors.push('name')
    if(!form.type || form.type === '-Не выбрано-') errors.push('type')
    if(!form.governmentNumber) errors.push('governmentNumber')
    if(!form.condition) errors.push('condition')
    if(!form.mileage) errors.push('mileage')
    if(!form.photo) errors.push('photo')
    if(!form.color) errors.push('color')
    if(!form.VIN) errors.push('vin')
    if(!form.brand || form.brand === '-Не выбрано-') errors.push('brand')
    if(!form.vehiclePassport || form.vehiclePassport === '-') errors.push('vehiclePassport')
    if(!form.inspectionData) errors.push('inspectionData')
    if(!form.description) errors.push('description')
    if(!form.price) errors.push('price')
    if(errors.length > 0) {
      window.scrollTo(0, 0)
      setValidationErrors(errors);
      return true;
    }
    setValidationErrors([]);
    return false;
  }

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

  const submitForm = () => {
    const isErrors = validateForms();
    if(isErrors) return;
    const body = {
      ...form, 
      conditionBody: conditionBodyPretty(), 
      additionalOptions: additionalOptionsPretty()
    }
    postSend(body)
    .then(payload => {
      console.log(payload)
    })
  }


  return (
    <div className={styles["auto"]}>
      <Name setFunction={setFunction} form={form} validationErrors={validationErrors}/>
      <Type setFunction={setFunction} form={form} validationErrors={validationErrors} />
      <Appereance form={form} setFunction={setFunction} validationErrors={validationErrors}/>
      <RegistrationInfo form={form} setFunction={setFunction} fields={['VIN', 'AutoNumber']} validationErrors={validationErrors}/>
      <Specifications setFunction={setFunction} validationErrors={validationErrors}/>
      <Condition form={form} setFunction={setFunction} setForm={setForm} fields={['Mileage', 'Condition', 'VehiclePassport', 'VehiclePassportOwners', 'InspectionData']} validationErrors={validationErrors}/>
      <Body form={form} setFunction={setFunction}/>
      <Additional setForm={setForm}/>
      <DPC form={form} setFunction={setFunction} setForm={setForm} validationErrors={validationErrors}/>
      <Button onClick={() => {submitForm()}}>Отправить</Button>
    </div>
  )
}
// {/* <div className={standart.title}>Место осмотра</div> */}
//   {/* <MapInput /> */}
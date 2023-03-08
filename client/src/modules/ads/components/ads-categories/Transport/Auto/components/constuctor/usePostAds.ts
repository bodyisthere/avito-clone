import { FC, useState, useEffect } from 'react'

import { carOld } from '../../../../../../../../types/ads/transportTypes'
import { additionalOptions } from '../../../../../../../../types/ads/transportTypes'

import { adsApi } from '../../../../../../../../store/api/adsApi'
import { carOldForm } from '../../form'
import { useAppSelector } from '../../../../../../../../hooks'

export const usePostAds = () => {
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
}
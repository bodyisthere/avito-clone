//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей

//импорт типов
import { ISnowmobiles } from '../../../types/transport/Motorcycles/ISnowmobiles'

//импорт функционала
import { snowmobilesForm } from '../../../forms/Motorcycles/snowmobiles'
import { snowmobilesValidation } from '../../../validation/Motorcycles/snowmobilesValidation'
import { snowmobilesBrands, snowmobilesTypes } from '../../../data/Motorcycles/snowmobilesBrands'

//импорт компонентов
import { Name, RegistrationInfo, Appereance, Condition, DPC, Specifications } from '../../fields'
import { Button } from '../../../../../../../../UI'

export const Snowmobiles: FC = () => {
  const [form, setForm] = useState<ISnowmobiles>(snowmobilesForm);
  const [validationErrors, setValidationErrors] = useState<any>([]);

  const setFunction = (key: string, value: any) => {
    setForm((prev) => {
      return {
        ...prev, [key] : value
      } as ISnowmobiles
    })
  } 

  const submitForm = () => {
    setValidationErrors(snowmobilesValidation(form));
  }

  return (
    <>
      <Name 
        form={form} 
        setFunction={setFunction} 
        validationErrors={validationErrors}
      />
      <Appereance 
        form={form} 
        setFunction={setFunction} 
        validationErrors={validationErrors}
        fields={['photo', 'video']}
      />
      <RegistrationInfo 
        form={form} 
        setFunction={setFunction} 
        validationErrors={validationErrors} 
        fields={['vin']}
      />
      <Specifications 
        setFunction={setFunction} 
        validationErrors={validationErrors}
        form={form}
        fields={['brand','type','yearOfIssue', 'engineType', 'power', 'engineCapacity', 'numberOfCycles', 'maxPassengers', 'trackWidth']}
        data={{brands: snowmobilesBrands, type: snowmobilesTypes}}
      />
      <Condition 
        form={form} 
        setFunction={setFunction} 
        validationErrors={validationErrors} 
        fields={['condition', 'availability', 'mileage']}
        />
      <DPC 
        form={form} 
        setFunction={setFunction} 
        validationErrors={validationErrors} 
        setForm={setForm}
      />
      <Button onClick={() => submitForm()}>Отправить</Button>
    </>
  )
}
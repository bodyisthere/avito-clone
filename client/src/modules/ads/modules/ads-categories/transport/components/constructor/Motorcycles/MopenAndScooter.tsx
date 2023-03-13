//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей

//импорт типов
import { IMopenAndScooter } from '../../../types/transport/Motorcycles/IMopenAndScooter'

//импорт функционала
import { mopenAndScooterForm } from '../../../forms/Motorcycles/mopenAndScooter'
import { mopenAndScooterValidation } from '../../../validation/Motorcycles/mopenAndScooterValidation'
import { mopenAndScooterBrands } from '../../../data/Motorcycles/mopenAndScooterBrands'

//импорт компонентов
import { Name, RegistrationInfo, Appereance, Condition, DPC, Specifications } from '../../fields'
import { Button } from '../../../../../../../../UI'

export const MopenAndScooter: FC = () => {
  const [form, setForm] = useState<IMopenAndScooter>(mopenAndScooterForm);
  const [validationErrors, setValidationErrors] = useState<any>([]);

  const setFunction = (key: string, value: any) => {
    setForm((prev) => {
      return {
        ...prev, [key] : value
      } as IMopenAndScooter
    })
  } 

  const submitForm = () => {
    setValidationErrors(mopenAndScooterValidation(form));
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
        fields={['brand','type','yearOfIssue', 'engineType', 'power', 'engineCapacity', 'numberOfCycles', 'fuelSupply', 'transmission', 'cooling']}
        data={{brands: mopenAndScooterBrands, type: ['Скутер', 'Макси-скутер', 'Мопед', 'Минибайк']}}
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
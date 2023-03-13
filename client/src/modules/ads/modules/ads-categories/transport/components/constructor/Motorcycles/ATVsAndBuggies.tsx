//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей

//импорт типов
import { IATVsAndBuggies } from '../../../types/transport/Motorcycles/IATVsAndBuggies'

//импорт функционала
import { aTVsAndBuggiesForm } from '../../../forms/Motorcycles/aTVsAndBuggies'
import { aTVsAndBuggiesValidation } from '../../../validation/Motorcycles/aTVsAndBuggiesValidation'
import { aTVsAndBuggiesBrands, aTVsAndBuggiesTypes } from '../../../data/Motorcycles/aTVsAndBuggiesBrands'

//импорт компонентов
import { Name, RegistrationInfo, Appereance, Condition, DPC, Specifications } from '../../fields'
import { Button } from '../../../../../../../../UI'

export const ATVsAndBuggies: FC = () => {
  const [form, setForm] = useState<IATVsAndBuggies>(aTVsAndBuggiesForm);
  const [validationErrors, setValidationErrors] = useState<any>([]);

  const setFunction = (key: string, value: any) => {
    setForm((prev) => {
      return {
        ...prev, [key] : value
      } as IATVsAndBuggies
    })
  } 

  const submitForm = () => {
    setValidationErrors(aTVsAndBuggiesValidation(form));
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
        fields={['brand','type','yearOfIssue', 'engineType', 'power', 'engineCapacity', 'numberOfCycles', 'maxPassengers', 'fuelSupply', 'typeOfDrive']}
        data={{brands: aTVsAndBuggiesBrands, type: aTVsAndBuggiesTypes}}
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
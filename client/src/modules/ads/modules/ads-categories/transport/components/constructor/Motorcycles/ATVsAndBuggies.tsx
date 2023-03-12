//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей

//импорт типов
import { IATVsAndBuggies } from '../../../types/transport/Motorcycles/IATVsAndBuggies'

//импорт функционала
import { aTVsAndBuggiesForm } from '../../../forms/Motorcycles/aTVsAndBuggies'
import { aTVsAndBuggiesValidation } from '../../../validation/Motorcycles/aTVsAndBuggiesValidation'

//импорт компонентов
import { Name } from '../../fields/Name'
import { RegistrationInfo } from '../../fields/RegistrationInfo'
import { Button } from '../../../../../../../../UI'
import { Appereance } from '../../fields/Appereance'
import { ConditionMotorcycles } from '../../fields/ConditionMotorcycles'
import { DPC } from '../../fields/DPC'
import { SpecificationsMotorcycles } from '../../fields/SpecificationsMotorcycles'

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
        fields={['Photo', 'Video']}
      />
      <RegistrationInfo 
        form={form} 
        setFunction={setFunction} 
        validationErrors={validationErrors} 
        fields={['VIN']}
      />
      <SpecificationsMotorcycles 
        setFunction={setFunction} 
        validationErrors={validationErrors}
        form={form}
        fields={['brand','type','yearOfIssue', 'engineType', 'power', 'engineCapacity', 'numberOfCycles', 'maxPassengers', 'fuelSupply', 'typeOfDrive']}
      />
      <ConditionMotorcycles 
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
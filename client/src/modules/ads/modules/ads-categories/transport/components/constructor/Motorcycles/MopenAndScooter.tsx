//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей

//импорт типов
import { IMopenAndScooter } from '../../../types/transport/Motorcycles/IMopenAndScooter'

//импорт функционала
import { mopenAndScooterForm } from '../../../forms/Motorcycles/mopenAndScooter'
import { mopenAndScooterValidation } from '../../../validation/Motorcycles/mopenAndScooterValidation'

//импорт компонентов
import { Name } from '../../fields/Name'
import { RegistrationInfo } from '../../fields/RegistrationInfo'
import { Button } from '../../../../../../../../UI'
import { Appereance } from '../../fields/Appereance'
import { ConditionMotorcycles } from '../../fields/ConditionMotorcycles'
import { DPC } from '../../fields/DPC'
import { SpecificationsMotorcycles } from '../../fields/SpecificationsMotorcycles'

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
        fields={['brand','type','yearOfIssue', 'engineType', 'power', 'engineCapacity', 'numberOfCycles', 'fuelSupply', 'transmission', 'cooling']}
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
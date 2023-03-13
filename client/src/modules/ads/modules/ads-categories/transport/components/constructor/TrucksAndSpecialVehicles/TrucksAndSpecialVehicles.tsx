//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей

//импорт типов
import { ITrucksAndSpeicalVehicles } from '../../../types/transport/TrucksAndSpecialVehicles/ITrucksAndSpeicalVehicles'

//импорт функционала
import { trucksAndSpeicalVehiclesForm } from '../../../forms/TrucksAndSpecialVehicles/trucksAndSpecialVehicles'
import { trucksAndSpeicalVehiclesValidation } from '../../../validation/TrucksAndSpecialVehicles/trucksAndSpeicalVehiclesValidation'

//импорт компонентов
import { Name, RegistrationInfo, Appereance, Condition, DPC } from '../../fields'
import { Button } from '../../../../../../../../UI'

export const TrucksAndSpeicalVehicles: FC = () => {
  const [form, setForm] = useState<ITrucksAndSpeicalVehicles>(trucksAndSpeicalVehiclesForm);
  const [validationErrors, setValidationErrors] = useState<any>([]);

  const setFunction = (key: string, value: any) => {
    setForm((prev) => {
      return {
        ...prev, [key] : value
      } as ITrucksAndSpeicalVehicles
    })
  } 

  const submitForm = () => {
    setValidationErrors(trucksAndSpeicalVehiclesValidation(form));
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
      <Condition 
        form={form} 
        setFunction={setFunction} 
        validationErrors={validationErrors} 
        fields={['condition']}
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
//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей

//импорт типов
import { IMotorCycles } from '../../../types/transport/Motorcycles/IMotorcycles'

//импорт функционала
import { motorcyclesForm } from '../../../forms/Motorcycles/motorcycles'
import { motorcyclesValidation } from '../../../validation/Motorcycles/motorcyclesValidation'
import { motorcyclesBrands, motorcyclesTypes } from '../../../data/Motorcycles/motorcyclesBrands'

//импорт компонентов
import { Name, RegistrationInfo, Appereance, Condition, DPC, Specifications } from '../../fields'
import { Button } from '../../../../../../../../UI'

export const Motorcycles: FC = () => {
  const [form, setForm] = useState<IMotorCycles>(motorcyclesForm);
  const [validationErrors, setValidationErrors] = useState<any>([]);

  const setFunction = (key: string, value: any) => {
    setForm((prev) => {
      return {
        ...prev, [key] : value
      } as IMotorCycles
    })
  } 

  const submitForm = () => {
    setValidationErrors(motorcyclesValidation(form));
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
        fields={['brand','type','yearOfIssue', 'engineType', 'power', 'engineCapacity', 'numberOfCycles', 'fuelSupply', 'transmission', 'cooling', 'typeOfDrive', 'cylinderArrangement', 'numberOfCylinders']}
        data={{brands: motorcyclesBrands, type: motorcyclesTypes}}
      />
      <Condition 
        form={form} 
        setFunction={setFunction} 
        validationErrors={validationErrors} 
        fields={['condition', 'availability', 'mileage', 'vehiclePassportOwners', 'vehiclePassport']}
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
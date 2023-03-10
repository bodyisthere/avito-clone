//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей

//импорт типов
import { ISnowmobiles } from '../../../types/transport/Motorcycles/ISnowmobiles'

//импорт функционала
import { snowmobilesForm } from '../../../forms/Motorcycles/snowmobiles'
import { snowmobilesValidation } from '../../../validation/Motorcycles/snowmobilesValidation'

//импорт компонентов
import { Name } from '../../fields/Name'
import { RegistrationInfo } from '../../fields/RegistrationInfo'
import { Button } from '../../../../../../../../UI'
import { Appereance } from '../../fields/Appereance'
import { ConditionMotorcycles } from '../../fields/ConditionMotorcycles'
import { DPC } from '../../fields/DPC'
import { SpecificationsMotorcycles } from '../../fields/SpecificationsMotorcycles'

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
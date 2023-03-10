//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей

//импорт типов
import { IKarting } from '../../../types/transport/Motorcycles/IKarting'

//импорт функционала
import { kartingForm } from '../../../forms/Motorcycles/karting'
import { kartingValidation } from '../../../validation/Motorcycles/kartingValidation'

//импорт компонентов
import { Name } from '../../fields/Name'
import { RegistrationInfo } from '../../fields/RegistrationInfo'
import { Appereance } from '../../fields/Appereance'
import { ConditionMotorcycles } from '../../fields/ConditionMotorcycles'
import { DPC } from '../../fields/DPC'
import { Button } from '../../../../../../../../UI'

export const Karting: FC = () => {
  const [form, setForm] = useState<IKarting>(kartingForm);
  const [validationErrors, setValidationErrors] = useState<any>([]);

  const setFunction = (key: string, value: any) => {
    setForm((prev) => {
      return {
        ...prev, [key] : value
      } as IKarting
    })
  } 

  const submitForm = () => {
    setValidationErrors(kartingValidation(form));
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
      <ConditionMotorcycles 
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
//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей

//импорт типов
import { IKarting } from '../../../types/transport/Motorcycles/IKarting'

//импорт функционала
import { kartingForm } from '../../../forms/Motorcycles/karting'
import { kartingValidation } from '../../../validation/Motorcycles/kartingValidation'

//импорт компонентов
import { Name, RegistrationInfo, Appereance, Condition, DPC } from '../../fields'
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
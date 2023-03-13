//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей

//импорт типов
import { ISparePartsAndAcessories } from '../../../types/transport/SparePartsAndAcessories/ISparePartsAndAcessories'

//импорт функционала
import { sparePartsAndAcessoriesForm } from '../../../forms/SparePartsAndAcessories/sparePartsAndAcessories'
import { sparePartsAndAcessoriesValidation } from '../../../validation/SparePartsAndAcessories/sparePartsAndAcessoriesValidation'

//импорт компонентов
import { Name, Appereance, DPC } from '../../fields'
import { Button } from '../../../../../../../../UI'

export const SparePartsAndAcessories: FC = () => {
  const [form, setForm] = useState<ISparePartsAndAcessories>(sparePartsAndAcessoriesForm);
  const [validationErrors, setValidationErrors] = useState<any>([]);

  const setFunction = (key: string, value: any) => {
    setForm((prev) => {
      return {
        ...prev, [key] : value
      } as ISparePartsAndAcessories
    })
  } 

  const submitForm = () => {
    setValidationErrors(sparePartsAndAcessoriesValidation(form));
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
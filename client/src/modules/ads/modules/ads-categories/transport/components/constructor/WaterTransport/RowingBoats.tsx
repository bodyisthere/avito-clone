//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей

//импорт типов
import { IRowingBoats } from '../../../types/transport/WaterTransport/IRowingBoats'

//импорт функционала
import { rowingBoatsForm } from '../../../forms/WaterTransport/rowingBoats'
import { rowingBoatsValidation } from '../../../validation/WaterTransport/rowingBoatsValidation'

//импорт компонентов
import { Name, RegistrationInfo, Appereance, Condition, DPC } from '../../fields'
import { Button } from '../../../../../../../../UI'

export const RowingBoats: FC = () => {
  const [form, setForm] = useState<IRowingBoats>(rowingBoatsForm);
  const [validationErrors, setValidationErrors] = useState<any>([]);

  const setFunction = (key: string, value: any) => {
    setForm((prev) => {
      return {
        ...prev, [key] : value
      } as IRowingBoats
    })
  } 

  const submitForm = () => {
    setValidationErrors(rowingBoatsValidation(form));
  }

  return (
    <div></div>
  )
}
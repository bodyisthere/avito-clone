//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей

//импорт типов
import { IMotorboatsAndMotors } from '../../../types/transport/WaterTransport/IMotorboatsAndMotors'

//импорт функционала
import { motorboatsAndMotorsForm } from '../../../forms/WaterTransport/motorboatsAndMotors'
import { motorboatsAndMotorsValidation } from '../../../validation/WaterTransport/motorboatsAndMotors'

//импорт компонентов
import { Name, RegistrationInfo, Appereance, Condition, DPC } from '../../fields'
import { Button } from '../../../../../../../../UI'

export const MotorboatsAndMotors: FC = () => {
  const [form, setForm] = useState<IMotorboatsAndMotors>(motorboatsAndMotorsForm);
  const [validationErrors, setValidationErrors] = useState<any>([]);

  const setFunction = (key: string, value: any) => {
    setForm((prev) => {
      return {
        ...prev, [key] : value
      } as IMotorboatsAndMotors
    })
  } 

  const submitForm = () => {
    setValidationErrors(motorboatsAndMotorsValidation(form));
  }

  return (
    <div></div>
  )
}
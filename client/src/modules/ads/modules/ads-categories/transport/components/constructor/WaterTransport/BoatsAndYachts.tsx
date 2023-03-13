//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей

//импорт типов
import { IBoatsAndYachts } from '../../../types/transport/WaterTransport/IBoatsAndYachts'

//импорт функционала
import { boatsAndYachtsForm } from '../../../forms/WaterTransport/boatsAndYachts'
import { boatsAndYachtsValidation } from '../../../validation/WaterTransport/boatsAndYachtsValidation'

//импорт компонентов
import { Name, RegistrationInfo, Appereance, Condition, DPC } from '../../fields'
import { Button } from '../../../../../../../../UI'

export const BoatsAndYachts: FC = () => {
  const [form, setForm] = useState<IBoatsAndYachts>(boatsAndYachtsForm);
  const [validationErrors, setValidationErrors] = useState<any>([]);

  const setFunction = (key: string, value: any) => {
    setForm((prev) => {
      return {
        ...prev, [key] : value
      } as IBoatsAndYachts
    })
  } 

  const submitForm = () => {
    setValidationErrors(boatsAndYachtsValidation(form));
  }

  return (
    <div></div>
  )
}
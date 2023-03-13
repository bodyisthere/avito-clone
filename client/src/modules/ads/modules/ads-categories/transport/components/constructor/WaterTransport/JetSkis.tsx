//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей

//импорт типов
import { IJetSkis } from '../../../types/transport/WaterTransport/IJetSkis'

//импорт функционала
import { jetSkisForm } from '../../../forms/WaterTransport/jetSkis'
import { jetSkisValidation } from '../../../validation/WaterTransport/jetSkisValidation'

//импорт компонентов
import { Name, RegistrationInfo, Appereance, Condition, DPC } from '../../fields'
import { Button } from '../../../../../../../../UI'
import { useTransportAds } from '../../../hooks/useTransportAds'

export const JetSkis: FC = () => {
  const { setFunction, submitForm, validationErrors } = useTransportAds(jetSkisForm, jetSkisValidation)

  return (
    <div></div>
  )
}
//импорт внешних пакетов
import { FC, useState } from 'react'

//импорт стилей
import styles from './Auto.module.scss'

//импорт типов
import { car } from '../../../types/transportTypes'

//импорт функционала
import { adsApi } from '../../../../../../../../store/api/adsApi'
import { carNewForm } from '../../../forms/carNew'
import { carNewValidation } from '../../../validation/carNewValidation'

//импорт компонентов
import { Select, Button } from '../../../../../../../../UI'

import { Name } from '../../fields/Name'
import { Appereance } from '../../fields/Appereance'
import { RegistrationInfo } from '../../fields/RegistrationInfo'
import { Specifications } from '../../fields/Specifications'
import { Condition } from '../../fields/Condition'
import { Additional } from '../../fields/Additional'
import { DPC } from '../../fields/DPC'

export const AutoNew: FC = () => {
  const [ postSend, {} ] = adsApi.useNewPostMutation();

  const [form, setForm] = useState<car>(carNewForm);
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  const setFunction = (key: string, value: any) => {
    setForm((prev) => {
      return {
        ...prev, [key] : value
      } as car;
    })
  }

  const submitForm = () => {
    setValidationErrors(carNewValidation(form));
    const body = {
      ...form,
      additionalOptions: '',
    };
    postSend(body)
    .then((payload: any) => console.log(payload))
  }

  return (
    <div className={styles.auto}>
      <Name form={form} setFunction={setFunction} validationErrors={validationErrors}/>
      <Appereance form={form} setFunction={setFunction} validationErrors={validationErrors}/>
      <RegistrationInfo form={form} setFunction={setFunction} fields={['VIN']} validationErrors={validationErrors}/>
      <Specifications setFunction={setFunction} validationErrors={validationErrors}/>
      <Condition 
        form={form} 
        setFunction={setFunction} 
        setForm={setForm}
        fields={['VehiclePassport', 'InspectionData']}
        validationErrors={validationErrors}
      />
      <Additional setForm={setForm}/>
      <DPC form={form} setFunction={setFunction} setForm={setForm} validationErrors={validationErrors}/>
      <Button onClick={() => submitForm()}>check</Button>
    </div>
  )
}
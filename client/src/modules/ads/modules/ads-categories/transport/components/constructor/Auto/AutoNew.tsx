//импорт внешних пакетов
import { FC, useState } from 'react'

//импорт стилей
import styles from './Auto.module.scss'

//импорт типов
import { car } from '../../../types/transport/Auto/ICarNew'

//импорт функционала
import { adsApi } from '../../../../../../../../store/api/adsApi'
import { carNewForm } from '../../../forms/Auto/carNew'
import { carNewValidation } from '../../../validation/Auto/carNewValidation'
import { autoAdditional } from '../../../data/Auto/autoAdditional'
import { autoBrands } from '../../../data/Auto/autoBrands'
import { useTransportAds } from '../../../hooks/useTransportAds'

//импорт компонентов
import { Select, Button } from '../../../../../../../../UI'
import { 
  Name, Appereance, RegistrationInfo, 
  Specifications, Condition, Additional, 
  DPC 
} from '../../fields'

export const AutoNew: FC = () => {
  const [ postSend, {} ] = adsApi.useNewPostMutation();

  const { setFunction, submitForm, validationErrors, form, setForm } = useTransportAds(carNewForm, carNewValidation);

  return (
    <div className={styles.auto}>
      <Name form={form} setFunction={setFunction} validationErrors={validationErrors}/>
      <Appereance form={form} setFunction={setFunction} validationErrors={validationErrors} fields={['color', 'photo', 'video']}/>
      <RegistrationInfo form={form} setFunction={setFunction} fields={['vin']} validationErrors={validationErrors}/>
      <Specifications setFunction={setFunction} validationErrors={validationErrors} fields={['brand']} form={form} data={{brands: autoBrands}}/>
      <Condition 
        form={form} 
        setFunction={setFunction} 
        setForm={setForm}
        fields={['vehiclePassport', 'inspectionData']}
        validationErrors={validationErrors}
      />
      <Additional setForm={setForm} data={autoAdditional}/>
      <DPC form={form} setFunction={setFunction} setForm={setForm} validationErrors={validationErrors}/>
      <Button onClick={() => submitForm()}>check</Button>
    </div>
  )
}
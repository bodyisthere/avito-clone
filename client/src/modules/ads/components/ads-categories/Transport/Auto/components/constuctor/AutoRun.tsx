//импорт внешних пакетов
import { FC, useState } from 'react'

//импорт стилей
import styles from '../Auto.module.scss'
import standart from '../../../../../../styles/ads.module.scss'

//импорт типов
import { carOld } from '../../../../../../../../types/ads/transportTypes'

//импорт функционала
import { adsApi } from '../../../../../../../../store/api/adsApi'
import { carOldForm } from '../../form'

//импорт компонентов
import { Select, Button } from '../../../../../../../../UI'

import { Appereance } from '../fields/Appereance'
import { RegistrationInfo } from '../fields/RegistrationInfo'
import { Specifications } from '../fields/Specifications'
import { Condition } from '../fields/Condition'
import { Body } from '../fields/Body'
import { Additional } from '../fields/Additional'
import { DPC } from '../fields/DPC'
import { Type } from '../fields/Type'

export const AutoRun: FC = () => {
  const [validationError, setValidationError] = useState<any>([]);
  
  const [postSend, {} ] = adsApi.useNewPostMutation();
  
  const [form, setForm] = useState<carOld>(carOldForm);

  const setFunction = (key: string, value: any) => {
    setForm((prev) => {
      return {
        ...prev, [key] : value
      } as carOld
    })
  } 

  const submitForm = () => {
    let key: keyof carOld;
    for(key in form) {
      const k = key;
      if(form[key] === undefined) setValidationError((prev: any) => {
        return [...prev, k];
      })
    }

    // postSend(form);
  }

  return (
    <div className={styles["auto"]}>
      <Type setFunction={setFunction}/>
      <Appereance form={form} setFunction={setFunction} />
      <RegistrationInfo form={form} setFunction={setFunction} />
      <Specifications setFunction={setFunction} />
      <Condition form={form} setFunction={setFunction} setForm={setForm}/>
      <Body form={form} setFunction={setFunction}/>
      <Additional setForm={setForm}/>
      <DPC form={form} setFunction={setFunction} setForm={setForm}/>
    </div>
  )
}
// {/* <div className={standart.title}>Место осмотра</div> */}
//   {/* <MapInput /> */}
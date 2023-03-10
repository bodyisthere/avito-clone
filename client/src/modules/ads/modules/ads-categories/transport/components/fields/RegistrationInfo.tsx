//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей
import standart from '../../../../../styles/ads.module.scss'
import styles from '../constructor/Auto/Auto.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов
import { InputText } from '../../../../../../../UI'
import { AutoNumber, Tip } from '../../../../../UI'

interface IRegistrationInfo {
  form: any
  setFunction: any
  fields: Array<'autoNumber' | 'vin'>
  validationErrors: string[]
}

export const RegistrationInfo: FC<IRegistrationInfo> = ( { setFunction, form, fields, validationErrors } ) => {
  const [isTip, setIsTip] = useState<boolean>(false);

  return (
    <>
    <div className={standart.title}>Регистрационные данные</div>
      {
        fields.includes('vin') &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>VIN или номер кузова</label>
            <div className={styles["auto__tip"]} onClick={() => setIsTip(!isTip)}>
              ?
              {isTip 
                ? 
                <Tip setIsTipOpen={setIsTip} type='VIN(номер кузова)'/>
                : 
                ''
              }
            </div>
          </div>
          <div className={standart["item-right"]}>
            <InputText 
              className={'auto__input'} 
              clearInput={() => setFunction('VIN', null)}
              onChange={e => setFunction('VIN', e.target.value)} 
              value={form.VIN} 
              />
            <span style={{'color':'gray'}}>Покупатели не увидят ваш VIN и госномер</span>
          </div>
        </div>
      }
      {
        fields.includes('autoNumber') && 
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Государственный номер</label>
          </div>
          <div className={standart["item-right"]}>
              <AutoNumber autoNumber={form.governmentNumber} setOption={setFunction} optionKey='governmentNumber'/>
              {validationErrors.includes('governmentNumber') && <span className={standart['error-text']}><br/>Укажите гос.номер</span>}
          </div>
        </div>
      }
    </>
  )
}
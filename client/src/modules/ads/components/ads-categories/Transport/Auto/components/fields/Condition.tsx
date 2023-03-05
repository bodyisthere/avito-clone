//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей
import standart from '../../../../../../styles/ads.module.scss'
import styles from '../Auto.module.scss'

//импорт типов

//импорт функционала
import { inspectionData } from '../../../../../../data/transportData'

//импорт компонентов
import { CarMileage, RadioButtonsChoose, CheckboxList, Tip } from '../../../../../ads-ui'
import { Select } from '../../../../../../../../UI'

interface ICondition {
  form: any
  setFunction: any
  setForm: any
}

export const Condition: FC<ICondition> = ( { form, setFunction, setForm } ) => {
  const [isFirtTip, setIsFirstTip] = useState<boolean>(false);
  const [isSecondTip, setIsSecondTip] = useState<boolean>(false);

  const inspectionDataCheckbox = (el: any) => {
    setForm((prev: any) => {
      if(!prev.inspectionData) {
        prev.inspectionData = [el];
        return prev;
      }
      if(prev.inspectionData?.includes(el)) {
        prev.inspectionData = prev.inspectionData?.filter((e: any) => e !== el);
        return prev;
      } else {
        prev.inspectionData[prev.inspectionData.length] = el;
        return prev;
      }
    })
  }
  
  return (
    <>
      <div className={standart.title}>История эксплаутации и состояние</div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Пробег</label>
        </div>
        <div className={standart["item-right"]}>
          <CarMileage carMileage={form.mileage} setOption={setFunction} optionKey={'mileage'}/>
        </div>
      </div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Состояние</label>
          <div className={styles["auto__tip"]} onClick={() => setIsFirstTip(!isFirtTip)}>
            ?
            {
              isFirtTip 
              ? 
              <Tip setIsTipOpen={setIsFirstTip} type='Состояние машины'/>
              : 
              ''
            }
          </div>
        </div>
        <div className={standart["item-right"]}>
          <RadioButtonsChoose data={['Не битый', 'Битый']} value={form.condition} setOption={setFunction} optionKey={'condition'}/>
        </div>
      </div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>ПТС</label>
          <div className={styles["auto__tip"]} onClick={() => setIsSecondTip(!isSecondTip)}>
            ?
            {isSecondTip 
              ? 
              <Tip setIsTipOpen={setIsSecondTip} type='ПТС машины'/>
              : 
              ''
            }
          </div>
        </div>
        <div className={standart["item-right"]}>
          <Select options={['-','Оригинал','Дубликат','Электронный']} onChange={(e: any) => setFunction('vehIConditionlePassport', e)} ></Select>
        </div>
      </div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Владельцев по ПТС</label>
        </div>
        <div className={standart["item-right"]}>
          <RadioButtonsChoose data={['1', '2', '3', '4+']} optionKey='vehIConditionlePassportOwners' setOption={setFunction} value={form.vehIConditionlePassportOwners}/>
        </div>
      </div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Данные о ТО</label>
        </div>
        <div className={standart["item-right"]}>
          <CheckboxList 
            data={{title: null, data: inspectionData}} 
            changeFunction={inspectionDataCheckbox}
            />
        </div>
      </div>
    </>
  )
}
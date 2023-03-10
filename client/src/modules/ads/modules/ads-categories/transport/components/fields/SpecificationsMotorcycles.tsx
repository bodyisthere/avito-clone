//импорт внешних пакетов
import React, { FC } from 'react'

//импорт стилей
import standart from '../../../../../styles/ads.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов
import { Select } from '../../../../../../../UI'
import { RadioButtonsChoose } from '../../../../../UI'
import { InputNumberAds } from '../../../../../UI/InputNumberAds/InputNumberAds'

interface ISpecificationsMotorcycles {
  setFunction: any
  validationErrors: string[]
  form: any
}

export const SpecificationsMotorcycles: FC<ISpecificationsMotorcycles> = ( { setFunction, validationErrors, form } ) => {

  const genNumbers = () => {
    let result = [];
    for(let i = 1905; i <= 2023; i++) {
      result.push(`${i}`)
    }
    return result;
  }

  return (
    <>
      <div className={standart.title}>Технические характеристики</div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Марка*</label>
        </div>
        <div className={standart["item-right"]}>
          <Select options={['-Не выбрано-']} onChange={(e: any) => setFunction('brand', e)}/>
          {validationErrors.includes('brand') && <span className={standart['error-text']}><br/>Укажите марку авто</span>}
        </div>
      </div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Тип*</label>
        </div>
        <div className={standart["item-right"]}>
          <Select options={['-Не выбрано-', 'Утилитарный', 'Спортивный или горный', 'Туристический', 'Детский', 'Мотобуксировщик']} onChange={(e: any) => setFunction('type', e)}/>
          {validationErrors.includes('type') && <span className={standart['error-text']}><br/>Укажите тип</span>}
        </div>
      </div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Год выпуска*</label>
        </div>
        <div className={standart["item-right"]}>
          <Select options={['-Не выбрано-', ...genNumbers()]} onChange={(e: any) => setFunction('yearOfIssue', e)}/>
          {validationErrors.includes('yearOfIssue') && <span className={standart['error-text']}><br/>Укажите год выпуска</span>}
        </div>
      </div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Тип двигателя*</label>
        </div>
        <div className={standart["item-right"]}>
          <RadioButtonsChoose data={['Бензин', 'Электро']} optionKey={'engineType'} setOption={setFunction} value={form.engineType}/>
          {validationErrors.includes('engineType') && <span className={standart['error-text']}><br/>Укажите тип двигателя</span>}
        </div>
      </div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Мощность*</label>
        </div>
        <div className={standart["item-right"]}>
          <InputNumberAds value={form.power} setFunction={setFunction} placeholder={'л.с.'} optionKey={'power'}/>
          {validationErrors.includes('power') && <span className={standart['error-text']}><br/>Укажите мощность</span>}
        </div>
      </div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Объём двигателя*</label>
        </div>
        <div className={standart["item-right"]}>
          <InputNumberAds value={form.engineCapacity} setFunction={setFunction} placeholder={'см³'} optionKey={'engineCapacity'}/>
          {validationErrors.includes('engineCapacity') && <span className={standart['error-text']}><br/>Укажите объём</span>}
        </div>
      </div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Число тактов*</label>
        </div>
        <div className={standart["item-right"]}>
          <RadioButtonsChoose data={['2', '4']} optionKey={'numberOfCycles'} setOption={setFunction} value={form.numberOfCycles}/>
          {validationErrors.includes('numberOfCycles') && <span className={standart['error-text']}><br/>Укажите число тактов</span>}
        </div>
      </div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Максимально пассажиров*</label>
        </div>
        <div className={standart["item-right"]}>
          <InputNumberAds value={form.maxPassengers} setFunction={setFunction} placeholder={'чел.'} optionKey={'maxPassengers'}/>
          {validationErrors.includes('maxPassengers') && <span className={standart['error-text']}><br/>Укажите макс. пассажиров</span>}
        </div>
      </div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Ширина гусеницы*</label>
        </div>
        <div className={standart["item-right"]}>
          <InputNumberAds value={form.trackWidth} setFunction={setFunction} placeholder={'мм'} optionKey={'trackWidth'}/>
          {validationErrors.includes('trackWidth') && <span className={standart['error-text']}><br/>Укажите ширину гусеницы</span>}
        </div>
      </div>
    </>
  )
}
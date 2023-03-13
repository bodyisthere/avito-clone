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

interface ISpecifications {
  form: any
  setFunction: any
  validationErrors: string[]
  fields: Array<
    'brand' | 'type' | 'yearOfIssue' |
    'engineType' | 'power' | 'engineCapacity' | 
    'fuelSupply' | 'typeOfDrive' | 'numberOfCycles' | 
    'maxPassengers' | 'loadCapacity' | 'trackWidth' | 
    'cooling' | 'transmission' | 'cylinderArrangement' |
    'numberOfCylinders'>
  data?: {
    brands?: string[]
    type?: string[]
  }
}

export const Specifications: FC<ISpecifications> = ( { setFunction, validationErrors, fields, form, data } ) => {
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
      {
        fields.includes('brand')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Марка*</label>
          </div>
          <div className={standart["item-right"]}>
            {
              data?.brands
              &&
              <Select options={['-Не выбрано-',...data.brands]} onChange={(e: any) => setFunction('brand', e)}/>
            }
          {validationErrors.includes('brand') && <span className={standart['error-text']}><br/>Укажите марку авто</span>}
          </div>
        </div>
      }
      {
        fields.includes('type')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Тип*</label>
          </div>
          <div className={standart["item-right"]}>
            {
              data?.type
              &&
              <Select options={['-Не выбрано-', ...data?.type]} onChange={(e: any) => setFunction('type', e)}/>
            }
            {validationErrors.includes('type') && <span className={standart['error-text']}><br/>Укажите тип</span>}
          </div>
        </div>
      }
      {
        fields.includes('yearOfIssue')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Год выпуска*</label>
          </div>
          <div className={standart["item-right"]}>
            <Select options={['-Не выбрано-', ...genNumbers()]} onChange={(e: any) => setFunction('yearOfIssue', e)}/>
            {validationErrors.includes('yearOfIssue') && <span className={standart['error-text']}><br/>Укажите год выпуска</span>}
          </div>
        </div>
      }
      {
        fields.includes('engineType')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Тип двигателя</label>
          </div>
          <div className={standart["item-right"]}>
            <RadioButtonsChoose data={['Бензин', 'Электро']} optionKey={'engineType'} setOption={setFunction} value={form.engineType}/>
          </div>
        </div>
      }
      {
        fields.includes('power')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Мощность*</label>
          </div>
          <div className={standart["item-right"]}>
            <InputNumberAds value={form.power} setFunction={setFunction} placeholder={'л.с.'} optionKey={'power'}/>
            {validationErrors.includes('power') && <span className={standart['error-text']}><br/>Укажите мощность</span>}
          </div>
        </div>
      }
      {
        fields.includes('engineCapacity')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Объём двигателя*</label>
          </div>
          <div className={standart["item-right"]}>
            <InputNumberAds value={form.engineCapacity} setFunction={setFunction} placeholder={'см³'} optionKey={'engineCapacity'}/>
            {validationErrors.includes('engineCapacity') && <span className={standart['error-text']}><br/>Укажите объём</span>}
          </div>
        </div>
      }
      {
        fields.includes('fuelSupply')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Подача топлива</label>
          </div>
          <div className={standart["item-right"]}>
          <RadioButtonsChoose data={['Карбюратор', 'Инжектор']} optionKey={'fuelSupply'} setOption={setFunction} value={form.fuelSupply}/>
          </div>
      </div>
      }
      {
        fields.includes('typeOfDrive')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Тип привода</label>
          </div>
          <div className={standart["item-right"]}>
          <RadioButtonsChoose data={['Цепь', 'Ремень', 'Кардан']} optionKey={'typeOfDrive'} setOption={setFunction} value={form.typeOfDrive}/>
          </div>
        </div>
      }
      {
        fields.includes('numberOfCycles')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Число тактов</label>
          </div>
          <div className={standart["item-right"]}>
            <RadioButtonsChoose data={['2', '4']} optionKey={'numberOfCycles'} setOption={setFunction} value={form.numberOfCycles}/>
          </div>
        </div>
      }
      {
        fields.includes('maxPassengers')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Максимально пассажиров*</label>
          </div>
          <div className={standart["item-right"]}>
            <InputNumberAds value={form.maxPassengers} setFunction={setFunction} placeholder={'чел.'} optionKey={'maxPassengers'}/>
            {validationErrors.includes('maxPassengers') && <span className={standart['error-text']}><br/>Укажите макс. пассажиров</span>}
          </div>
        </div>
      }
      {
        fields.includes('loadCapacity')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Грузоподъёмность*</label>
          </div>
          <div className={standart["item-right"]}>
            <InputNumberAds value={form.loadCapacity} setFunction={setFunction} placeholder={'кг.'} optionKey={'loadCapacity'}/>
          </div>
        </div>
      }
      {
        fields.includes('trackWidth')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Ширина гусеницы*</label>
          </div>
          <div className={standart["item-right"]}>
            <InputNumberAds value={form.trackWidth} setFunction={setFunction} placeholder={'мм'} optionKey={'trackWidth'}/>
            {validationErrors.includes('trackWidth') && <span className={standart['error-text']}><br/>Укажите ширину гусеницы</span>}
          </div>
        </div>
      }
      {
        fields.includes('cooling')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Охлаждение</label>
          </div>
          <div className={standart["item-right"]}>
            <RadioButtonsChoose data={['Воздушное', 'Жидкостное']} optionKey={'cooling'} setOption={setFunction} value={form.cooling}/>
            {validationErrors.includes('cooling') && <span className={standart['error-text']}><br/>Укажите охлаждение</span>}
          </div>
        </div>
      }
      {
        fields.includes('transmission')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Коробка передач</label>
          </div>
          <div className={standart["item-right"]}>
            <RadioButtonsChoose data={['Механика', 'Автомат', 'Робот', 'Вариатор']} optionKey={'transmission'} setOption={setFunction} value={form.transmission}/>
            {validationErrors.includes('transmission') && <span className={standart['error-text']}><br/>Укажите коробку</span>}
          </div>
        </div>
      }
      {
        fields.includes('cylinderArrangement')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Расположение цилиндров</label>
          </div>
          <div className={standart["item-right"]}>
            <RadioButtonsChoose data={['V-образное', 'Оппозитное', 'Рядное']} optionKey={'cylinderArrangement'} setOption={setFunction} value={form.cylinderArrangement}/>
          </div>
        </div>
      }
      {
        fields.includes('numberOfCylinders')
        &&
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Количество цилиндров</label>
          </div>
          <div className={standart["item-right"]}>
            <RadioButtonsChoose data={['1', '2', '3', '4', '5', '6']} optionKey={'numberOfCylinders'} setOption={setFunction} value={form.numberOfCylinders}/>
          </div>
        </div>
      }
    </>
  )
}
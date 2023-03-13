//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей

//импорт типов
import { IAllTerrainVehicle } from '../../../types/transport/Motorcycles/IAllTerrainVehicle'

//импорт функционала
import { allTerainVehicleForm } from '../../../forms/Motorcycles/allTerrainVehicle'
import { allTerrainVehicleValidation } from '../../../validation/Motorcycles/allTerrainVehicleValidation'

//импорт компонентов
import { Name, RegistrationInfo, Appereance, Condition, DPC, Specifications } from '../../fields'
import { Button } from '../../../../../../../../UI'
import { allTerrainVehicleBrands } from '../../../data/Motorcycles/allTerrainVehicleBrands'

export const AllTerrainVehicle: FC = () => {
  const [form, setForm] = useState<IAllTerrainVehicle>(allTerainVehicleForm);
  const [validationErrors, setValidationErrors] = useState<any>([]);

  const setFunction = (key: string, value: any) => {
    setForm((prev) => {
      return {
        ...prev, [key] : value
      } as IAllTerrainVehicle
    })
  } 

  const submitForm = () => {
    setValidationErrors(allTerrainVehicleValidation(form));
  }

  return (
    <>
      <Name 
        form={form} 
        setFunction={setFunction} 
        validationErrors={validationErrors}
      />
      <Appereance 
        form={form} 
        setFunction={setFunction} 
        validationErrors={validationErrors}
        fields={['photo', 'video']}
      />
      <RegistrationInfo 
        form={form} 
        setFunction={setFunction} 
        validationErrors={validationErrors} 
        fields={['vin']}
      />
      <Specifications 
        setFunction={setFunction} 
        validationErrors={validationErrors}
        form={form}
        data={{brands: allTerrainVehicleBrands, type: ['Гусеничный', 'Колёсный', 'Самодельный']}}
        fields={['brand','type','yearOfIssue', 'engineType', 'power', 'engineCapacity', 'numberOfCycles', 'maxPassengers', 'fuelSupply', 'typeOfDrive', 'loadCapacity']
      }
      />
      <Condition 
        form={form} 
        setFunction={setFunction} 
        validationErrors={validationErrors} 
        fields={['condition', 'availability', 'mileage']}
        />
      <DPC 
        form={form} 
        setFunction={setFunction} 
        validationErrors={validationErrors} 
        setForm={setForm}
      />
      <Button onClick={() => submitForm()}>Отправить</Button>
    </>
  )
}
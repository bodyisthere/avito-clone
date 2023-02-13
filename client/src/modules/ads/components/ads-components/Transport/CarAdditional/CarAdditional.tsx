import React, { FC } from 'react'

import { checkboxActiveSafety, checkboxAirBags, checkboxAntiThiefSystem, checkboxAudioSystem, checkboxClimatControl, checkboxDrivingAssistance, checkboxElectricDrive, checkboxHeadlights, checkboxHeating, checkboxMultimedia, checkboxSalon, checkboxSettingsMemory, checkboxTiresWheels, selectAudioSystem, selectClimatControl, selectHeadlights, selectPowerSteering, selectPowerWindows, selectSalon, selectTiresWheels } from '../../../../data/transportData'
import { carOld } from '../../../../types/transportTypes'

import { Select } from '../../../../../../UI'
import { CheckboxList } from '../../../ads-ui'

interface ICarAdditional {
  setForm: React.Dispatch<React.SetStateAction<carOld>>
}

export const CarAdditional: FC<ICarAdditional> = ( { setForm }) => {

  const setAdditionalSelect = (e: any, key: 'powerSteering' | 'powerWindows') => {
    setForm(prev => {
      prev.additionalOptions[key] = e; 
      return prev;
    }) 
  }

  const setAdditionalCheckbox = (e: string, key: 'heating' | 'settingsMemory' | 'airbags' | 'drivingAssistance' | 'activeSafety' | 'electricDrive' | 'antiThiefSystem' | 'multimedia') => {
    setForm(prev => {
      const prevData = prev.additionalOptions[key];
      if(prevData === null) {
        prev.additionalOptions[key] = [e];
      }
      if(prevData?.includes(e)) {
        prev.additionalOptions[key] = prevData.filter(el => el !== e)
      } else {
        prev.additionalOptions[key] = prevData ? [...prevData, e] : [e]
      }
      return prev;
    })
  }

  const setAdditionalSelectCheckbox = (e: string, key: "climatControl" | "salon" | "audioSystem" | "headlights" | "tiresWheels", type: "checkbox" | "select") => {
    if(type === "select") {
      setForm(prev => {
        prev.additionalOptions[key].select = e;
        return prev;
      })
      return;
    }
    if(type === "checkbox") {
      setForm(prev => {
        const prevData = prev.additionalOptions[key].checkbox
        if(prevData === null) {
          prev.additionalOptions[key].checkbox = [e];
          return prev;
        } 
        if(prevData?.includes(e)) {
          prev.additionalOptions[key].checkbox = prevData.filter(el => el !== e)
        } else {
          prev.additionalOptions[key].checkbox = prevData ? [...prevData, e] : [e]
        }
        return prev
      })
    }
  }

  return (
    <div className="new-category-ads__additional">
          <div className="new-category-ads__additional-item">
            <div className="new-category-ads__additional-title">Усилитель руля</div>
            <Select 
              onChange={(e: any) => setAdditionalSelect(e, 'powerSteering')} 
              options={selectPowerSteering}
            />
          </div>
          <div className="new-category-ads__additional-item">
            <div className="new-category-ads__additional-title">Управление климатом</div>
            <Select 
              onChange={(e: string) => setAdditionalSelectCheckbox(e, "climatControl", "select")} 
              options={selectClimatControl}
            />
            <CheckboxList 
              data={checkboxClimatControl}
              changeFunction={(e: string) => setAdditionalSelectCheckbox(e, "climatControl", "checkbox")} 
            />
          </div>
          <div className="new-category-ads__additional-item">
            <div className="new-category-ads__additional-title">Салон</div>
            <Select 
              onChange={(e: string) => setAdditionalSelectCheckbox(e, "salon", "select")} 
              options={selectSalon}
            />
            <CheckboxList 
              data={checkboxSalon} 
              changeFunction={(e: string) => setAdditionalSelectCheckbox(e, "salon", "checkbox")} 
            />
          </div>
          <div className="new-category-ads__additional-item">
            <div className="new-category-ads__additional-title">Обогрев</div>
            <CheckboxList 
              data={checkboxHeating}
              changeFunction = {(e: string) => setAdditionalCheckbox(e, 'heating')}
            />
          </div>
          <div className="new-category-ads__additional-item">
            <div className="new-category-ads__additional-title">Электростеклоподъемники</div>
            <Select 
              onChange={(e: any) => setAdditionalSelect(e, 'powerWindows')} 
              options={selectPowerWindows}
            />
          </div>
          <div className="new-category-ads__additional-item">
            <div className="new-category-ads__additional-title">Электропривод</div>
            <CheckboxList 
              data={checkboxElectricDrive} 
              changeFunction = {(e: string) => setAdditionalCheckbox(e, 'electricDrive')}
            />
          </div>
          <div className="new-category-ads__additional-item">
            <div className="new-category-ads__additional-title">Память настроек</div>
            <CheckboxList 
              data={checkboxSettingsMemory} 
              changeFunction = {(e: string) => setAdditionalCheckbox(e, 'settingsMemory')}
            />
          </div>
          <div className="new-category-ads__additional-item">
            <div className="new-category-ads__additional-title">Помощь при вождении</div>
            <CheckboxList 
              data={checkboxDrivingAssistance} 
              changeFunction = {(e: string) => setAdditionalCheckbox(e, 'drivingAssistance')}
            />
          </div>
          <div className="new-category-ads__additional-item">
            <div className="new-category-ads__additional-title">Противоугонная система</div>
            <CheckboxList 
              data={checkboxAntiThiefSystem} 
              changeFunction = {(e: string) => setAdditionalCheckbox(e, 'antiThiefSystem')}
            />
          </div>
          <div className="new-category-ads__additional-item">
            <div className="new-category-ads__additional-title">Подушки безопасности</div>
            <CheckboxList 
              data={checkboxAirBags} 
              changeFunction = {(e: string) => setAdditionalCheckbox(e, 'airbags')}
            />
          </div>
          <div className="new-category-ads__additional-item">
            <div className="new-category-ads__additional-title">Активная безопасность</div>
            <CheckboxList 
              data={checkboxActiveSafety} 
              changeFunction = {(e: string) => setAdditionalCheckbox(e, 'activeSafety')}
            />
          </div>
          <div className="new-category-ads__additional-item">
            <div className="new-category-ads__additional-title">Мультимедиа и навигация</div>
            <CheckboxList 
              data={checkboxMultimedia} 
              changeFunction = {(e: string) => setAdditionalCheckbox(e, 'multimedia')}
            />
          </div>
          <div className="new-category-ads__additional-item">
            <div className="new-category-ads__additional-title">Аудиосистема</div>
            <Select 
              onChange={(e: string) => setAdditionalSelectCheckbox(e, "audioSystem", "select")} 
              options={selectAudioSystem}
            />
            <CheckboxList 
              data={checkboxAudioSystem} 
              changeFunction={(e: string) => setAdditionalSelectCheckbox(e, "audioSystem", "checkbox")} 
            />
          </div>
          <div className="new-category-ads__additional-item">
            <div className="new-category-ads__additional-title">Фары</div>
            <Select 
              onChange={(e: string) => setAdditionalSelectCheckbox(e, "headlights", "select")} 
              options={selectHeadlights}
            />
            <CheckboxList 
              data={checkboxHeadlights} 
              changeFunction={(e: string) => setAdditionalSelectCheckbox(e, "headlights", "checkbox")} 
            />
          </div>
          <div className="new-category-ads__additional-item">
            <div className="new-category-ads__additional-title">Шины и диски</div>
            <Select 
              options={selectTiresWheels}
              onChange={(e: string) => setAdditionalSelectCheckbox(e, "tiresWheels", "select")}  
            />
            <CheckboxList 
              data={checkboxTiresWheels} 
              changeFunction={(e: string) => setAdditionalSelectCheckbox(e, "tiresWheels", "checkbox")} 
            />
          </div>
        </div>
  )
}
//импорт внешних пакетов
import React, { FC } from 'react'

//импорт стилей
import standart from '../../../../../../styles/ads.module.scss'
import styles from '../Auto.module.scss'

//импорт типов
import { carOld, car } from '../../../../../../../../types/ads/transportTypes'

//импорт функционала
import { checkboxActiveSafety, checkboxAirBags, checkboxAntiThiefSystem, checkboxAudioSystem, checkboxClimatControl, checkboxDrivingAssistance, checkboxElectricDrive, checkboxHeadlights, checkboxHeating, checkboxMultimedia, checkboxSalon, checkboxSettingsMemory, checkboxTiresWheels, selectAudioSystem, selectClimatControl, selectHeadlights, selectPowerSteering, selectPowerWindows, selectSalon, selectTiresWheels } from '../../../../../../data/transportData'

//импорт компонентов
import { Select } from '../../../../../../../../UI'
import { CheckboxList } from '../../../../../ads-ui'

interface IAdditional {
  setForm: any
}

export const Additional: FC<IAdditional> = ( { setForm } ) => {
  const setAdditionalSelect = (e: any, key: 'powerSteering' | 'powerWindows') => {
    setForm((prev: carOld) => {
      prev.additionalOptions[key] = e; 
      return prev;
    }) 
  }

  const setAdditionalCheckbox = (e: string, key: 'heating' | 'settingsMemory' | 'airbags' | 'drivingAssistance' | 'activeSafety' | 'electricDrive' | 'antiThiefSystem' | 'multimedia') => {
    setForm((prev: carOld) => {
      const prevData = prev.additionalOptions[key];
      if(prevData === null) {
        prev.additionalOptions[key] = [e];
      }
      if(prevData?.includes(e)) {
        prev.additionalOptions[key] = prevData.filter((el: any) => el !== e)
      } else {
        prev.additionalOptions[key] = prevData ? [...prevData, e] : [e]
      }
      return prev;
    })
  }

  const setAdditionalSelectCheckbox = (e: string, key: "climatControl" | "salon" | "audioSystem" | "headlights" | "tiresWheels", type: "checkbox" | "select") => {
    if(type === "select") {
      setForm((prev: carOld) => {
        prev.additionalOptions[key].select = e;
        return prev;
      })
      return;
    }
    if(type === "checkbox") {
      setForm((prev: carOld) => {
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
    <>
      <div className={standart.title}>Дополнительные опции</div>
      <div className={standart.item}>
        <div className={styles.additional}>
        <div className={styles["additional-item"]}>
          <div className={styles["additional-title"]}>Усилитель руля</div>
          <Select 
            onChange={(e: any) => setAdditionalSelect(e, 'powerSteering')} 
            options={selectPowerSteering}
            />
        </div>
        <div className={styles["additional-item"]}>
          <div className={styles["additional-title"]}>Управление климатом</div>
          <Select 
            onChange={(e: string) => setAdditionalSelectCheckbox(e, "climatControl", "select")} 
            options={selectClimatControl}
            />
          <CheckboxList 
            data={checkboxClimatControl}
            changeFunction={(e: string) => setAdditionalSelectCheckbox(e, "climatControl", "checkbox")} 
            />
        </div>
        <div className={styles["additional-item"]}>
          <div className={styles["additional-title"]}>Салон</div>
          <Select 
            onChange={(e: string) => setAdditionalSelectCheckbox(e, "salon", "select")} 
            options={selectSalon}
            />
          <CheckboxList 
            data={checkboxSalon} 
            changeFunction={(e: string) => setAdditionalSelectCheckbox(e, "salon", "checkbox")} 
            />
        </div>
        <div className={styles["additional-item"]}>
          <div className={styles["additional-title"]}>Обогрев</div>
          <CheckboxList 
            data={checkboxHeating}
            changeFunction = {(e: string) => setAdditionalCheckbox(e, 'heating')}
            />
        </div>
        <div className={styles["additional-item"]}>
          <div className={styles["additional-title"]}>Электростеклоподъемники</div>
          <Select 
            onChange={(e: any) => setAdditionalSelect(e, 'powerWindows')} 
            options={selectPowerWindows}
            />
        </div>
        <div className={styles["additional-item"]}>
          <div className={styles["additional-title"]}>Электропривод</div>
          <CheckboxList 
            data={checkboxElectricDrive} 
            changeFunction = {(e: string) => setAdditionalCheckbox(e, 'electricDrive')}
            />
        </div>
        <div className={styles["additional-item"]}>
          <div className={styles["additional-title"]}>Память настроек</div>
          <CheckboxList 
            data={checkboxSettingsMemory} 
            changeFunction = {(e: string) => setAdditionalCheckbox(e, 'settingsMemory')}
            />
        </div>
        <div className={styles["additional-item"]}>
          <div className={styles["additional-title"]}>Помощь при вождении</div>
          <CheckboxList 
            data={checkboxDrivingAssistance} 
            changeFunction = {(e: string) => setAdditionalCheckbox(e, 'drivingAssistance')}
            />
        </div>
        <div className={styles["additional-item"]}>
          <div className={styles["additional-title"]}>Противоугонная система</div>
          <CheckboxList 
            data={checkboxAntiThiefSystem} 
            changeFunction = {(e: string) => setAdditionalCheckbox(e, 'antiThiefSystem')}
            />
        </div>
        <div className={styles["additional-item"]}>
          <div className={styles["additional-title"]}>Подушки безопасности</div>
          <CheckboxList 
            data={checkboxAirBags} 
            changeFunction = {(e: string) => setAdditionalCheckbox(e, 'airbags')}
            />
        </div>
        <div className={styles["additional-item"]}>
          <div className={styles["additional-title"]}>Активная безопасность</div>
          <CheckboxList 
            data={checkboxActiveSafety} 
            changeFunction = {(e: string) => setAdditionalCheckbox(e, 'activeSafety')}
            />
        </div>
        <div className={styles["additional-item"]}>
          <div className={styles["additional-title"]}>Мультимедиа и навигация</div>
          <CheckboxList 
            data={checkboxMultimedia} 
            changeFunction = {(e: string) => setAdditionalCheckbox(e, 'multimedia')}
            />
        </div>
        <div className={styles["additional-item"]}>
          <div className={styles["additional-title"]}>Аудиосистема</div>
          <Select 
            onChange={(e: string) => setAdditionalSelectCheckbox(e, "audioSystem", "select")} 
            options={selectAudioSystem}
            />
          <CheckboxList 
            data={checkboxAudioSystem} 
            changeFunction={(e: string) => setAdditionalSelectCheckbox(e, "audioSystem", "checkbox")} 
            />
        </div>
        <div className={styles["additional-item"]}>
          <div className={styles["additional-title"]}>Фары</div>
          <Select 
            onChange={(e: string) => setAdditionalSelectCheckbox(e, "headlights", "select")} 
            options={selectHeadlights}
            />
          <CheckboxList 
            data={checkboxHeadlights} 
            changeFunction={(e: string) => setAdditionalSelectCheckbox(e, "headlights", "checkbox")} 
            />
        </div>
        <div className={styles["additional-item"]}>
          <div className={styles["additional-title"]}>Шины и диски</div>
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
    </div>
  </>
  )
}
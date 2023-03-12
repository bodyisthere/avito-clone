import { 
  checkboxActiveSafety, 
  checkboxAirBags, 
  checkboxAntiThiefSystem, 
  checkboxAudioSystem, 
  checkboxClimatControl, 
  checkboxDrivingAssistance, 
  checkboxElectricDrive, 
  checkboxHeadlights, 
  checkboxHeating, 
  checkboxMultimedia, 
  checkboxSalon, 
  checkboxSettingsMemory, 
  checkboxTiresWheels, 
  selectAudioSystem, 
  selectClimatControl, 
  selectHeadlights, 
  selectPowerSteering, 
  selectPowerWindows, 
  selectSalon, 
  selectTiresWheels 
} from './autoData'

type IAutoAdditionalData = {
  title: string
  content: Array<'select' | 'checkbox'>
  keyField: string
  selectData?: string[]
  checkboxData?: {title: null, data: {title: string}[]}
}


export const autoAdditional: IAutoAdditionalData[] = [
  {
    title: 'Усилитель руля',
    content: ["select"],
    keyField: "powerSteering",
    selectData: selectPowerSteering
  },
  {
    title: 'Управление климатом',
    content: ["select", "checkbox"],
    keyField: "climatControl",
    selectData: selectClimatControl,
    checkboxData: checkboxClimatControl
  },
  {
    title: 'Салон',
    content: ["select", "checkbox"],
    keyField: "salon",
    selectData: selectSalon,
    checkboxData: checkboxSalon
  },
  {
    title: 'Обогрев',
    content: ["checkbox"],
    keyField: "heating",
    checkboxData: checkboxHeating 
  },
  {
    title: 'Электростеклоподъёмники',
    content: ["select"],
    keyField: "powerWindows",
    selectData: selectPowerWindows,
  },
  {
    title: 'Электропривод',
    content: ["checkbox"],
    keyField: "electricDrive",
    checkboxData: checkboxElectricDrive 
  },
  {
    title: 'Память настроек',
    content: ["checkbox"],
    keyField: "settingsMemory",
    checkboxData: checkboxSettingsMemory
  },
  {
    title: 'Помощь при вождении',
    content: ["checkbox"],
    keyField: "drivingAssistance",
    checkboxData: checkboxDrivingAssistance 
  },
  {
    title: 'Противоугонная система',
    content: ["checkbox"],
    keyField: "antiThiefSystem",
    checkboxData: checkboxAntiThiefSystem 
  },
  {
    title: 'Подушки безопасности',
    content: ["checkbox"],
    keyField: "airbags",
    checkboxData: checkboxAirBags 
  },
  {
    title: 'Активная безопасность',
    content: ["checkbox"],
    keyField: "activeSafety",
    checkboxData: checkboxActiveSafety 
  },
  {
    title: 'Мультимедиа и навигация',
    content: ["checkbox"],
    keyField: "multimedia",
    checkboxData: checkboxMultimedia 
  },
  {
    title: 'Аудиосистема',
    content: ["checkbox", "select"],
    keyField: "audioSystem",
    selectData: selectAudioSystem,
    checkboxData: checkboxAudioSystem
  },
  {
    title: 'Фары',
    content: ["checkbox", "select"],
    keyField: "headlights",
    selectData: selectHeadlights,
    checkboxData: checkboxHeadlights
  },
  {
    title: 'Шины и диски',
    content: ["select", "checkbox"],
    keyField: "tiresWheels",
    selectData: selectTiresWheels,
    checkboxData: checkboxTiresWheels
  }
]
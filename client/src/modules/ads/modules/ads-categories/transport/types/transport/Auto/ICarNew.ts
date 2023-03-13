import { ad } from "../../../../../../types/ads";

type climatControl = {
  select: string | null, 
  // select: "Кондиционер" | "Климат-контроль однозонный" | "Климат-контроль многозонный" | null, 
  checkbox: string[] | null
  // checkbox: ("Управление на руле" | "Атермальное остекление")[] | null
}
type salon = {
  select: string | null, 
  // select: "Кожа" | "Ткань" | "Велюр" | "Комбинированный" | null, 
  checkbox: string[] | null
  // checkbox: ("Кожаный руль" | "Люк")[] | null
}
type audioSystem = {
  select: string |null, 
  // select: "2 колонки" | "4 колонки" | "6 колонок" | "8+ колонок" |null, 
  checkbox: string[] | null
  // checkbox: "Сабвуфер"[] | null
}
type headlights = {
  select: string | null, 
  // select: "Галогенные" | "Ксеноновые" | "Светодиодные" | null, 
  checkbox: string[] | null
  // checkbox: ("Противотуманные" | "Омыватели фар" | "Адаптивное освещение")[] | null
}
type tiresWheels = {
  select: string | null, 
  // select: "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | null, 
  checkbox: string[] | null
  // checkbox: "Зимние шины в комплекте"[] | null
}
type powerSteering =  string[] | null
// type powerSteering = "Гидравлический" | "Электрический" | "Электрогидравлический" | null
type heating = string[] | null
// type heating = ("Передних сидений" | "Задних сидений" | "Зеркал" | "Заднего стекла" | "Руля")[] | null
type powerWindows = string | null
// type powerWindows = "Только передние" | "Передние и задние" | null
type electricDrive = string[] | null
// type electricDrive = ("Передних сидений" | "Задних сидений" | "Зеркал" | "Рулевой колонки" | "Складывания зеркал")[] | null
type settingsMemory = string[] | null
// type settingsMemory = ("Передних сидений" | "Задних сидений" | "Зеркал" | "Рулевой колонки")[] |null
type drivingAssistance = string[] | null
// type drivingAssistance = ("Автоматический парковщик" | "Датчик дождя" | "Датчик света" | "Парктроник задний" | "Парктроник передний" | "Система контроля слепых зон" | "Камера заднего вида" | "Круиз-контроль" | "Бортовой компьютер")[] | null
type antiThiefSystem = string[] | null 
// type antiThiefSystem = ("Сигнализация" | "Центральный замок" | "Иммобилайзер" | "Спутник")[] | null 
type airbags = string[] | null
// type airbags = ("Фронтальные" | "Коленные" | "Шторки" | "Боковые передние" | "Боковые задние")[] | null
type activeSafety = string[] | null
// type activeSafety = ("Антиблокировка тормозов" | "Антипробуксовка" | "Курсовая устойчивость" | "Распред. тормозных усилий" | "Экстренное торможение" | "Блок. диффернциала" | "Обнаружение пешеходов")[] | null
type multimedia = string[] | null
// type multimedia = ("CD/DVD/Blu-ray" | "MP3" | "Радио" | "TV" | "Видео" | "Управление на руле" | "USB" | "AUX" | "Bluetooth" | "GPS-навигатор")[] | null

export interface groundTransport extends ad {
  VIN: string | null
}

export interface additionalOptions {
  powerSteering: powerSteering
  climatControl: climatControl
  salon: salon
  heating: heating
  powerWindows: powerWindows
  electricDrive: electricDrive
  settingsMemory: settingsMemory
  drivingAssistance: drivingAssistance
  antiThiefSystem: antiThiefSystem
  airbags: airbags
  activeSafety:  activeSafety
  multimedia: multimedia
  audioSystem: audioSystem
  headlights: headlights
  tiresWheels: tiresWheels
}


export interface car extends groundTransport {
  brand: string | null
  vehiclePassport: "Оригинал" | "Дубликат" | "Электронный" | "-Не выбрано-" | null
  inspectionData: ("Есть сервисная книжка" | "Обслуживался у дилера" | "На гарантии")[] | null 
  color: "Белый" | "Серебрянный" | "Серый" | "Чёрный" | "Коричневый" | "Золотой" | "Бежевый" | "Красный" | "Бордовый" | "Оранжевый" | "Жёлтый" | "Зелёный" | "Голубой" | "Синий" | "Фиолетовый" | "Пурпурный" | "Розовый" | null
  additionalOptions: additionalOptions
}
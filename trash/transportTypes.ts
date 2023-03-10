import { ad } from '../client/src/modules/ads/types/ads'

interface groundTransport extends ad {
  VIN: string | undefined
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

//машины
export interface car extends groundTransport {
  brand: string | undefined
  vehiclePassport: "Оригинал" | "Дубликат" | "Электронный" | "-" | undefined
  inspectionData: ("Есть сервисная книжка" | "Обслуживался у дилера" | "На гарантии")[] | null 
  color: "Белый" | "Серебрянный" | "Серый" | "Чёрный" | "Коричневый" | "Золотой" | "Бежевый" | "Красный" | "Бордовый" | "Оранжевый" | "Жёлтый" | "Зелёный" | "Голубой" | "Синий" | "Фиолетовый" | "Пурпурный" | "Розовый" | undefined
  additionalOptions: additionalOptions
}

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

//мотоциклы и мототехника
export interface motorcyclesAndMotorVehicles extends groundTransport {
  condition: 'Новое' | 'Б/У' | 'На запчасти'
  mileage?: number | null
}

export interface motorcyclesAndMotorVehiclesExtended extends motorcyclesAndMotorVehicles {
  brand: string
  type: string
  yearOfIssue: number
  engineType: 'Бензин' | 'Электро' | 'Дизель'
  power: number
  engineCapacity: number
  numberOfCycles: '2' | '4'
  fuelSupply?: 'Карбюратор' | 'Инжектор'
  typeOfDrive?: 'Цепь' | 'Ремень' | 'Кардан'
  maxPassengers?: number
  loadCapacity?: number
  cooling?: 'Воздушное' | 'Жидкостное'
  numberOfCylinders?: '1' | '2' | '3' | '4' | '5' | '6'
  transmission?: 'Механика' | 'Автомат' | 'Робот' | 'Вариатор'
  cylinderArrangement?: 'V-образное' | 'Оппозитное' | 'Рядное'
} 

export interface mopedsMotorcycles extends motorcyclesAndMotorVehiclesExtended {
  vehiclePassport: "Оригинал" | "Дубликат" | "Электронный" | null
  vehiclePassportOwners: "1" | "2" | "3" | "4+"
  additionalOptions: 'Электростартер' | 'Антиблокировочная система(ABS)' | 'Трэкшн-контроль(TCS)' | 'Система старт-стоп' | 'Ветровое стекло' | 'Кофр' [] | null
}

//водный транспорт
export interface waterTransport extends ad {
  condition: 'Новое' | 'Б/У'
}

export interface waterTransportExtended extends waterTransport{
  brand: string
  yearOfIssue: number
  type: string
  maxPassengers: number
}

export interface jetSkis extends waterTransportExtended {
  power: number
  engineCapacity: number
  trailer: boolean
}

export interface boatsYachts extends waterTransportExtended{
  length: number
  width: number
  draft: number
  housingMaterial: string
}


//документация некая

//автомобили:
//с пробегом - carOld, новый - car,

//мотоциклы и мототехника:
//вездеходы - motorcyclesAndMotorVehiclesExtended, картинг - motorcyclesAndMotorVehicles, мопеды и скутеры - mopedsMotorcycles, мотоциклы - mopedsMotorcycles, снегоходы - motorcyclesAndMotorVehiclesExtended, квадроциклы и багги - motorcyclesAndMotorVehiclesExtended

//грузовики и спецтехника:
//грузовики и спецтехника - ad

//водный транспорт:
//вёсельные лодки - waterTransport, гидроциклы - jetSkis, катера и яхты - boatsYachts, моторные лодки и моторы - waterTransportExtended,

//запчасти и аксессуары:
//запчасти и аксессуары - ad
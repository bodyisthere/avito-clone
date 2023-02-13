import { ad } from "../../../types/types"

interface groundTransport extends ad {
  VIN: string | undefined
}

//машины
export interface car extends groundTransport {
  brand: string | undefined
  vehiclePassport: "Оригинал" | "Дубликат" | "Электронный" | undefined
  inspectionData: ("Есть сервисная книжка" | "Обслуживался у дилера" | "На гарантии")[] | null 
  color: "Белый" | "Серебрянный" | "Серый" | "Чёрный" | "Коричневый" | "Золотой" | "Бежевый" | "Красный" | "Бордовый" | "Оранжевый" | "Жёлтый" | "Зелёный" | "Голубой" | "Синий" | "Фиолетовый" | "Пурпурный" | "Розовый" | undefined
  additionalOptions: {
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
  },
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


export interface carOld extends car {
  type: "Продаю личный автомобиль" | "Автомобиль приобретён на продажу" | undefined
  governmentNumber: {main: string, region: number} | null
  mileage: number | undefined
  condition: "Не битый" | "Битый" | undefined
  vehiclePassportOwners: "1" | "2" | "3" | "4+" | undefined
  conditionBody: [
    {
      position: 'спереди', 
      id: 'cef1a2ea-8467-41b1-8434-eaa09bf315da',
      places: [
        {title: 'Крыша', id: '2cd2e683-4523-4f6f-b337-80a745eecd94', points: string[] | null},
        {title: 'Лобовое стекло', id: '0c4935a4-a0dd-4f5c-a8b0-609019d4aecb', points: string[] | null},
        {title: 'Капот', id: 'c9dc290e-e54d-47af-b274-2a115a1dea31', points: string[] | null},
        {title: 'Передний бампер', id: '884bfbab-448b-40ac-873e-1b8bc02e8596', points: string[] | null},
        {title: 'Передняя правая фара', id: '62c59e24-2349-4f3e-91da-8fdf9d53d2ba', points: string[] | null},
        {title: 'Передняя левая фара', id: '3ef0d376-78c0-40f4-974f-c676cf421cee', points: string[] | null},
        {title: 'Правое зеркало', id: '5793f514-b3ee-4f43-85bd-b94a1c7ad64a', points: string[] | null},
        {title: 'Левое зеркало', id: '475a33fe-7390-418f-962f-604fdaefc337', points: string[] | null},
      ]
    },
    {
      position: 'сзади', 
      id: 'a2e2ff1f-29ee-4f89-ba20-b8b319887c42',
      places: [
        {title: 'Заднее стекло', id: 'ec19788d-b8c3-4979-ae25-5c8f19a85683', points: string[] | null},
        {title: 'Дверь багажника', id: 'b31e3838-c16f-4ea4-978a-ee516a95fc82', points: string[] | null},
        {title: 'Задняя левая фара', id: '85e43e41-2759-4b34-b9d1-584b334b3fbd', points: string[] | null},
        {title: 'Задняя правая фара', id: '7a6730c9-2137-460f-964b-963009cca2f9', points: string[] | null},
        {title: 'Задний бампер', id: '6470937e-e4d9-4f19-beb0-8c0f6761d945', points: string[] | null},
      ]
    },
    {
      position: 'слева', 
      id: '659a5410-3593-464f-afcc-1c72b41f7d0f',
      places: [
        {title: 'Переднее левое крыло', id: '51e53624-c5f4-4690-a4c8-7c7b5185fc51', points: string[] | null},
        {title: 'Задняя левая дверь', id: 'a714589a-d835-4581-8bb6-ed0805e7c6d3', points: string[] | null},
        {title: 'Передняя левая дверь', id: 'f8298c61-98a2-4939-b5a1-2490a01089f7', points: string[] | null},
        {title: 'Заднее левое крыло', id: '3861cafc-ed3a-4012-ad01-c0ecb967bd9d', points: string[] | null},
      ]
    },
    {
      position: 'справа', 
      id: '24c22de3-116c-4fee-9f32-27040b9c980d',
      places: [
        {title: 'Заднее правое крыло', id: 'd790c257-cfb4-4f7c-99ee-ed322b87dcf8', points: string[] | null},
        {title: 'Передняя правая дверь', id: '18ea0ef1-0fc1-43c7-96e3-c883758b84c2', points: string[] | null},
        {title: 'Задняя правая дверь', id: 'f45728cf-6f5e-4ce7-9797-c2c06f345dd9', points: string[] | null},
        {title: 'Переднее правое крыло', id: 'f4e68e20-1003-4e73-9cbe-0900cf09e4da', points: string[] | null},
      ]
    },
  ]
}

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
import { ad } from "../../../types/types"

interface groundTransport extends ad {
  VIN: string
}

//машины
export interface car extends groundTransport {
  brand: string
  vehiclePassport: "Оригинал" | "Дубликат" | "Электронный" | null
  inspectionData: ("Есть сервисная книжка" | "Обслуживался у дилера" | "На гарантии")[] | null
  color: "Белый" | "Серебрянный" | "Серый" | "Чёрный" | "Коричневый" | "Золотой" | "Бежевый" | "Красный" | "Бордовый" | "Оранжевый" | "Жёлтый" | "Зелёный" | "Голубой" | "Синий" | "Фиолетовый" | "Пурпурный" | "Розовый" | null
  additionalOptions: {
    powerSteering: "Гидравлический" | "Электрический" | "Электрогидравлический" | null
    climatControl: {select: "Кондиционер" | "Климат-контроль однозонный" | "Климат-контроль многозонный" | null, checkbox: ("Управление на руле" | "Атермальное остекление")[] | null}
    salon: {select: "Кожа" | "Ткань" | "Велюр" | "Комбинированный" | null, checkbox: ("Кожаный руль" | "Люк")[] | null}
    heating: ("Передних сидений" | "Задних сидений" | "Зеркал" | "Заднего стекла" | "Руля")[] | null
    powerWindows: "Только передние" | "Передние и задние" | null
    electricDrive: ("Передних сидений" | "Задних сидений" | "Зеркал" | "Рулевой колонки" | "Складывания зеркал")[] | null
    settingsMemory: ("Передних сидений" | "Задних сидений" | "Зеркал" | "Рулевой колонки")[] |null
    drivingAssistance: ("Автоматический парковщик" | "Датчик дождя" | "Датчик света" | "Парктроник задний" | "Парктроник передний" | "Система контроля слепых зон" | "Камера заднего вида" | "Круиз-контроль" | "Бортовой компьютер")[] | null
    antiThiefSystem: ("Сигнализация" | "Центральный замок" | "Иммобилайзер" | "Спутник")[] | null 
    airbags: ("Фронтальные" | "Коленные" | "Шторки" | "Боковые передние" | "Боковые задние")[] | null
    activeSafety:  ("Антиблокировка тормозов" | "Антипробуксовка" | "Курсовая устойчивость" | "Распред. тормозных усилий" | "Экстренное торможение" | "Блок. диффернциала" | "Обнаружение пешеходов")[] | null
    multimedia: ("CD/DVD/Blu-ray" | "MP3" | "Радио" | "TV" | "Видео" | "Управление на руле" | "USB" | "AUX" | "Bluetooth" | "GPS-навигатор")[] | null
    audioSystem: {select: "2 колонки" | "4 колонки" | "6 колонок" | "8+ колонок" |null, checkbox: "Сабвуфер"[] | null}
    headlights: {select: "Галогенные" | "Ксеноновые" | "Светодиодные" | null, checkbox: ("Противотуманные" | "Омыватели фар" | "Адаптивное освещение")[] | null}
    tiresWheels: {select: "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" |null, checkbox: "Зимние шины в комплекте"[] | null}
  },
}

export interface carOld extends car {
  type: "Продаю личный автомобиль" | "Автомобиль приобретён на продажу" | null
  governmentNumber: {main: string, region: number}
  mileage: number
  condition: "Не битый" | "Битый"
  vehiclePassportOwners: "1" | "2" | "3" | "4+"
  conditionBody: [
    {position: "спереди", places: [
      {title: "Правое зеркало", points: null | string[]},
      {title: "Левое зеркало", points: null | string[]},
      {title: "Передняя правая фара", points: null | string[]},
      {title: "Передняя левая фара", points: null | string[]},
      {title: "Передний бампер", points: null | string[]},
      {title: "Капот", points: null | string[]},
      {title: "Лобовое стекло", points: null | string[]},
      {title: "Крыша", points: null | string[]},
    ]},
    {position: "слева", places: [
      {title: "Переднее левое крыло", points: null | string[]},
      {title: "Передняя левая дверь", points: null | string[]},
      {title: "Задняя левая дверь", points: null | string[]},
      {title: "Заднее левое крыло", points: null | string[]},
    ]},
    {position: "сзади", places: [
      {title: "Заднее стекло", points: null | string[]},
      {title: "Дверь багажника", points: null | string[]},
      {title: "Задний бампер", points: null | string[]},
      {title: "Задняя правая фара", points: null | string[]},
      {title: "Задняя левая фара", points: null | string[]},
    ]},
    {position: "справа", places: [
      {title: "Переднее правое крыло", points: null | string[]},
      {title: "Передняя правая дверь", points: null | string[]},
      {title: "Задняя правая дверь", points: null | string[]},
      {title: "Заднее правое крыло", points: null | string[]},
    ]},
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
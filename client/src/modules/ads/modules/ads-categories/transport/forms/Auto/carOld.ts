import { carOld } from "../../types/transport/Auto/ICarOld"

export const carOldForm: carOld = {
  brand: null,
  vehiclePassport: null,
  inspectionData: null,
  color: null,
  condition: null,
  tags: [],
  conditionBody: [
    {
      position: 'спереди', 
      id: 'cef1a2ea-8467-41b1-8434-eaa09bf315da',
      places: [
        {title: 'Крыша', id: '2cd2e683-4523-4f6f-b337-80a745eecd94', points: null},
        {title: 'Лобовое стекло', id: '0c4935a4-a0dd-4f5c-a8b0-609019d4aecb', points: null},
        {title: 'Капот', id: 'c9dc290e-e54d-47af-b274-2a115a1dea31', points: null},
        {title: 'Передний бампер', id: '884bfbab-448b-40ac-873e-1b8bc02e8596', points: null},
        {title: 'Передняя правая фара', id: '62c59e24-2349-4f3e-91da-8fdf9d53d2ba', points: null},
        {title: 'Передняя левая фара', id: '3ef0d376-78c0-40f4-974f-c676cf421cee', points: null},
        {title: 'Правое зеркало', id: '5793f514-b3ee-4f43-85bd-b94a1c7ad64a', points: null},
        {title: 'Левое зеркало', id: '475a33fe-7390-418f-962f-604fdaefc337', points: null},
      ]
    },
    {
      position: 'сзади', 
      id: 'a2e2ff1f-29ee-4f89-ba20-b8b319887c42',
      places: [
        {title: 'Заднее стекло', id: 'ec19788d-b8c3-4979-ae25-5c8f19a85683', points: null},
        {title: 'Дверь багажника', id: 'b31e3838-c16f-4ea4-978a-ee516a95fc82', points: null},
        {title: 'Задняя левая фара', id: '85e43e41-2759-4b34-b9d1-584b334b3fbd', points: null},
        {title: 'Задняя правая фара', id: '7a6730c9-2137-460f-964b-963009cca2f9', points: null},
        {title: 'Задний бампер', id: '6470937e-e4d9-4f19-beb0-8c0f6761d945', points: null},
      ]
    },
    {
      position: 'слева', 
      id: '659a5410-3593-464f-afcc-1c72b41f7d0f',
      places: [
        {title: 'Переднее левое крыло', id: '51e53624-c5f4-4690-a4c8-7c7b5185fc51', points: null},
        {title: 'Задняя левая дверь', id: 'a714589a-d835-4581-8bb6-ed0805e7c6d3', points: null},
        {title: 'Передняя левая дверь', id: 'f8298c61-98a2-4939-b5a1-2490a01089f7', points: null},
        {title: 'Заднее левое крыло', id: '3861cafc-ed3a-4012-ad01-c0ecb967bd9d', points: null},
      ]
    },
    {
      position: 'справа', 
      id: '24c22de3-116c-4fee-9f32-27040b9c980d',
      places: [
        {title: 'Заднее правое крыло', id: 'd790c257-cfb4-4f7c-99ee-ed322b87dcf8', points: null},
        {title: 'Передняя правая дверь', id: '18ea0ef1-0fc1-43c7-96e3-c883758b84c2', points: null},
        {title: 'Задняя правая дверь', id: 'f45728cf-6f5e-4ce7-9797-c2c06f345dd9', points: null},
        {title: 'Переднее правое крыло', id: 'f4e68e20-1003-4e73-9cbe-0900cf09e4da', points: null},
      ]
    },
  ],
  description: null, 
  governmentNumber: null,
  meetingPoint: null, 
  mileage: null, 
  name: null,
  photo: null, 
  price: null,
  type: null, 
  vehiclePassportOwners: null,
  video: null,
  VIN: null,
  additionalOptions: {
    powerSteering: null,
    climatControl: {select: null, checkbox: null},
    salon: {select: null, checkbox: null},
    heating: null,
    powerWindows: null,
    electricDrive: null,
    settingsMemory: null,
    drivingAssistance: null,
    antiThiefSystem: null,
    airbags: null,
    activeSafety:  null,
    multimedia: null,
    audioSystem: {select: null, checkbox: null},
    headlights: {select: null, checkbox: null},
    tiresWheels: {select: null, checkbox: null},
  },
}
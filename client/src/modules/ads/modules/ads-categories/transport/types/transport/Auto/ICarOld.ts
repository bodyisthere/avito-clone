import { car } from './ICarNew'

export interface carOld extends car {
  type: "Продаю личный автомобиль" | "Автомобиль приобретён на продажу" | "-Не выбрано-" | null
  governmentNumber: {main: string, region: number} | null
  mileage: number | null
  condition: "Не битый" | "Битый" | null
  vehiclePassportOwners: "1" | "2" | "3" | "4+" | null
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
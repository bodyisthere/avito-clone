import { IDamagedPositions } from "../types/types"

export const inspectionData = [
  {
    title: 'Есть сервисная книжка',
    id: '6b38a793-a718-40e5-a09e-8d068c27522b',
  },
  {
    title: 'Обслуживался у диллера',
    id: '15a52432-213b-42ac-bc2a-82f28d03f063',
  },
  {
    title: 'На гарантии',
    id: 'a9b67ef2-9d62-4a9a-b405-fbccac7c05c3',
  },
]

export const damaged: IDamagedPositions[] = [
  {
    position: 'спереди',
    id: 'cef1a2ea-8467-41b1-8434-eaa09bf315da',
    img: '0180c711-6554-4634-976f-c04f57e59114.png',
    places: [
      {
        title: 'Крыша',
        points: [{title: 'Скол или царапина', id: 'bd1e1d85-1ebd-43e7-81fa-8a763ba355e2'}, {title: 'Вмятина', id: 'cc734a40-29c8-4df6-a3e3-66ae23ba1f36'}, {title: 'Коррозия', id: '2d130873-79b2-46ef-9cf4-0de34f05c18c'}, {title: 'Заменена', id: '1cacdf87-f9e4-4e4a-9e84-c37e247f1860'}, {title: 'Окрашена', id: '0d445273-e457-403f-96eb-52f7e17d5145'}],
        id: '2cd2e683-4523-4f6f-b337-80a745eecd94',
        class: 'f1',
      },
      {
        title: 'Лобовое стекло',
        points: [{title: 'Скол', id: '7a5be9f5-9199-4c19-aa0c-cf4165a8b614'}, {title: 'Трещина', id: 'd472d887-fa2d-42ca-8493-4e7bdf73f941'}, {title: 'Разбито или отсутсвует', id: 'c3ad2c41-863f-4207-8eb4-305922875bf7'}],
        id: '0c4935a4-a0dd-4f5c-a8b0-609019d4aecb',
        class: 'f2',
      },
      {
        title: 'Капот',
        points: [{title: 'Скол или царапина', id: '6815d122-b535-410a-a6cf-d7b6d3ddf8a9'}, {title: 'Вмятина', id: '386c0af1-6ed2-45c0-a22a-2d3c2fe545fa'}, {title: 'Коррозия', id: '29b43e04-ae8e-4a29-a62f-9da2f499db49'}, {title: 'Заменён', id: 'd48a1745-0418-4193-8cb3-9578197c4387'}, {title: 'Окрашен', id: 'd944e3a6-669a-4eca-8250-1542789a2e0d'}],
        id: 'c9dc290e-e54d-47af-b274-2a115a1dea31',
        class: 'f3',
      },
      {
        title: 'Передний бампер',
        points: [{title: 'Скол или царапина', id: 'dbdbaeae-1726-49fc-acaa-34c36627fe8a'}, {title: 'Вмятина', id: 'e8d31528-2b62-4b23-bcde-55561a6dc6a8'}, {title: 'Коррозия', id: '2f047e1f-0e6a-4b68-9651-304424dfb4bf'}, {title: 'Заменён', id: 'ff79bd4d-5536-4791-9d3c-d00b4ae27ea3'}, {title: 'Окрашен', id: 'b451b7ae-3897-411a-bacc-189f23cf7a4f'}],
        id: '884bfbab-448b-40ac-873e-1b8bc02e8596',
        class: 'f4',
      },
      {
        title: 'Передняя правая фара',
        points: [{title: 'Скол', id: 'fa8d6bd5-b93d-41b2-926a-789188864c70'}, {title: 'Трещина', id: '18ab5418-1ec4-4a3d-a1f7-530530b3382a'}, {title: 'Разбито или отсутствует', id: '8f6a8256-ea82-4a43-8637-f33020ae50f9'}],
        id: '62c59e24-2349-4f3e-91da-8fdf9d53d2ba',
        class: 'f5',
      },
      {
        title: 'Передняя левая фара',
        points: [{title: 'Скол', id: '10b64478-e83f-4581-b0c5-53c7a0df716d'}, {title: 'Трещина', id: '87d89d4a-549f-4d5d-a37e-7e60742d8f49'}, {title: 'Разбито или отсутствует', id: '1c18a727-fece-44f1-88de-38de385a0d72'}],
        id: '3ef0d376-78c0-40f4-974f-c676cf421cee',
        class: 'f6',
      },
      {
        title: 'Правое зеркало',
        points: [{title: 'Скол', id: 'c68d0e00-f713-4a85-bf9b-89169f9691bc'}, {title: 'Трещина', id: 'b19c1331-c512-4810-8b57-d874099cef21'}, {title: 'Разбито или отсутствует', id: 'a9cc0059-fbe2-49f9-8a07-bd53b8c0225b'}],
        id: '5793f514-b3ee-4f43-85bd-b94a1c7ad64a',
        class: 'f7',
      },
      {
        title: 'Левое зеркало',
        points: [{title: 'Скол', id: 'd1a217ae-9657-4182-b755-9400f6f4d6d4'}, {title: 'Трещина', id: '98e5df8b-772c-4bcc-89da-5dbc27b092a5'}, {title: 'Разбито или отсутствует', id: '1a279732-d334-4440-b214-4c0a266af293'}],
        id: '475a33fe-7390-418f-962f-604fdaefc337',
        class: 'f8',
      },
    ]
  },
  {
    position: 'сзади',
    id: 'a2e2ff1f-29ee-4f89-ba20-b8b319887c42',
    img: 'b27456b4-55e2-44b7-b586-c3a91ae65781.png',
    places: [
      {
      title: 'Заднее стекло',
      points: [{title: 'Скол', id: '5d9f8a4e-6b13-45b3-a1df-76a70041fd2b'}, {title: 'Трещина', id: '62fcdcb2-0b10-4075-acaa-0b38484512b7'}, {title: 'Разбито или отсутствует', id: 'c15bb7a9-cf30-49e2-909d-8b65719bd2bd'}],
      id: 'ec19788d-b8c3-4979-ae25-5c8f19a85683',
      class: 'b1',
      },
      {
        title: 'Дверь багажника',
        points: [{title: 'Скол или царапина', id: '4dae6085-1a9a-49c7-94ad-668523cd79fc'}, {title: 'Вмятина', id: '3769da32-f14b-4d9d-b89d-c6d43bd515f6'}, {title: 'Коррозия', id: '78d43913-9929-4514-8a8e-8af7e38bec57'}, {title: 'Заменена', id: '834cd7e9-f918-4bf0-8475-da28c3c38580'}, {title: 'Окрашена', id: 'ecfa1e02-7ca7-4db3-87ba-88611d89ec9f'}],
        id: 'b31e3838-c16f-4ea4-978a-ee516a95fc82',
        class: 'b2',
      },
      {
        title: 'Задняя левая фара',
        points: [{title: 'Скол', id: '73d592ae-6248-44ec-9b8f-ddb947445d27'}, {title: 'Трещина', id: 'a824e178-ff59-439c-ba9d-2febac83c9e1'}, {title: 'Разбита или отсутствует', id: '433500ba-7be0-467a-b2fd-0da09ec3d016'}],
        id: '85e43e41-2759-4b34-b9d1-584b334b3fbd',
        class: 'b3',
      },
      {
        title: 'Задняя правая фара',
        points: [{title: 'Скол', id: '865cb314-ac9f-483d-b125-9651cad05047'}, {title: 'Трещина', id: 'a4c9761f-77f1-44e5-abd3-5a255f4e7d71'}, {title: 'Разбита или отсутствует', id: '508b3310-2808-4d8c-9754-6804b936fcf6'}],
        id: '7a6730c9-2137-460f-964b-963009cca2f9',
        class: 'b4',
      },
      {
        title: 'Задний бампер',
        points: [{title: 'Скол или царапина', id: '4f4fd7e8-67c9-419b-a601-08ca6074999d'}, {title: 'Вмятина', id: '87c4ebb1-d31f-45ff-b1fe-81e762072a63'}, {title: 'Коррозия', id: 'd5a4ca9d-983c-47e4-9c16-9f448e4feeaa'}, {title: 'Заменён', id: 'c47cc838-842a-457b-97c7-6d9017d8712d'}, {title: 'Окрашен', id: 'c1250763-8601-41b5-849f-b07ffec68506'}],
        id: '6470937e-e4d9-4f19-beb0-8c0f6761d945',
        class: 'b5',
      },
    ]
  },
  {
    position: 'слева',
    id: '659a5410-3593-464f-afcc-1c72b41f7d0f',
    img: '5dbe1cbc-1820-4a40-bf5a-b02d0d1fb3ec.png',
    places: [
      {
        title: 'Переднее левое крыло',
        points: [{title: 'Скол или царапина', id: '69ca48e1-9d29-40af-9631-2b1e3ecd824f'}, {title: 'Вмятина', id: 'ba4baf10-a43d-4f20-8fd8-3d82fce184ba'}, {title: 'Коррозия', id: 'c49d8fbb-0663-4651-8aa4-c1733d74fe9e'}, {title: 'Заменено', id: '6e002cd7-94ed-4a93-99b0-5b57dfd8f475'}, {title: 'Окрашено', id: '914ea137-d38e-4ab9-9e54-8b13915e1686'}],
        id: '51e53624-c5f4-4690-a4c8-7c7b5185fc51',
        class: 'l1',
      },
      {
        title: 'Задняя левая дверь',
        points: [{title: 'Скол или царапина', id: 'cff4476f-1733-4c23-bfb6-005832882eff'}, {title: 'Вмятина', id: '4dae34cd-12bb-4566-9013-de40aea046b6'}, {title: 'Коррозия', id: '54631a73-ca4a-4b5f-bba4-0e7abd21ce01'}, {title: 'Заменена', id: '50682b84-8341-4e3b-9ee0-196043609f51'}, {title: 'Окрашена', id: '23653229-e97c-475b-8abe-17fabeac7301'}],
        id: 'a714589a-d835-4581-8bb6-ed0805e7c6d3',
        class: 'l2',
      },
      {
        title: 'Передняя левая дверь',
        points: [{title: 'Скол или царапина', id: 'cb8df58c-1d57-4b5d-8088-2079a3dad63a'}, {title: 'Вмятина', id: '411226d0-c0a4-427e-a2bc-dd009e3b6977'}, {title: 'Коррозия', id: '686c1d88-f8bb-4db2-bdcf-7be7302b28c8'}, {title: 'Заменена', id: '05b44318-7c8b-41f3-ae6e-d50b0aeebcc9'}, {title: 'Окрашена', id: '295996ac-f17b-465e-bf16-673fd599e95c'}],
        id: 'f8298c61-98a2-4939-b5a1-2490a01089f7',
        class: 'l3',
      },
      {
        title: 'Заднее левое крыло',
        points: [{title: 'Скол или царапина', id: '753e3dba-47ad-4173-8719-3398f6d34838'}, {title: 'Вмятина', id: '63a0b87b-98b7-4e6a-8a7d-24104f16caae'}, {title: 'Коррозия', id: '41afaa56-62f3-456c-aa6d-2ef9fc3c1b27'}, {title: 'Заменено', id: 'd1058c49-2b77-4e1c-acd2-729658641a6f'}, {title: 'Окрашено', id: '88cb19a4-f487-416c-a04d-ad756db539ba'}],
        id: '3861cafc-ed3a-4012-ad01-c0ecb967bd9d',
        class: 'l4',
      },
    ]
  },
  {
    position: 'справа',
    id: '24c22de3-116c-4fee-9f32-27040b9c980d',
    img: '2f52ba9c-894c-4aa4-8214-7a61c5b3688d.png',
    places: [
      {
        title: 'Заднее правое крыло',
        points: [{title: 'Скол или царапина', id: 'c9b55250-c492-4413-bc52-d2ef911a6b8d'}, {title: 'Вмятина', id: '714fc847-3a58-4837-83fa-27e0d798d615'}, {title: 'Коррозия', id: 'e17f50e6-057d-431f-8ef4-0321cd0966c5'}, {title: 'Заменено', id: '93ad6e14-f209-49e9-b1bb-055eed2185b0'}, {title: 'Окрашено', id: 'd09ddebc-48a2-4142-9500-c4efb64ed182'}],
        id: 'd790c257-cfb4-4f7c-99ee-ed322b87dcf8',
        class: 'r1',
      },
      {
        title: 'Передняя правая дверь',
        points: [{title: 'Скол или царапина', id: 'f711e8f1-0426-4015-8e4e-3690bcc8aa7b'}, {title: 'Вмятина', id: '0d6c5e7c-dfc7-40ea-ab51-7a5b340bde16'}, {title: 'Коррозия', id: '750643df-2094-48fa-bb6b-0fd598b0e085'}, {title: 'Заменена', id: '2f1fb398-400e-420d-95e2-fdf38325f3b7'}, {title: 'Окрашена', id: '9d93cad8-a9fc-4b7c-a9f1-a1f83c6b9053'}],
        id: '18ea0ef1-0fc1-43c7-96e3-c883758b84c2',
        class: 'r2',
      },
      {
        title: 'Задняя правая дверь',
        points: [{title: 'Скол или царапина', id: '1eb4e572-02de-47e2-9c16-0ba9d6d59ec4'}, {title: 'Вмятина', id: '97e6ecf4-d9d4-4df7-84bd-55d4d1a5012b'}, {title: 'Коррозия', id: 'a585509c-574e-4e73-9bec-cf4c698e3ccb'}, {title: 'Заменена', id: 'f7e5561b-4dd4-4620-ac3e-714fb765f663'}, {title: 'Окрашена', id: 'ed4a4730-c1c1-4fc2-8d66-cb7b8d82616b'}],
        id: 'f45728cf-6f5e-4ce7-9797-c2c06f345dd9',
        class: 'r3',
      },
      {
        title: 'Переднее правое крыло',
        points: [{title: 'Скол или царапина', id: 'db5a2a9d-00ba-4456-b522-1196797a7a71'}, {title: 'Вмятина', id: 'ca3481af-b886-41eb-93f4-e9bdeee17053'}, {title: 'Коррозия', id: '66cd292a-40ce-41c6-af84-ed9839819122'}, {title: 'Заменено', id: '7e08e118-8724-4a4f-8752-3613227453da'}, {title: 'Окрашено', id: 'd6313bbf-d413-4da6-b8f6-ad7f88e18375'}],
        id: 'f4e68e20-1003-4e73-9cbe-0900cf09e4da',
        class: 'r4',
      },
    ]
  },
]

import React, { FC, useRef, useState, useEffect } from 'react'
import { AxiosResponse } from 'axios'

import { getAutoBrands } from '../../../../api/getAutoBrands'
import { carOld } from '../../../../types/transportTypes'
import { inspectionData } from '../../../../data/transportData'

import { FileUpload, FileUploaded, ColorChoose, VideoLink, AutoNumber, RadioButtonsChoose, CheckboxList, Tip, CarMileage, Textarea } from '../../../ads-ui'
import { CarConditionWImg, CarAdditional, MapInput } from '../../../ads-components'
import { Select, InputText } from '../../../../../../UI'

export const AutoRun: FC = () => {
  const [selectedFiles, setSelectedFiles] = useState();
  const [uploadedFiles, setUploadedFiles] = useState<string[] | null>(['1', '2', '3', '1', '2', '3', '1', '2', '3', '1']);
  const [carBrandsData, setCarBrandsData] = useState<string[]>();

  const [form, setForm] = useState<carOld>(
    {
      brand: undefined,
      vehiclePassport: undefined,
      inspectionData: null,
      color: undefined,
      condition: undefined,
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
      description: undefined, 
      governmentNumber: null,
      meetingPoint: undefined, 
      mileage: undefined, 
      name: undefined,
      photo: null, 
      price: undefined,
      type: undefined, 
      vehiclePassportOwners: undefined,
      video: null,
      VIN: undefined,
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
  )

  useEffect(() => {
    async function fetchData() {
      const res: AxiosResponse<{_id: string, brand: string}[]> = await getAutoBrands();
      const dataPretty = res.data.map(el => el.brand)
      setCarBrandsData(dataPretty);
    }
    fetchData()
  }, [])

  const setFunction = (key: string, value: any) => {
    setForm((prev) => {
      return {
        ...prev, [key] : value
      } as carOld
    })
  } 

  const inspectionDataCheckbox = (el: any) => {
    setForm(prev => {
      if(!prev.inspectionData) {
        prev.inspectionData = [el];
        return prev;
      }
      if(prev.inspectionData?.includes(el)) {
        prev.inspectionData = prev.inspectionData?.filter(e => e !== el);
        return prev;
      } else {
        prev.inspectionData[prev.inspectionData.length] = el;
        return prev;
      }
    })
  }
  
  const [isFirstTip, setIsFirstTip] = useState<boolean>(false);
  const [isSecondTip, setIsSecondTip] = useState<boolean>(false);
  const [isThirdTip, setIsThirdTip] = useState<boolean>(false);

  return (
    <div className="new-category-ads">
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">Вид объявления</label>
        </div>
        <div className="new-category-ads__item-right">
          <Select options={['Продаю личный автомобиль', 'Автомобиль приобретен на продажу']} onChange={(e: any) => setFunction('type', e)} />
        </div>
      </div>
      <div className="new-category-ads__title">Внешний вид</div>
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">Фотографии<br/>Не более 10</label>
        </div>
        <div className="new-category-ads__item-right">
          {
            form.photo 
            ?
            ''
            // <FileUploaded uploadedFiles={form.photo} setOption={setFunction} optionKey='photo'/>
            :
            <FileUpload isMultiple={true} setUploadedFiles={setUploadedFiles} setSelectedFiles={setSelectedFiles} selectedFiles={selectedFiles} uploadedFiles={uploadedFiles}/>
          }
        </div>
      </div>
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">Цвет</label>
        </div>
        <div className="new-category-ads__item-right">
          <ColorChoose activeColor={form.color} setOption={setFunction} optionKey='color'/>
        </div>
      </div>
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">Видео(youtube)</label>
        </div>
        <div className="new-category-ads__item-right">
          <VideoLink videoLink={form.video} setOption={setFunction} optionKey='video'/>
        </div>
      </div>
      <div className="new-category-ads__title">Регистрационные данные</div>
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">VIN или номер кузова</label>
          <div className="new-category-ads__tip" onClick={() => setIsFirstTip(!isFirstTip)}>
            ?
            {isFirstTip 
              ? 
              <Tip setIsTipOpen={setIsFirstTip} type='VIN(номер кузова)'/>
              : 
              ''
            }
          </div>
        </div>
        <div className="new-category-ads__item-right">
          <InputText 
            className={'new-category-ads__input'} 
            clearInput={() => setFunction('VIN', null)}
            onChange={e => setFunction('VIN', e.target.value)} 
            value={form.VIN} 
          />
          <span style={{'color':'gray'}}>Покупатели не увидят ваш VIN и госномер</span>
        </div>
      </div>
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">Государственный номер</label>
        </div>
        <div className="new-category-ads__item-right">
            <AutoNumber autoNumber={form.governmentNumber} setOption={setFunction} optionKey='governmentNumber'/>
        </div>
      </div>
      <div className="new-category-ads__title">Технические характеристики</div>
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">Марка</label>
        </div>
        <div className="new-category-ads__item-right">
          {
            carBrandsData
            ?
            <Select options={carBrandsData} onChange={(e: any) => setFunction('brand', e)}/>
            :
            ''
          }
        </div>
      </div>
      <div className="new-category-ads__title">История эксплаутации и состояние</div>
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">Пробег</label>
        </div>
        <div className="new-category-ads__item-right">
          <CarMileage carMileage={form.mileage} setOption={setFunction} optionKey={'mileage'}/>
        </div>
      </div>
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">Состояние</label>
          <div className="new-category-ads__tip" onClick={() => setIsSecondTip(!isSecondTip)}>
            ?
            {isSecondTip 
              ? 
              <Tip setIsTipOpen={setIsSecondTip} type='Состояние машины'/>
              : 
              ''
            }
          </div>
        </div>
        <div className="new-category-ads__item-right">
          <RadioButtonsChoose data={['Не битый', 'Битый']} value={form.condition} setOption={setFunction} optionKey={'condition'}/>
        </div>
      </div>
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">ПТС</label>
          <div className="new-category-ads__tip" onClick={() => setIsThirdTip(!isThirdTip)}>
            ?
            {isThirdTip 
              ? 
              <Tip setIsTipOpen={setIsThirdTip} type='ПТС машины'/>
              : 
              ''
            }
          </div>
        </div>
        <div className="new-category-ads__item-right">
          <Select options={['-','Оригинал','Дубликат','Электронный']} onChange={(e: any) => setFunction('vehiclePassport', e)} ></Select>
        </div>
      </div>
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">Владельцев по ПТС</label>
        </div>
        <div className="new-category-ads__item-right">
          <RadioButtonsChoose data={['1', '2', '3', '4+']} optionKey='vehiclePassportOwners' setOption={setFunction} value={form.vehiclePassportOwners}/>
        </div>
      </div>
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">Данные о ТО</label>
        </div>
        <div className="new-category-ads__item-right">
          <CheckboxList 
            data={{title: null, data: inspectionData}} 
            changeFunction={inspectionDataCheckbox}
          />
        </div>
      </div>
      <div className="new-category-ads__title">Состояние кузова</div>
      <div className="new-category-ads__text">Укажите, что было повреждено или окрашено</div>
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">Тип повреждения</label>
        </div>
        <div className="new-category-ads__item-right">
          <CarConditionWImg setOption={setFunction} optionKey={'conditionBody'} />
        </div>
      </div>
      <div className="new-category-ads__title">Дополнительные опции</div>
      <div className="new-category-ads__item">
        <CarAdditional setForm={setForm}/>
      </div>
      <div className="new-category-ads__title">Описание</div>
      <div className="new-category-ads__item">
        <Textarea onChange={e => setFunction('description', e.target.value)}  value={form.description ? form.description : ''}/>
      </div>
      <div className="new-category-ads__title">Место осмотра</div>
        <MapInput />
      <button onClick={() => console.log(form)}>check data</button>
    </div>
  )
}
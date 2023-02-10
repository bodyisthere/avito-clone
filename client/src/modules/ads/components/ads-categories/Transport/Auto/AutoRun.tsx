import React, { FC, useRef, useState, useEffect } from 'react'
import { AxiosResponse } from 'axios'

import { useClosePop } from '../../../../../../hooks'
import { getAutoBrands } from '../../../../api/getAutoBrands'
import { carOld } from '../../../../types/transportTypes'

import { FileUpload, FileUploaded, ColorChoose, VideoLink, AutoNumber, RadioButtonsChoose, CheckboxList, Tip, CarMileage } from '../../../ads-ui'
import { CarConditionWImg } from '../../../ads-components'
import { Select, InputText } from '../../../../../../UI'

export const AutoRun: FC = () => {
  const [selectedFiles, setSelectedFiles] = useState();
  const [uploadedFiles, setUploadedFiles] = useState<string[] | null>(['1', '2', '3', '1', '2', '3', '1', '2', '3', '1']);
  const [carBrandsData, setCarBrandsData] = useState<string[]>();

  const [form, setForm] = useState<carOld>({photo: ['1', '2', '3', '4', '5']} as carOld)

  useEffect(() => {
    async function fetchData() {
      const res: AxiosResponse<{_id: string, brand: string}[]> = await getAutoBrands();
      const dataPretty = res.data.map(el => el.brand)
      setCarBrandsData(dataPretty);
    }
    fetchData()

  }, [])
  
  useEffect(() => {
    console.log(form)
  }, [form])


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
          <Select options={['Продаю личный автомобиль', 'Автомобиль приобретен на продажу']} setOption={setFunction} optionKey='type'/>
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
            <FileUploaded uploadedFiles={form.photo} setOption={setFunction} optionKey='photo'/>
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
            <Select options={carBrandsData} setOption={setFunction} optionKey='brand'/>
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
          <Select options={['-','Оригинал','Дубликат','Электронный']} setOption={setFunction} optionKey='vehiclePassport'></Select>
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
            data={{title: null, data: ['Есть сервисная книжка', 'Обслуживался у диллера', 'На гарантии']}} 
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
    </div>
  )
}
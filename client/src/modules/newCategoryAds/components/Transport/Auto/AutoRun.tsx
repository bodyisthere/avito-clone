import React, { FC, useRef, useState, useEffect } from 'react'

import { useClosePop } from '../../../../../hooks'

import { FileUpload, FileUploaded, ColorChoose, VideoLink, TipAuto, AutoNumber, RadioButtonsChoose, CheckboxList } from '../../ADS-UI'
import { CarConditionWImg } from '../../ADS-LOGIC'
import { Select, InputText } from '../../../../../UI'
import { getAutoBrands } from '../../../api/getAutoBrands'
import { AxiosResponse } from 'axios'
import { CarMileage } from '../../ADS-UI/CarMileage'
import { Tip } from '../../ADS-UI/Tips/Tip'

export const AutoRun: FC = () => {
  const [selectType, setSelectType] = useState<string[]>(['Продаю личный автомобиль', 'Автомобиль приобретен на продажу']);
  const [type, setType] = useState<string | null>(null);

  const [selectedFiles, setSelectedFiles] = useState();
  const [uploadedFiles, setUploadedFiles] = useState<string[] | null>(['1', '2', '3', '1', '2', '3', '1', '2', '3', '1']);
  const [activeColor, setActiveColor] = useState<string>('');
  const [VIN, setVIN] = useState<string>('')
  const [videoInput, setVideoInput] = useState<string>('');
  const [videoLink, setVideoLink] = useState<string | null>('');
  const [isTipOpen, setIsTipOpen] = useState<boolean>(false);
  const [autoNumber, setAutoNumber] = useState<{main: string, region: string}>({main: '', region: ''})

  const [carBrandsData, setCarBrandsData] = useState<string[]>();
  const [carBrand, setCarBrand] = useState<string | null>(null);

  const [condition, setCondition] = useState<string | null>(null);

  const [carMileage, setCarMileage] = useState<number | null>(null);

  const [PTS, setPTS] = useState<string | null>(null);

  const [ownerPTS, setOwnerPTS] = useState<string | null>(null);

  const [dataMaintenance, setDataMaintenance] = useState<string[] | []>([]);

  const [hitsForward, setHitsForward] = useState<any>();
  const [hitsBack, setHitsBack] = useState<any>();
  const [hitsRight, setHitsRight] = useState<any>();
  const [hitsLeft, setHitsLeft] = useState<any>();

  console.log(dataMaintenance);

  useEffect(() => {
    async function fetchData() {
      const res: AxiosResponse<{_id: string, brand: string}[]> = await getAutoBrands();
      const dataPretty = res.data.map(el => el.brand)
      setCarBrandsData(dataPretty);
    }
    fetchData()

  }, [])

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
          <Select options={selectType} setOption={setType}/>
        </div>
      </div>
      <div className="new-category-ads__title">Внешний вид</div>
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">Фотографии<br/>Не более 10</label>
        </div>
        <div className="new-category-ads__item-right">
          {
            uploadedFiles 
            ?
            <FileUploaded uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiles}/>
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
          <ColorChoose activeColor={activeColor} setActiveColor={setActiveColor}/>
        </div>
      </div>
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">Видео</label>
        </div>
        <div className="new-category-ads__item-right">
          <VideoLink videoLink={videoLink} videoInput={videoInput} setVideoInput={setVideoInput}/>
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
          <InputText onChange={e => setVIN(e.target.value)} value={VIN} className={'new-category-ads__input'}/>
          <span style={{'color':'gray'}}>Покупатели не увидят ваш VIN и госномер</span>
        </div>
      </div>
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">Государственный номер</label>
        </div>
        <div className="new-category-ads__item-right">
            <AutoNumber autoNumber={autoNumber} setAutoNumber={setAutoNumber}/>
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
            <Select options={carBrandsData} setOption={setCarBrand}/>
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
          <CarMileage carMileage={carMileage} setCarMileage={setCarMileage}/>
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
          <RadioButtonsChoose data={['Не битый', 'Битый']} setActive={setCondition} active={condition}/>
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
          <Select setOption={setPTS} options={['-','Оригинал','Дубликат','Электронный']}></Select>
        </div>
      </div>
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">Владельцев по ПТС</label>
        </div>
        <div className="new-category-ads__item-right">
          <RadioButtonsChoose data={['1', '2', '3', '4+']} active={ownerPTS} setActive={setOwnerPTS}/>
        </div>
      </div>
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">Данные о ТО</label>
        </div>
        <div className="new-category-ads__item-right">
          <CheckboxList data={{title: null, data: ['Есть сервисная книжка', 'Обслуживался у диллера', 'На гарантии']}} setCheckbox={setDataMaintenance} checkbox={dataMaintenance}/>
        </div>
      </div>
      <div className="new-category-ads__title">Состояние кузова</div>
      <div className="new-category-ads__text">Укажите, что было повреждено или окрашено</div>
      <div className="new-category-ads__item">
        <div className="new-category-ads__item-left">
          <label className="new-category-ads__label">Тип повреждения</label>
        </div>
        <div className="new-category-ads__item-right">
          <CarConditionWImg />
        </div>
      </div>
    </div>
  )
}
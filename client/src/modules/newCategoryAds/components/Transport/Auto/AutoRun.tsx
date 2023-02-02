import React, { FC, useState } from 'react'

import { Select, FileUpload, FileUploaded, ColorChoose, VideoLink } from '../../../../../UI'

export const AutoRun: FC = () => {
  const [selectType, setSelectType] = useState<string[]>(['Продаю личный автомобиль', 'Автомобиль приобретен на продажу']);
  const [type, setType] = useState<string>('');

  const [selectedFiles, setSelectedFiles] = useState();
  const [uploadedFiles, setUploadedFiles] = useState<string[] | null>(['1', '2', '3', '1', '2', '3', '1', '2', '3', '1']);
  const [activeColor, setActiveColor] = useState<string>('');

  const [videoInput, setVideoInput] = useState<string>('');
  const [videoLink, setVideoLink] = useState<string | null>('');

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
    </div>
  )
}
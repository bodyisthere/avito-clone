//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей
import standart from '../../../../../../styles/ads.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов
import { FileUpload, ColorChoose, VideoLink, FileUploaded } from '../../../../../ads-ui'

interface IAppereance {
  form: any
  setFunction: any
}

export const Appereance: FC<IAppereance> = ( { form, setFunction } ) => {
  const [selectedFiles, setSelectedFiles] = useState();
  const [uploadedFiles, setUploadedFiles] = useState<string[] | null>(null);

  console.log(uploadedFiles)

  return (
    <>
      <div className={standart.title}>Внешний вид</div>
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Фотографии<br/>Не более 10</label>
          </div>
          <div className={standart["item-right"]}>
            {
              form.photo 
              ?
              <FileUploaded uploadedFiles={form.photo ? form.photo : []} deleteFunction={''}/>
              :
              <FileUpload isMultiple={true} setUploadedFiles={setUploadedFiles} setSelectedFiles={setSelectedFiles} selectedFiles={selectedFiles} uploadedFiles={uploadedFiles}/>
            }
          </div>
        </div>
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Цвет</label>
          </div>
          <div className={standart["item-right"]}>
            <ColorChoose activeColor={form.color} setOption={setFunction} optionKey='color'/>
          </div>
        </div>
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Видео(youtube)</label>
          </div>
          <div className={standart["item-right"]}>
            <VideoLink videoLink={form.video} setOption={setFunction} optionKey='video'/>
          </div>
        </div>
    </>
  )
}
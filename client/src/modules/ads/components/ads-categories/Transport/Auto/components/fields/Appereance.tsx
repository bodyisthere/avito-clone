//импорт внешних пакетов
import React, { FC, useEffect, useState } from 'react'

//импорт стилей
import standart from '../../../../../../styles/ads.module.scss'

//импорт типов
import { car, carOld } from '../../../../../../../../types/ads/transportTypes'

//импорт функционала
import { uploadApi } from '../../../../../../../../store/api/uploadApi'

//импорт компонентов
import { FileUpload, ColorChoose, VideoLink, FileUploaded } from '../../../../../ads-ui'

interface IAppereance {
  form: car | carOld
  setFunction: any
  validationErrors: string[]
}

export const Appereance: FC<IAppereance> = ( { form, setFunction, validationErrors } ) => {
  const [uploadImg, { data } ] = uploadApi.useUploadImagesMutation();

  const [selectedFiles, setSelectedFiles] = useState();

  const handleImgUpload = async (e: any) => {
    const formData = new FormData();
    const files = e.target.files;
    if(files.length > 10 || files.length === 0) return;
    for(let i = 0; i < files.length; i++) {
      formData.append('files', files[i])
    }
    uploadImg(formData)
  }

  const deleteImg = (e: string) => {
    if(!form.photo) return;
    const edited = form.photo.filter(el => el !== e)
    setFunction('photo', edited);
  }

  useEffect(() => {
    if(data) setFunction('photo', data.data)
  }, [data])

  return (
    <>
      <div className={standart.title}>Внешний вид</div>
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Фотографии<br/>Не более 10*</label>
          </div>
          <div className={standart["item-right"]}>
            {
              Array.isArray(form.photo) && form.photo.length > 0 
              ?
              <FileUploaded 
              uploadedFiles={form.photo ? form.photo : []} 
              deleteFunction={deleteImg}
              />
              :
              <FileUpload 
              isMultiple={true} 
              onChange={handleImgUpload}
              />
            }
            {validationErrors.includes('photo') && <span className={standart['error-text']}><br/>Загрузите хотя бы одну фотографию</span>}
          </div>
        </div>
        <div className={standart.item}>
          <div className={standart["item-left"]}>
            <label className={standart.subtitle}>Цвет*</label>
          </div>
          <div className={standart["item-right"]}>
            <ColorChoose activeColor={form.color} setOption={setFunction} optionKey='color'/>
            {validationErrors.includes('color') && <span className={standart['error-text']}><br/>Выберите цвет</span>}
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
import axios, { AxiosResponse } from 'axios';
import React, { FC, useState } from 'react'

import { InputText, Button } from '../../../../../UI';
import { FileUpload, FileUploaded } from '../../../../ads';
// import { uploadImages,uploadStory } from '../../api/uploadImages';
import { uploadApi } from '../../../../../store/api/uploadApi';
import { storiesApi } from '../../../../../store/api/storiesApi'

interface IPopAddStory {

}

export const PopAddStory: FC<IPopAddStory> = () => {
  const [upload, {  }] = uploadApi.useUploadImagesMutation();
  const [postStory, {  }] = storiesApi.usePostStoryMutation();

  //заголовок
  const [title, setTitle] = useState<string>('');
  //для слайдов
  const [filesSlides, setFilesSlides] = useState<string[]>([]); //для создания формы отправки файлов
  const [uploadedFilesSlides, setUploadedFilesSlides] = useState<string[]>([]); //ссылки на загруженные файлы
  //для обложки
  const [fileCover, setFileCover] = useState<string[]>([]); //для создания формы отправки файлов
  const [uploadedFileCover, setUploadedFileCover] = useState<string[]>([]); //ссылки на загруженные файлы
  //ошибки
  const [error, setError] = useState<any>(null);


  const handleChangeFile = async (e: any, changeFunction: any) => {
    const formData = new FormData();
    const files = e.target.files;
    if(files.length > 6 || files.length === 0) return;
    for(let i = 0; i < files.length; i++) {
      formData.append('files', files[i])
    }
    upload(formData).unwrap().then(payload => changeFunction(payload.data))
  }

  const deleteFunction = (el: string, changeFunction: any) => {
    changeFunction((prev: any) => {
      return prev.filter((e: any) => e !== el)
    })
  }

  const sendStory = async () => {
    postStory({title, slides: uploadedFilesSlides, cover: uploadedFileCover[0]})
    .unwrap()
    .then(payload => console.log(payload))
  }
  
  return (
    <>
      <div className="pop-add-story__title">Добавить</div>
      <InputText onChange={e => setTitle(e.target.value)} value={title} clearInput={() => setTitle('')} placeholder='Введите заголовок истории'/>
      <div className="pop-add-story__files">
        <div className="pop-add-story__files-case">
          <span>Загрузите обложку слайда:</span>
          {/* <FileUpload isMultiple={false} setUploadedFiles={setFileCover} uploadedFiles={fileCover} onChange={(e: any) => handleChangeFile(e, setUploadedFileCover)}/> */}
          {uploadedFileCover.length !== 0 ? <FileUploaded uploadedFiles={uploadedFileCover} deleteFunction={(el: string) => deleteFunction(el, setUploadedFileCover)}/> : ''}
        </div>
        <div className="pop-add-story__files-case">
          <span>Загрузите слайды:(максимально - 6)</span>
          {/* <FileUpload isMultiple={true} setUploadedFiles={setFilesSlides} uploadedFiles={filesSlides} onChange={(e: any) => handleChangeFile(e, setUploadedFilesSlides)}/> */}
          {uploadedFilesSlides.length > 0 ? <FileUploaded uploadedFiles={uploadedFilesSlides} deleteFunction={(el: string) => deleteFunction(el, setUploadedFilesSlides)}/> : ''}
        </div>
      </div>
      <Button children='Загрузить' onClick={sendStory}/>
    </>
  )
}
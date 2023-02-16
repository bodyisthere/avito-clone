import React, { FC, useState } from 'react'

import { InputText } from '../../../../../UI';
import { FileUpload } from '../../../../ads/components/ads-ui';

interface IPopAddStory {

}

export const PopAddStory: FC<IPopAddStory> = () => {
  const [title, setTitle] = useState<string>('');
  const [files, setFiles] = useState<string[]>([]);

  const handleChangeFile = (e: any) => {
    console.log(e.target)
    const formData = new FormData();
    console.log(e)
    // const file = e.target.files[0]
    // formData.append('image', file);
    // const res = await fetch('http://localhost:4444/upload', {
    //     method: 'post',
    //     body: formData,
    //     headers: {
    //         authorization: localStorage.getItem('token'),
    //         type,
    //     }
    // })
    // return res;
  }

  return (
    <>
      <div className="pop-add-story__title">Добавить</div>
      <InputText onChange={e => setTitle(e.target.value)} value={title} clearInput={() => setTitle('')} placeholder='Введите заголовок истории'/>
      <div className="pop-add-story__files">
        {/* <div className="pop-add-story__files-case">
          <span>Загрузите обложку слайда:</span>
          <FileUpload isMultiple={false} setUploadedFiles={setFiles} uploadedFiles={files} onChange={handleChangeFile}/>
        </div> */}
        <div className="pop-add-story__files-case">
          <span>Загрузите слайды:</span>
          <FileUpload isMultiple={true} setUploadedFiles={setFiles} uploadedFiles={files} onChange={handleChangeFile}/>
        </div>
      </div>
    </>
  )
}
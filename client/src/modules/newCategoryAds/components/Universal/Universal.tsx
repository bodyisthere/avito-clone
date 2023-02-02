import React, { FC, useState } from 'react'

import { InputText } from '../../../../UI';
import { Textarea } from '../../../../UI/ADS-UI/Textarea';
import { Price } from '../../../../UI/ADS-UI/Price';

export const Universal: FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const [selectedFiles, setSelectedFiles] = useState<any>(['1','1','1','1','1','1','1','1','1','1',]);
  const [uploadedFiles, setUploadedFiles] = useState<any>(['1','1','1','1','1','1','1','1','1','1',]);

  return (
    <div className="universal">
      <div className="universal__title">Параметры</div>
      <form className="universal__form">
        <label>
          Название объявления
          <InputText onChange={e => setTitle(e.target.value)} value={title} clearInput={() => setTitle('')}/>
        </label>
        <label>
          Описание объявления
          <Textarea onChange={(e) => setDescription(e.target.value)} value={description} />
        </label>
        <label>
          Цена
          <Price onChange={(e) => setPrice(e.target.value)} value={price} />
        </label>
        {/* <UniversalFileUpload 
          selectedFiles={selectedFiles} 
          setSelectedFiles={setSelectedFiles}
          uploadedFiles={uploadedFiles}
          setUploadedFiles={setUploadedFiles}
        /> */}
      </form>
    </div>
  )
}
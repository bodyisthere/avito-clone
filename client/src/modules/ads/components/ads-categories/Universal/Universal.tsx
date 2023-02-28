import React, { FC, useState } from 'react'

import styles from './Universal.module.scss'

import { InputText } from '../../../../../UI';
import { Textarea, Price } from '../../ads-ui';

export const Universal: FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const [selectedFiles, setSelectedFiles] = useState<any>(['1','1','1','1','1','1','1','1','1','1',]);
  const [uploadedFiles, setUploadedFiles] = useState<any>(['1','1','1','1','1','1','1','1','1','1',]);

  return (
    <div className={styles["universal"]}>
      <div className={styles["universal__title"]}>Параметры</div>
      <form className={styles["universal__form"]}>
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
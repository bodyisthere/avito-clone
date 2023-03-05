//импорт внешних пакетов
import { FC } from 'react'

//импорт стилей
import styles from './FileUpload.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов

interface IFileUpload {
  selectedFiles?: any
  setSelectedFiles?: any
  uploadedFiles: any
  setUploadedFiles: any
  isMultiple: boolean
  onChange?: any
}

export const FileUpload: FC<IFileUpload> = ({ selectedFiles, setSelectedFiles, uploadedFiles, setUploadedFiles, onChange, isMultiple}) => {
  return (
    <label className={styles["file-upload"]} title='Загрузить фото'>
      <i className="fa-solid fa-camera"></i>
      <input accept="image/*,.png,.jpg,.jpeg" type="file" className={styles["file-upload--hidden"]} onChange={onChange} multiple={isMultiple}/>
    </label>
  )
}
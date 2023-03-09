//импорт внешних пакетов
import { FC } from 'react'

//импорт стилей
import styles from './FileUpload.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов

interface IFileUpload {
  isMultiple: boolean
  onChange?: any
}

export const FileUpload: FC<IFileUpload> = ({ onChange, isMultiple}) => {
  return (
    <label className={styles["file-upload"]} title='Загрузить фото' onChange={(e) => onChange(e)}>
      <i className="fa-solid fa-camera"></i>
      <input accept="image/*,.png,.jpg,.jpeg" type="file" className={styles["file-upload--hidden"]} multiple={isMultiple}/>
    </label>
  )
}
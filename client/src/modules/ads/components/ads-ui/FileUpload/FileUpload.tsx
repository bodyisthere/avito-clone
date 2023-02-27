import React, {FC} from 'react'

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
    <label className="file-upload" title='Загрузить фото'>
      <i className="fa-solid fa-camera"></i>
      <input accept="image/*,.png,.jpg,.jpeg" type="file" className="file-upload--hidden" onChange={onChange} multiple={isMultiple}/>
    </label>
  )
}
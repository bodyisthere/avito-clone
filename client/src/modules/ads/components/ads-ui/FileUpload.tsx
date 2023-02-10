import React, {FC} from 'react'

interface IFileUpload {
  selectedFiles?: any
  setSelectedFiles?: any
  uploadedFiles: any
  setUploadedFiles: any
  isMultiple: boolean
}

export const FileUpload: FC<IFileUpload> = ({ selectedFiles, setSelectedFiles, uploadedFiles, setUploadedFiles}) => {
  return (
    <label className="file-upload" title='Загрузить фото'>
      <i className="fa-solid fa-camera"></i>
      <input type="file" className="file-upload--hidden" />
    </label>
  )
}
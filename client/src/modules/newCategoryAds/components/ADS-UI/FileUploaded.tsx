import React, {FC} from 'react'

interface IFileUploaded {
  uploadedFiles: string[]
  setUploadedFiles: any
}

export const FileUploaded: FC<IFileUploaded> = ({ uploadedFiles, setUploadedFiles}) => {
  return (
    <div className="file-uploaded">
      {
        uploadedFiles.map((el, index) => {
          return (
            <div className="file-uploaded__file" key={index}>
              <img src="el" alt="" className="file-uploaded__img" />
              <button className="file-uploaded__delete"><i className="fa-solid fa-xmark"></i></button>
            </div>
          )
      })
      }
    </div>
  )
}
import React, {FC} from 'react'

interface IFileUploaded {
  uploadedFiles: string[]
  deleteFunction: any
}

export const FileUploaded: FC<IFileUploaded> = ({ uploadedFiles, deleteFunction}) => {
  return (
    <div className="file-uploaded">
      {
        uploadedFiles.map((el, index) => {
          return (
            <div className="file-uploaded__file" key={index}>
              <img src={`http://localhost:5000/uploads/${el}`} alt="" className="file-uploaded__img" />
              <button className="file-uploaded__delete" onClick={() => deleteFunction(el)}><i className="fa-solid fa-xmark"></i></button>
            </div>
          )
      })
      }
    </div>
  )
}
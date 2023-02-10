import React, {FC} from 'react'

interface IFileUploaded {
  uploadedFiles: string[]
  setOption: (key: string, value: any) => void
  optionKey: string
}

export const FileUploaded: FC<IFileUploaded> = ({ uploadedFiles, setOption, optionKey}) => {
  return (
    <div className="file-uploaded">
      {
        uploadedFiles.map((el, index) => {
          return (
            <div className="file-uploaded__file" key={index}>
              <img src="el" alt="" className="file-uploaded__img" />
              <button className="file-uploaded__delete" onClick={() => setOption(optionKey, uploadedFiles.filter(e => e !== el))}><i className="fa-solid fa-xmark"></i></button>
            </div>
          )
      })
      }
    </div>
  )
}
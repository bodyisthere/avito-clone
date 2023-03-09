import React, {FC} from 'react'

import styles from './FileUpload.module.scss'

interface IFileUploaded {
  uploadedFiles: string[]
  deleteFunction: any
}

export const FileUploaded: FC<IFileUploaded> = ({ uploadedFiles, deleteFunction}) => {
  return (
    <div className={styles["file-uploaded"]}>
      {
        uploadedFiles.map((el, index) => {
          return (
            <div className={styles["file-uploaded__file"]} key={index}>
              <img src={`http://localhost:5000/uploads/${el}`} alt="" className={styles["file-uploaded__img"]} />
              <button className={styles["file-uploaded__delete"]} onClick={() => deleteFunction(el)}><i className="fa-solid fa-xmark"></i></button>
            </div>
          )
      })
      }
    </div>
  )
}
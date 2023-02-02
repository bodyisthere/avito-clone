import React, { FC, useState } from 'react'

interface IVideoLink {
  videoLink: string | null
  setVideoInput: React.Dispatch<React.SetStateAction<string>>
  videoInput: string
}

export const VideoLink: FC<IVideoLink> = ( { videoLink, videoInput, setVideoInput} ) => {
  return (
    <div className="video-link">
      <input type="text" className="video-link__input" value={videoInput} placeholder="Ссылка на видео" onChange={(e) => setVideoInput(e.target.value)}/>
      {
        videoLink 
        ?
        <>
          <div className="video-link__left">
            <img src={`https://img.youtube.com/vi/${'NbKBgcCcb6E'}/mqdefault.jpg`} alt="" className="video-link__img" />
          </div>
          <div className="video-link__right">
            <div className="video-link__link">{videoLink}</div>
            <button className="video-link__delete">Удалить</button>
          </div>
        </>
        :
        ''
      }
    </div>
  )
}
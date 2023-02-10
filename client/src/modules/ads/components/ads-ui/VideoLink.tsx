import React, { FC, useState } from 'react'

interface IVideoLink {
  videoLink: string
  setOption: (key: string, value: any) => void
  optionKey: string
}

export const VideoLink: FC<IVideoLink> = ( { videoLink, optionKey, setOption} ) => {

  return (
    <div className="video-link">
      <input type="text" className="video-link__input" value={videoLink} placeholder="Ссылка на видео" onChange={(e) => setOption(optionKey, e.target.value)}/>
      {
        videoLink 
        ?
        <div className="video-link__info">
          <div className="video-link__left">
            <img src={`https://img.youtube.com/vi/JMJXvsCLu6s/3.jpg`} alt="" className="video-link__img" />
          </div>
          <div className="video-link__right">
            <div className="video-link__link">тут будет ссылка</div>
            <button className="video-link__delete" onClick={() => setOption(optionKey, null)}>Удалить</button>
          </div>
        </div>
        :
        ''
      }
    </div>
  )
}
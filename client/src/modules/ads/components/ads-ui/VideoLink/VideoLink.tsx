import React, { FC, useState } from 'react'

import styles from './VideoLink.module.scss'

interface IVideoLink {
  videoLink: string | null
  setOption: (key: string, value: any) => void
  optionKey: string
}

export const VideoLink: FC<IVideoLink> = ( { videoLink, optionKey, setOption} ) => {

  return (
    <div className={styles["video-link"]}>
      <input type="text" className={styles["video-link__input"]} value={videoLink ? videoLink : ''} placeholder="Ссылка на видео" onChange={(e) => setOption(optionKey, e.target.value)}/>
      {
        videoLink 
        ?
        <div className={styles["video-link__info"]}>
          <div className={styles["video-link__left"]}>
            <img src={`https://img.youtube.com/vi/JMJXvsCLu6s/3.jpg`} alt="" className={styles["video-link__img"]} />
          </div>
          <div className={styles["video-link__right"]}>
            <div className={styles["video-link__link"]}>тут будет ссылка</div>
            <button className={styles["video-link__delete"]} onClick={() => setOption(optionKey, null)}>Удалить</button>
          </div>
        </div>
        :
        ''
      }
    </div>
  )
}
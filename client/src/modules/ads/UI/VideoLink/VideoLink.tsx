//импорт внешних пакетов
import React, { FC, useState } from 'react'

//импорт стилей
import styles from './VideoLink.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов

interface IVideoLink {
  videoLink: string | null
  setOption: (key: string, value: any) => void
  optionKey: string
}

export const VideoLink: FC<IVideoLink> = ( { videoLink, optionKey, setOption} ) => {
  

  return (
    <div>
      <input 
        type="text" 
        className={styles.input} 
        value={videoLink ? videoLink : ''} 
        placeholder="Ссылка на видео" 
        onChange={(e) => setOption(optionKey, e.target.value)}
      />
      {
        videoLink 
        ?
        <div className={styles.info}>
          <div className={styles.left}>
            <img src={`https://img.youtube.com/vi/JMJXvsCLu6s/3.jpg`} alt="" />
          </div>
          <div className={styles.right}>
            <div className={styles.link}>тут будет ссылка</div>
            <button className={styles.delete} onClick={() => setOption(optionKey, null)}>Удалить</button>
          </div>
        </div>
        :
        ''
      }
    </div>
  )
}
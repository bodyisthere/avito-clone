import React, { FC, useState } from 'react'

import styles from './ColorChoose.module.scss'

interface IColorChoose {
  activeColor: "Белый" | "Серебрянный" | "Серый" | "Чёрный" | "Коричневый" | "Золотой" | "Бежевый" | "Красный" | "Бордовый" | "Оранжевый" | "Жёлтый" | "Зелёный" | "Голубой" | "Синий" | "Фиолетовый" | "Пурпурный" | "Розовый" | undefined,
  setOption: (key: string, value: any) => void
  optionKey: string
}

type Color = {
  text: string,
  color: string
}

export const ColorChoose: FC<IColorChoose> = ( { activeColor, optionKey, setOption } ) => {
  const [colors, setColors] = useState<Color[]>([
    {text: "Белый", color: "#ffffff"}, 
    {text: "Серебрянный", color: "#DCDCDC"}, 
    {text: "Серый", color: "#808080"}, 
    {text: "Чёрный", color: "#000000"}, 
    {text: "Коричневый", color: "#8B4513"}, 
    {text: "Золотой", color: "#FFD700"}, 
    {text: "Бежевый", color: "#FFFACD"}, 
    {text: "Красный", color: "#FF0000"}, 
    {text: "Бордовый", color: "#8B0000"}, 
    {text: "Оранжевый", color: "#FFA500"}, 
    {text: "Жёлтый", color: "#FFFF00"}, 
    {text: "Зелёный", color: "#008000"}, 
    {text: "Голубой", color: "#00BFFF"}, 
    {text: "Синий", color: "#0000FF"}, 
    {text: "Фиолетовый", color: "#800080"}, 
    {text: "Пурпурный", color: "#DA70D6"}, 
    {text: "Розовый", color: "#FFC0CB"}, 
  ])
  return (
    <div className={styles["color-choose"]}>
      {
        colors.map((el, index) => {
          return (
            <button 
              key={index} 
              className={`${styles['color-choose__color']} ${el.text === activeColor ? styles['color-choose__color--active'] : ''}`} 
              title={el.text} 
              style={{'background': el.color}} 
              onClick={() => setOption(optionKey, el.text)}
            >
            </button>
          )
        })
      }
    </div>
  )
}
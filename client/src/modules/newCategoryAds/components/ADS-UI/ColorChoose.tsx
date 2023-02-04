import React, { FC, useState } from 'react'

interface IColorChoose {
  activeColor: string,
  setActiveColor: React.Dispatch<React.SetStateAction<string>>
}

type Color = {
  text: string,
  color: string
}

export const ColorChoose: FC<IColorChoose> = ( { activeColor, setActiveColor } ) => {
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
    <div className="color-choose">
      {
        colors.map((el, index) => {
          return (
            <button key={index} className={`color-choose__color ${el.text === activeColor ? 'color-choose__color--active' : ''}`} title={el.text} style={{'background': el.color}} onClick={() => setActiveColor(el.text)}></button>
          )
        })
      }
    </div>
  )
}
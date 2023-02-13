import React, { FC, useEffect, useState } from 'react'
import { YMaps, Map, Placemark, Circle } from '@pbe/react-yandex-maps';
import axios from 'axios';


interface IMapInput {

}

export const MapInput: FC<IMapInput> = () => {
  const [value, setValue] = useState<string>('')
  
  return (
    <div className="map-input">
      <input className="map-input__input"></input>
    </div>
  )
}
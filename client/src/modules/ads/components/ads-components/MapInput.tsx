import React, { FC, useEffect, useState } from 'react'
import { YMaps, Map, Placemark, Circle } from '@pbe/react-yandex-maps';
import axios from 'axios';


interface IMapInput {

}

export const MapInput: FC<IMapInput> = () => {
  const [value, setValue] = useState<string>('');
  const [defaultState, setDefaultState] = useState<ymaps.IMapState | undefined>(undefined);
  const [data, setData] = useState<any>();

  const options: ymaps.IPlacemarkOptions | undefined = {
    iconLayout: 'default#image',
    iconImageHref: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconImageSize: [40, 40],
    iconImageOffset: [-20, -40],
  }
  
  return (
    <div className="map-input">
      <input value={value} onChange={e => setValue(e.target.value)} className="map-input__input"></input>
      <YMaps>
        {/* <Map defaultState={defaultState} width={'100%'} height={'350px'} >
          <Placemark geometry={[data.split(' ')[0], data.split(' ')[1]]} options={options} />
        </Map> */}
      </YMaps>
    </div>
  )
}
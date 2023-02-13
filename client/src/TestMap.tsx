import React, { FC, useEffect, useState } from 'react'
import { YMaps, Map, Placemark, Circle } from '@pbe/react-yandex-maps';
import axios from 'axios';


interface ITestMap {

}

export const TestMap: FC<ITestMap> = ({ }) => {
  const [data, setData] = useState<any>();
  const [city, setCity] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [house, setHouse] = useState<string>('');

  const defaultState: ymaps.IMapState | undefined = {
    center: [data.split(' ')[0], data.split(' ')[1]],
    zoom: 10,
  }

  const options: ymaps.IPlacemarkOptions | undefined = {
    iconLayout: 'default#image',
    iconImageHref: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconImageSize: [40, 40],
    iconImageOffset: [-20, -40],
  }

  async function fetchData() {
    const response = await axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=e2609034-a7cc-4cf2-94ed-ad7abb005f84&geocode=;${city}, +${street}+улица, +дом+${house}`);
    setData(response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' '));
  }

  console.log(data.split(' ')[0])

  return (
    <div className="local-location__radius" style={{'display': 'flex', 'flexDirection':'column'}}>
      <input placeholder='city' value={city} onChange={(e) => setCity(e.target.value)} type="text" style={{'width' : '400px', 'border':'2px solid black', 'height':'400px'}}/>
      <input placeholder='street' value={street} onChange={(e) => setStreet(e.target.value)} type="text" style={{'width' : '400px', 'border':'2px solid black', 'height':'400px'}}/>
      <input placeholder='house' value={house} onChange={(e) => setHouse(e.target.value)} type="text" style={{'width' : '400px', 'border':'2px solid black', 'height':'400px'}}/>
        <YMaps>
            <Map defaultState={defaultState} width={'100%'} height={'350px'} >
                <Placemark geometry={[data.split(' ')[0], data.split(' ')[1]]} options={options} />
            </Map>
        </YMaps>
        <button onClick={fetchData}>get data</button>
    </div>
)
}
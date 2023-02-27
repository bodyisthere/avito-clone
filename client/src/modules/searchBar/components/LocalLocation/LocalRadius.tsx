import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import axios from 'axios';
import styles from './LocalLocation.module.scss'

//    https://api.positionstack.com/v1/reverse/8f3b12fe202780bb5f77a2ab6059995b&region=Tatarstan

export const LocalRadius: FC = () => {
    const defaultState: ymaps.IMapState | undefined = {
        center: [55.751574, 37.573856],
        zoom: 10,
    }

    useEffect(() => {
        const params = {
            access_key: '8f3b12fe202780bb5f77a2ab6059995b',
            "query": "Main Street",
            "country": "US",
            "region": "Missouri"
        }
        // const API_KEY = 'e2609034-a7cc-4cf2-94ed-ad7abb005f84'
        // axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&geocode=Москва,+Тверская+улица,+дом+7`, {params})
        // .then(json => console.log(json))
    }, [])

    return (
        <div className={styles["local-location__radius"]}>
            <YMaps>
                <Map defaultState={defaultState} width={'100%'} height={'350px'}>
                    <Placemark geometry={[55.684758, 37.738521]} />
                </Map>
            </YMaps>
        </div>
    )
  }
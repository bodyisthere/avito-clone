import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from "../../../../hooks";

import styles from './LocalLocation.module.scss'

export const LocalSubway: FC = () => {
    const { metroes } = useAppSelector(state => state.locationReducer);


    return (
        <div className={styles["local-location__hood"]}>
            {
                metroes
                ?
                metroes.map((el, index) => {
                    return <div className={styles["local-location__hood-item"]} key={index}><input type="checkbox" name="" id="" />{el}</div>
                })
                :
                ''
            }
        </div>
    )
  }
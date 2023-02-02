import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks/redux';

export const LocalSubway: FC = () => {
    const { metroes } = useAppSelector(state => state.locationReducer);


    return (
        <div className="local-location__hood">
            {
                metroes
                ?
                metroes.map((el, index) => {
                    return <div className="local-location__hood-item" key={index}><input type="checkbox" name="" id="" />{el}</div>
                })
                :
                ''
            }
        </div>
    )
  }
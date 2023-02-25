import React, { FC, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useActions } from '../../../../hooks';


export const LocalHood: FC = () => {
    const { districts } = useAppSelector(state => state.locationReducer);
    const { setUserDistrict } = useActions();

    const [hoods, setHoods] = useState<string[] | []>([]);

    const toggleItem = (cur: string) => {
        console.log(hoods);
        setHoods(prev => [...prev, cur])
    }
    

    return (
        <div className="local-location__hood">
            {
                districts?.map((el, index): ReactNode => {
                    return <div className="local-location__hood-item" key={index} onClick={() => toggleItem(el)}><input type="checkbox"/>{el}</div>
                })
            }
        </div>
    )
  }
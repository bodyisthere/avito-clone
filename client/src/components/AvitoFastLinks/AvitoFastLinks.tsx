import React, { FC } from 'react'

import { Link } from 'react-router-dom'

import './AvitoFastLinks.scss'

interface IAvitoFastLinks {

}

export const AvitoFastLinks: FC<IAvitoFastLinks> = () => {
  return (
    <div className="avito-fast-links">
      <Link className="avito-fast-links__link" to='/'><img className="avito-fast-links__img" src="http://localhost:5000/uploads/2df8d56e-c1ff-45aa-8ecc-e4934c340c57.png" alt="" /></Link>
      <Link className="avito-fast-links__link" to=''>Авто</Link>
      <Link className="avito-fast-links__link" to=''>Недвижимость</Link>
      <Link className="avito-fast-links__link" to=''>Работа</Link>
      <Link className="avito-fast-links__link" to=''>Услуги</Link>
      <Link className="avito-fast-links__link" to=''>Ещё</Link>
    </div>
  )
}
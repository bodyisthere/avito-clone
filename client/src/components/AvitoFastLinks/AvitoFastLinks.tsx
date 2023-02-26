import React, { FC } from 'react'

import { Link } from 'react-router-dom'

interface IAvitoFastLinks {

}

export const AvitoFastLinks: FC<IAvitoFastLinks> = () => {
  return (
    <div className="avtio-fast-links">
      <Link to='/'><img src="http://localhost:3000/static/media/logo.94e353d9a363c01c51c6.png" alt="" /></Link>
      <Link to=''>Авто</Link>
      <Link to=''>Недивижимость</Link>
      <Link to=''>Работа</Link>
      <Link to=''>Услуги</Link>
      <Link to=''>Ещё</Link>
    </div>
  )
}
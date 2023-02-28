import React, { FC } from 'react'

import styles from './Loader.module.scss'

interface ILoader {
  widthMain: number
  widthAdditional: number
}

export const Loader: FC<ILoader> = ( { widthAdditional, widthMain } ) => {
  return (
    <div className={styles["loader"]} style={{'width': `${widthMain}px`, 'height': `${widthMain}px`}}>
      <div style={{'width': `${widthAdditional}px`, 'height': `${widthAdditional}px`}}></div>
      <div style={{'width': `${widthAdditional}px`, 'height': `${widthAdditional}px`}}></div>
      <div style={{'width': `${widthAdditional}px`, 'height': `${widthAdditional}px`}}></div>
      <div style={{'width': `${widthAdditional}px`, 'height': `${widthAdditional}px`}}></div>
    </div>
  )
}
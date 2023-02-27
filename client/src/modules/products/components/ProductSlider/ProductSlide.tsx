import React, { FC, useEffect, useRef } from 'react';

import styles from '../Products.module.scss'

interface IProductSlide {
  activeSlide: number
  index: number
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>
  width: string
}

export const ProductSlide: FC<IProductSlide> = ({activeSlide, index, setActiveSlide, width}) => {
  const root = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const { current } = root;
    if(current) current.addEventListener('mouseover', () => setActiveSlide(index))
  }, [])

  return (
    <div className={styles["product__slide-count"]} ref={root}>
      <span 
        className={`${styles['product__slide-span']} ${activeSlide === index && `${styles['product__slide-span--active']}`}`}
        style={{'width': width}}
        >
      </span>
    </div>
  )
}
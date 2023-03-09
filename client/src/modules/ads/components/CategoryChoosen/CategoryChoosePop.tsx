//импорт внешних пакетов
import React, { FC, useEffect } from 'react'

//импорт стилей
import styles from './CategoryChoosen.module.scss'

//импорт типов

//импорт функционала
import { useActions } from '../../../../hooks';

//импорт компонентов

interface ICategoryChoosePop {
  setIsPopOpen: React.Dispatch<React.SetStateAction<boolean>>
  setStep: any
}

export const CategoryChoosePop: FC<ICategoryChoosePop> = ( { setIsPopOpen, setStep } ) => {
  const { changeCategory } = useActions();

  return (
    <>
      <div className={styles["pop-text"]}>
        <p>Вы уверены, что хотите выйти назад?</p>
        <span style={{'fontSize':'50px'}}>🤔</span>
        <span className={styles["pop-span"]}>Весь прогресс откатится.</span>
      </div>
      <div className={styles.buttons}>
        <button 
          className={styles.back} 
          style={{'borderColor': 'red', 'color': 'red'}} 
          onClick={() => {setStep('category-choose');changeCategory([])}}>Да
        </button>
        <button 
          className={styles.back} 
          onClick={() => setIsPopOpen(false)}>Нет
        </button>
      </div>
    </>
  )
}
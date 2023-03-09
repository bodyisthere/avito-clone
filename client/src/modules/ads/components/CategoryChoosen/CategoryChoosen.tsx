//импорт внешних пакетов
import {FC, useState} from 'react'
import { useActions } from '../../../../hooks';
import { PopUp } from '../../../../UI';

//импорт стилей
import styles from './CategoryChoosen.module.scss'

//импорт типов

//импорт функционала
import { useFilterCategory } from './hooks/useFilterCategory'

//импорт компонентов
import { CategoryChoosePop } from './CategoryChoosePop'

interface ICategoryChoosen {
  setStep: any
}

export const CategoryChoosen: FC<ICategoryChoosen> = ( { setStep } ) => {
  const { prettyCategory, element } = useFilterCategory();
  
  const [isPopOpen, setIsPopOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      {
        isPopOpen
        &&
        <PopUp changeStateFunction={setIsPopOpen}>
          <CategoryChoosePop setIsPopOpen={setIsPopOpen} setStep={setStep}/>
        </PopUp>
      }
      <button 
        className={styles.back} 
        title='Назад'
        onClick={() => setIsPopOpen(true)}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <div className={styles.title}>
        <div className={styles["title-second"]}>Категория:</div>
        <div className={styles.subtitle}>{prettyCategory}</div>
      </div>
      {element ? element : ''}
    </div>
  )
}
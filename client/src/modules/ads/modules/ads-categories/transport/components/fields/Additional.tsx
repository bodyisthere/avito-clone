//импорт внешних пакетов
import { FC } from 'react'

//импорт стилей
import standart from '../../../../../styles/ads.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов
import { AdditionalItem } from '../../../../../components/Additional/AdditionalItem'

interface IAdditional {
  setForm: any
  data: {
    title: string
    content: Array<'select' | 'checkbox'>
    keyField: string
    selectData?: string[]
    checkboxData?: {title: null, data: {title: string}[]}
  }[]
}

export const Additional: FC<IAdditional> = ( { setForm, data } ) => {

  return (
    <>
      <div className={standart.title}>Дополнительные опции</div>
      <div className={standart.item}>
        <div className={standart.additional}>
          {
            data.map((el, index) => {
              return (
                <AdditionalItem
                  key={index}
                  content={el.content}
                  keyField={el.keyField}
                  setForm={setForm}
                  title={el.title}
                  checkboxData={el.checkboxData ? el.checkboxData : {title: null, data: [{title: ''}]}}
                  selectData={el.selectData ? el.selectData : []}
                />
              )
            })
          }
        </div>
      </div>
    </>
  )
}
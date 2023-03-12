//импорт внешних пакетов
import React, { FC } from 'react'

//импорт стилей
import styles from './AdditionalItem.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов
import { Select } from '../../../../UI'
import { CheckboxList } from '../../UI'

interface IAdditionalItem {
  title: string
  content: Array<'select' | 'checkbox'>
  setForm: any
  selectData?: string[]
  checkboxData?: {
    title: null;
    data: {title: string}[];
  }
  keyField: string
}

export const AdditionalItem: FC<IAdditionalItem> = ( { content, title, setForm, checkboxData, selectData, keyField } ) => {
  const setSelect = (e: any, keyField: any) => {
    setForm((prev: any) => {
      prev.additionalOptions[keyField] = e;
      return prev;
    })
  }

  const setCheckbox = (e: string, keyField: any) => {
    setForm((prev: any) => {
      const prevData = prev.additionalOptions[keyField];
      if(prevData === null) prev.additionalOptions[keyField] = [e];
      if(prevData?.includes(e)) prev.additionalOptions[keyField] = prevData.filter((el: any) => el !== e)
      if(!prevData?.includes(e)) prev.additionalOptions[keyField] = prevData ? [...prevData, e] : [e]
      return prev;
    })
  }

  const setSelectCheckbox = (e: string, keyField: any, type: "checkbox" | "select") => {
    if(type === "select") {
      setForm((prev: any) => {
        prev.additionalOptions[keyField].select = e;
        return prev;
      })
      return;
    }
    if(type === "checkbox") {
      setForm((prev: any) => {
        const prevData = prev.additionalOptions[keyField].checkbox
        if(prevData === null) {
          prev.additionalOptions[keyField].checkbox = [e];
          return prev;
        } 
        if(prevData?.includes(e)) {
          prev.additionalOptions[keyField].checkbox = prevData.filter((el: any) => el !== e)
        } else {
          prev.additionalOptions[keyField].checkbox = prevData ? [...prevData, e] : [e]
        }
        return prev
      }) 
    }
  }

  return (
    <div className={styles.item}>
      <p className={styles.title}>{title}</p>
      {
        content.includes('select') && content.includes('checkbox')
        &&
        <>
          <Select 
            onChange={(e: any) => setSelectCheckbox(e, keyField, "select")}
            options={selectData ? selectData : []}
          />
          <CheckboxList 
            changeFunction={(e: string) => setSelectCheckbox(e, keyField, "checkbox")}
            data={checkboxData ? checkboxData : {title: '', data: [{title: '', id: ''}]}}
            />
        </>
      }
      {
        content.includes('checkbox') && !content.includes('select')
        &&
        <CheckboxList 
          changeFunction={(e: string) => setCheckbox(e, keyField)}
          data={checkboxData ? checkboxData : {title: '', data: [{title: '', id: ''}]}}
        />
      }
      {
        content.includes('select') && !content.includes('checkbox')
        &&
        <Select 
          onChange={(e: any) => setSelect(e, keyField)}
          options={selectData ? selectData : []}
        />
      }
    </div>
  )
}
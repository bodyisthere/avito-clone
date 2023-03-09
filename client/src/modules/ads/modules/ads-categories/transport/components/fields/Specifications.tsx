//импорт внешних пакетов
import React, { FC, useState, useEffect } from 'react'
import { AxiosResponse } from 'axios'

//импорт стилей
import standart from '../../../../../styles/ads.module.scss'

//импорт типов

//импорт функционала
import { getAutoBrands } from '../../../../../api/getAutoBrands'
import { transportApi } from '../../../../../../../store/api/transportApi'

//импорт компонентов
import { Select } from '../../../../../../../UI'

interface ISpecifications {
  setFunction: any
  validationErrors: string[]
}

export const Specifications: FC<ISpecifications> = ( { setFunction, validationErrors } ) => {
  const { data: carBrandsData, isLoading } = transportApi.useGetAllCarBrandsQuery()

  return (
    <>
      <div className={standart.title}>Технические характеристики</div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Марка*</label>
        </div>
        <div className={standart["item-right"]}>
          {
            isLoading 
            ?
            'Загрузка'
            : 
            carBrandsData && <Select options={['-Не выбрано-',...carBrandsData.map(el => el.brand)]} onChange={(e: any) => setFunction('brand', e)}/>
          }
        {validationErrors.includes('brand') && <span className={standart['error-text']}><br/>Укажите марку авто</span>}
        </div>
      </div>
    </>
  )
}
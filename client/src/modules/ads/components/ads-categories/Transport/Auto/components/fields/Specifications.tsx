//импорт внешних пакетов
import React, { FC, useState, useEffect } from 'react'
import { AxiosResponse } from 'axios'

//импорт стилей
import standart from '../../../../../../styles/ads.module.scss'

//импорт типов

//импорт функционала
import { getAutoBrands } from '../../../../../../api/getAutoBrands'

//импорт компонентов
import { Select } from '../../../../../../../../UI'

interface ISpecifications {
  setFunction: any
}

export const Specifications: FC<ISpecifications> = ( { setFunction } ) => {
  const [carBrandsData, setCarBrandsData] = useState<string[]>();

  useEffect(() => {
    async function fetchData() {
      const res: AxiosResponse<{_id: string, brand: string}[]> = await getAutoBrands();
      const dataPretty = res.data.map(el => el.brand)
      setCarBrandsData(dataPretty);
    }
    fetchData()
  }, [])

  return (
    <>
      <div className={standart.title}>Технические характеристики</div>
      <div className={standart.item}>
        <div className={standart["item-left"]}>
          <label className={standart.subtitle}>Марка</label>
        </div>
        <div className={standart["item-right"]}>
          {
            carBrandsData
            ?
            <Select options={carBrandsData} onChange={(e: any) => setFunction('brand', e)}/>
            :
            ''
          }
        </div>
      </div>
    </>
  )
}
import { useEffect, useState } from 'react'

import { categoryFormat } from '../../../helpers/categoryFormat'
import { useAppSelector } from '../../../../../hooks'

import { AutoRun, AutoNew } from '../../../modules/ads-categories'
import { AllTerainVehicle } from '../../../modules/ads-categories/transport/components/constructor/Motorcycles/AllTerrainVehicle'
import { ATVsAndBuggies, Karting, MopenAndScooter, Motorcycles, Snowmobiles } from '../../../modules/ads-categories/transport'


export const useFilterCategory = () => {
  const { category } = useAppSelector(state => state.categoryChooseReducer);

  const [prettyCategory, setPrettyCategory] = useState(categoryFormat(category));
  const [element, setElement] = useState<any>();

  const categories = [
    {
      key: ['Транспорт', 'Автомобили', 'С пробегом'],
      element: <AutoRun />
    },
    {
      key: ['Транспорт', 'Автомобили', 'Новый'],
      element: <AutoNew />
    },
    {
      key: ['Транспорт', 'Мотоциклы и мототехника', 'Вездеходы'],
      element: <AllTerainVehicle />
    },
    {
      key: ['Транспорт', 'Мотоциклы и мототехника', 'Картинг'],
      element: <Karting />
    },
    {
      key: ['Транспорт', 'Мотоциклы и мототехника', 'Квадроциклы и багги'],
      element: <ATVsAndBuggies />
    },
    {
      key: ['Транспорт', 'Мотоциклы и мототехника', 'Мопеды и скутеры'],
      element: <MopenAndScooter />
    },
    {
      key: ['Транспорт', 'Мотоциклы и мототехника', 'Мотоциклы'],
      element: <Motorcycles />
    },
    {
      key: ['Транспорт', 'Мотоциклы и мототехника', 'Снегоходы'],
      element: <Snowmobiles />
    },
  ]

  const filterFunction = () => {
    let iCount = 0;
    let result = null;
    while(!result && iCount <= categories.length - 1) {
      if(JSON.stringify(categories[iCount].key) === JSON.stringify(category)) {
        result = categories[iCount].element;
      }
      iCount++;
    }
    return result;
  }

  useEffect(() => {
    setElement(filterFunction);
  }, [])

  return {
    prettyCategory,
    element
  }
}
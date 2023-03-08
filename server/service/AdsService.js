import { ApiError } from "../exceptions/ApiError.js";
import CarNewModel from "../models/ads/transport/car/CarNewModel.js"
import CarOldModel from "../models/ads/transport/car/CarOldModel.js";

const tags = [
  {
    tag: ['Транспорт', 'Автомобили', 'С пробегом'],
    model: CarOldModel,
  },
  {
    tag: ['Транспорт', 'Автомобили', 'Новый'],
    model: CarNewModel,
  },
  {
    tag: ['Транспорт', 'Автомоби321321ли', 'Новый'],
    model: CarNewModel,
  },
]


const findCategory = (t) => {
  let iCount = 0;
  let result = false;
  while(tags.length - 1 >= iCount && !result) {
    if(JSON.stringify(tags[iCount].tag) === JSON.stringify(t)) {
      let result = true;
      result = tags[iCount];
      return result.model;
    }
    iCount += 1;
    return result;
  }
}

class AdsService {
  async post(body, userId) {
    console.log(body)
    const model = findCategory(body.tags);
    if(!model) throw ApiError.BadRequest('Тегов, которые вы указали не существует');

    body.meetingPoint = '321'
    const form = {
      data: body,
      owner: userId,
    };
    const result = await model.create(form)

  }
}

export default new AdsService();
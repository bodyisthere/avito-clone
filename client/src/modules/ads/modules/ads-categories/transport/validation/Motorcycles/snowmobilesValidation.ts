import { ISnowmobiles } from "../../types/transport/Motorcycles/ISnowmobiles";

export const snowmobilesValidation = (form: ISnowmobiles) => {
  let errors = [];

  if(!form.name) errors.push('name')
  if(!form.brand) errors.push('brand')
  if(!form.type) errors.push('type')
  if(!form.yearOfIssue) errors.push('yearOfIssue')
  if(!form.engineType) errors.push('engineType')
  if(!form.power) errors.push('power')
  if(!form.engineCapacity) errors.push('engineCapacity')
  if(!form.maxPassengers) errors.push('maxPassengers')
  if(!form.trackWidth) errors.push('trackWidth')
  if(!form.availability) errors.push('availability')
  if(!form.condition) errors.push('condition')
  if(!form.mileage) errors.push('mileage')
  if(!form.photo) errors.push('photo')
  if(!form.description) errors.push('description')
  if(!form.price) errors.push('price')


  if(errors.length > 0) {
    window.scrollTo(0, 0)
    return errors;
  }
  return errors;
}
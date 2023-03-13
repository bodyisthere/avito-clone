import { carOld } from "../../types/transport/Auto/ICarOld";

export const carOldValidation = (form: carOld) => {
  let errors = [];
  if(!form.name) errors.push('name')
  if(!form.type || form.type === '-Не выбрано-') errors.push('type')
  if(!form.photo) errors.push('photo')
  if(!form.color) errors.push('color')
  if(!form.VIN) errors.push('vin')
  if(!form.brand || form.brand === '-Не выбрано-') errors.push('brand')
  if(!form.mileage) errors.push('mileage')
  if(!form.condition) errors.push('condition')
  if(!form.vehiclePassport || form.vehiclePassport === '-Не выбрано-') errors.push('vehiclePassport')
  if(!form.vehiclePassportOwners) errors.push('vehiclePassportOwners')
  if(!form.description) errors.push('description')
  if(!form.price) errors.push('price')

  if(errors.length > 0) {
    window.scrollTo(0, 0)
    return errors;
  }
  return errors;
}
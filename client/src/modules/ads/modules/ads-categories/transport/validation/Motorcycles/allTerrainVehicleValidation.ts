import { IAllTerrainVehicle } from "../../types/transport/Motorcycles/IAllTerrainVehicle"

export const allTerrainVehicleValidation = (form: IAllTerrainVehicle) => {
  let errors = [];
  if(!form.name) errors.push('name')
  if(!form.photo) errors.push('photo')
  if(!form.condition) errors.push('condition')
  if(!form.availability) errors.push('availability')
  if(!form.mileage) errors.push('mileage')
  if(!form.description) errors.push('description')
  if(!form.price) errors.push('price')
  if(!form.brand) errors.push('brand')
  if(!form.type) errors.push('type')
  if(!form.yearOfIssue) errors.push('yearOfIssue')
  if(!form.power) errors.push('power')
  if(!form.engineCapacity) errors.push('engineCapacity')
  if(!form.maxPassengers) errors.push('maxPassengers')
  if(errors.length > 0) {
    window.scrollTo(0, 0)
    return errors;
  }
  return errors;
}
import { ITrucksAndSpeicalVehicles } from "../../types/transport/TrucksAndSpecialVehicles/ITrucksAndSpeicalVehicles"

export const trucksAndSpeicalVehiclesValidation = (form: ITrucksAndSpeicalVehicles) => {
  let errors = [];
  if(!form.name) errors.push('name')
  if(!form.photo) errors.push('photo')
  if(!form.condition) errors.push('condition')
  if(!form.description) errors.push('description')
  if(!form.price) errors.push('price')
  if(errors.length > 0) {
    window.scrollTo(0, 0)
    return errors;
  }
  return errors;
}
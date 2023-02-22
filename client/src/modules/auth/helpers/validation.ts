import { IErrorValidation } from "../components/auth-types"

interface IValidationRegistration {
  password: string,
  passwordRepeat: string, 
  setError: React.Dispatch<React.SetStateAction<IErrorValidation | null>>
}

export const validationRegistartion = ({ password, passwordRepeat, setError }: IValidationRegistration) => {
  if(password !== passwordRepeat) {
    setError({errors: [{value: '', msg: '', param: 'password', location: ''}, {value: '', msg: '', param: 'passwordRepeat', location: ''}], message: 'Пароли не совпадают'});
    return false;
  }
  return true;
}
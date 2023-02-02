interface IValidationRegistration {
  name: string, 
  email: string, 
  password: string,
  passwordRepeat: string, 
  setError: React.Dispatch<React.SetStateAction<{
    fields: number[];
    message: string[];
  } | null>>
}

export const validationRegistartion = (body: IValidationRegistration) => {
  if(body.password !== body.passwordRepeat) body.setError({fields: [3, 4], message: ['Пароли не совпадают']});
}
import { IErrorValidation } from "../components/auth-types";

export const checkFieldOnError = (error: IErrorValidation, field: string) => {
  let result = false;
  let message = '';
  error?.errors?.forEach((el) => {
    if(el.param === field) {
      result = true;
      message = el.msg;
    }
  })
  return {result, message}
}
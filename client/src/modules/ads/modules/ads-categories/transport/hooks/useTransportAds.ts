import { useState } from 'react'

export const useTransportAds = (schema: any, validation: any) => {
  const [form, setForm] = useState(schema);
  const [validationErrors, setValidationErrors] = useState<any>([]);

  const setFunction = (key: string, value: any) => {
    setForm((prev: any) => {
      return {
        ...prev, [key] : value
      } as typeof schema
    })
  } 

  const submitForm = () => {
    setValidationErrors(validation(form));
  }

  return {
    validationErrors, setFunction, submitForm,
    form, setForm
  }
}
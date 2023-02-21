export interface IAuth {
  setCondition: React.Dispatch<React.SetStateAction<"log" | "reg" | "recover">>
  setStep?: React.Dispatch<React.SetStateAction<"reg" | "send-activate-link">>
}

export interface IErrorValidation {
  status?: number
  errors?: {value: string, msg: string, param: string, location: string}[] 
  message: string
}
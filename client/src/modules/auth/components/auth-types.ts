export interface IAuth {
  setCondition: React.Dispatch<React.SetStateAction<"log" | "reg" | "recover">>
  setStep?: React.Dispatch<React.SetStateAction<"reg" | "send-activate-link">>
}
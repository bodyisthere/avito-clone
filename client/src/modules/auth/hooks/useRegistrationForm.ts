import { useState } from "react"

import { useActions } from "../../../hooks";
import { authApi } from "../../../store/api/authApi";
import { IErrorValidation } from "../components/auth-types";
import { validationRegistartion } from "../helpers/validation";

export const useRegistrationForm = (setStep: any) => {
  const { registration, setAuth, setAuthPop } = useActions();
  const [registrationSubmit, {data, isLoading, isError}] = authApi.useRegistrationMutation();

  const [error, setError] = useState<IErrorValidation | null>(null)
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");
  const [rememberPassword, setRememberPassword] = useState<boolean>(false);
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);

  const registrationSend = () => {
    const isContinue = validationRegistartion({password, passwordRepeat, setError});
    if(!isContinue) return;
    registrationSubmit({ email, password, name })
    .unwrap()
    .then((payload) => {
      registration(payload);
      setStep("send-activate-link");
    })
    .catch((error) => setError(error.data));
  }

  return {
    name, setName, 
    email, setEmail, 
    password, setPassword, 
    passwordRepeat, setPasswordRepeat,
    rememberPassword, setRememberPassword,
    isPasswordShow, setIsPasswordShow,
    error, setError,
    isError, isLoading,
    registrationSend
  }
}
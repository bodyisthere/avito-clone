import React, { FC, useEffect, useState } from "react";

import "./App.scss";
import { useActions, useAppSelector } from "./hooks";
import { AuthPop } from "./modules/auth";
import { Header } from "./modules/header";
import { Navigation } from "./routes/Routes";

import { authApi } from "./store/api/authApi";
import { userApi } from "./store/api/userApi";

import { Loader } from "./UI";
import { ConditionInfo } from "./components/ConditionInfo/ConditionInfo";

const App: FC = () => {
  const { authCheck: authCheckStore } = useActions();
  const { isAuthPopOpen } = useAppSelector(state => state.userReducer)

  const [authCheck, { data: authData, isLoading }] = authApi.useLazyCheckAuthQuery();

  const [isConditionInfoOpen, setIsConditionInfoOpen] = useState<boolean>(false);
  const [conditionInfoMessage, setConditionInfoMessage] = useState<string>('');

  useEffect(() => {
    if(localStorage.getItem('token')) {
      authCheck()
      .unwrap()
      .then(payload => authCheckStore(payload))
      .catch(err => {
        if(err) {
          console.log(err);
          setIsConditionInfoOpen(true);
          setConditionInfoMessage('Прошло много времени с вашей последней авторизации, авторизуйтесь заново.')
        }
      });
    }
  }, [])

  
  return (
    <>
      {
        isLoading
        ?
        <div className="app__loading">
          <Loader />
        </div>
        :
        <>
          <Header />
          {isConditionInfoOpen && <ConditionInfo closeFunction={() => setIsConditionInfoOpen(false)} message={conditionInfoMessage} isError={true}/>}
          {isAuthPopOpen && <AuthPop /> }
          <Navigation />
        </>
      }
    </>
  );
};

export default App;

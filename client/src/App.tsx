import React, { FC, useEffect, useState } from "react";

import './App.scss'
import { useAppSelector } from "./hooks";

import { Loader } from "./UI";
import { AuthPop } from "./modules/auth";
import { Header } from "./modules/header";
import { Navigation } from "./routes/Routes";
import { ConditionInfo } from "./components/ConditionInfo/ConditionInfo";
import { useCheckAuth } from "./hooks/app-hooks/useCheckAuth";
import { SideBar } from "./components/SideBar/SideBar";

import { Button } from "./UI/Button/Button";

const App: FC = () => {
  const [isConditionInfoOpen, setIsConditionInfoOpen] = useState<boolean>(false);
  const [conditionInfoMessage, setConditionInfoMessage] = useState<string>('');
  
  const { isAuthPopOpen } = useAppSelector(state => state.userReducer)  
  const { isLoadingAuth } = useCheckAuth(setIsConditionInfoOpen, setConditionInfoMessage);

  return (
    <>
      {
        isLoadingAuth
        ?
        <div className="app__loading">
          <Loader widthMain={80} widthAdditional={64}/>
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

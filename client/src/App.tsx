import React, { FC, useEffect, useState } from "react";

import "./App.scss";
import { useActions, useAppSelector } from "./hooks";
import { AuthPop } from "./modules/auth";
import { Header } from "./modules/header";
import { Navigation } from "./routes/Routes";

import { authApi } from "./store/api/authApi";

const App: FC = () => {
  const { authCheck: authCheckStore } = useActions();
  const { isAuthPopOpen } = useAppSelector(state => state.userReducer)

  const [authCheck, { error }] = authApi.useLazyCheckAuthQuery();

  useEffect(() => {
    if(localStorage.getItem('token')) {
      authCheck().then(payload => authCheckStore(payload.data)).catch(err => {
        if(err) {
          // authCheck().then(payload => authCheckStore(payload.data))
        }
      });
    }
  }, [])

  return (
    <>
      <Header />
      {isAuthPopOpen && <AuthPop /> }
      <Navigation />
    </>
  );
};

export default App;

import React, { FC, useEffect, useState } from "react";

import "./App.scss";
import { AuthPop } from "./modules/auth";
import { Header } from "./modules/header";
import { useAppDispatch, useAppSelector } from "./hooks/redux-hooks/redux";
import { Navigation } from "./routes/Routes";
import { getAllCategories } from "./store/actionCreator";

const App: FC = () => {
  const {isOpen} = useAppSelector(state => state.authReducer)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategories)
  }, [])

  return (
    <>
      <Header />
      <Navigation />
      {isOpen ? <AuthPop /> : ''}
    </>
  );
};

export default App;

import React, { FC, useEffect, useState } from "react";

import "./App.scss";
import { AuthPop } from "./modules/auth";
import { Header } from "./modules/header";
import { useAppDispatch, useAppSelector } from "./hooks/redux-hooks/redux";
import { Navigation } from "./routes/Routes";
import Category from './store/actions/categoryAction'
import User from "./store/actions/userAction";
import { ConditionInfo } from "./components/ConditionInfo/ConditionInfo";

const App: FC = () => {
  const dispatch = useAppDispatch();
  // const { userDto } = useAppSelector(state => state.userReducer)

  //debounce demo
  //const debounced = useDebounce(стейт)
  //useEffect(() => console.log(debounced), [debounced])

  useEffect(() => {
    dispatch(Category.getAllCategories)
    dispatch(User.login)
  }, [])

  return (
    <>
      <Header />
      <AuthPop />
      {/* <ConditionInfo message="e" closeFunction={'e'} isError={false}/> */}
      <Navigation />
      {/* {userDto.id ? <AuthPop /> : ''} */}
    </>
  );
};

export default App;

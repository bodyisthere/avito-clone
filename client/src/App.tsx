import React, { FC, useEffect, useState } from "react";

import "./App.scss";
import { AuthPop } from "./modules/auth";
import { Header } from "./modules/header";
import { Navigation } from "./routes/Routes";

const App: FC = () => {
  return (
    <>
      <Header />
      <Navigation />
    </>
  );
};

export default App;

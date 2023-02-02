import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { MainPage } from "../pages/MainPage/MainPage";
import { NewAds } from "../pages/NewAds/NewAds";


export const Navigation: FC  = () => {
    return (
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/addads" element={<NewAds />}></Route>
          <Route path="*" element={''}></Route>
        </Routes>
    )
}
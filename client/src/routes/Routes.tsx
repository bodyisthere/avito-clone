import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { AdminPage } from "../pages/AdminPage/AdminPage";

import { MainPage } from "../pages/MainPage/MainPage";
import { NewAds } from "../pages/NewAds/NewAds";
import { ProfileEditPage } from "../pages/ProfileEditPage/ProfileEditPage";


export const Navigation: FC  = () => {
    return (
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/addads" element={<NewAds />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
          <Route path="/edit-profile" element={<ProfileEditPage />}></Route>
          <Route path="*" element={''}></Route>
        </Routes>
    )
}
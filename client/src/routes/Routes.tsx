import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { AdminPage } from "../pages/AdminPage/AdminPage";

import { MainPage } from "../pages/MainPage/MainPage";
import { NewAds } from "../pages/NewAds/NewAds";
import { ProfileEditPage } from "../pages/ProfileEditPage/ProfileEditPage";
import { Favorites } from "../pages/Favorites/Favorites";
import { Notifications } from "../pages/Notifications/Notifications";
import { Dialogues } from "../pages/Dialogues/Dialogues";
import { Cart } from "../pages/Cart/Cart";

import { MyAds } from "../pages/MyAds/MyAds"
import { MyOrders } from "../pages/MyOrders/MyOrders"
import { MyReviews } from "../pages/MyReviews/MyReviews"
import { Wallet } from "../pages/Wallet/Wallet"
import { PaidServices } from "../pages/PaidServices/PaidServices"
import { SpecialOffers } from "../pages/SpecialOffers/SpecialOffers"
import { ProfileControl } from "../pages/ProfileControl/ProfileControl"
import { Safety } from "../pages/Safety/Safety"
import { Settings } from "../pages/Settings/Settings"
import { Delivery } from "../pages/Delivery/Delivery"

export const Navigation: FC  = () => {
    return (
        <Routes>
          {/* Домашняя страница */}
          <Route path="/" element={<MainPage />}></Route>

          {/* Только для админов */}
          <Route path="/admin" element={<AdminPage />}></Route>

          {/* Добавление нового поста */}
          <Route path="/addads" element={<NewAds />}></Route>

          {/* Изменение профиля */}
          <Route path="/edit-profile" element={<ProfileEditPage />}></Route>

          {/* Избранное */}
          <Route path="/favorites" element={<Favorites />}></Route>

          {/* Уведомления */}
          <Route path="/notifications" element={<Notifications />}></Route>

          {/* Диалоги */}
          <Route path="/dialogues" element={<Dialogues />}></Route>

          {/* Корзина */}
          <Route path="/cart" element={<Cart />}></Route>
          
          {/* Мои объявления */}
          <Route path="/my-ads" element={<MyAds />}></Route>

          {/* Мои заказы */}
          <Route path="/my-orders" element={<MyOrders />}></Route>

          {/* Мои отзывы */}
          <Route path="/my-reviews" element={<MyReviews />}></Route>

          {/* Кошелёк */}
          <Route path="/wallet" element={<Wallet />}></Route>

          {/* Платные услуги */}
          <Route path="/paid-services" element={<PaidServices />}></Route>

          {/* Спецпредложения */}
          <Route path="/special-offers" element={<SpecialOffers />}></Route>
          
          {/* Управление профилем */}
          <Route path="/profile/basic" element={<ProfileControl />}></Route>

          {/* Защита профиля */}
          <Route path="/profile/safety" element={<Safety />}></Route>

          {/* Настройки */}
          <Route path="/profile/settings" element={<Settings />}></Route>

          {/* Авито доставка */}
          <Route path="/profile/settings/delivery" element={<Delivery />}></Route>

          {/* Если роута не обнаружено, то сюда */}
          <Route path="*" element={''}></Route>
        </Routes>
    )
}
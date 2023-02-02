import React, { FC, useState } from "react";

import "./MainPage.scss";
import { StoriesBlock } from "../../modules/stories";
import { Products } from "../../modules/products";
import { SearchBar } from "../../modules/searchBar";
import { PopularCategories } from "../../components/PopularCategories/PopularCategoires";
import { RecentlyWatched } from "../../components/RecentlyWatched/RecentlyWatched";

export const MainPage: FC = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__top">
          <SearchBar />
          <PopularCategories />
        </div>
        <div className="main__bottom">
          <div className="main__bottom-left">
            <StoriesBlock />
            <Products />
          </div>
          <div className="main__bottom-right">
            {/* <RecentlyWatched /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

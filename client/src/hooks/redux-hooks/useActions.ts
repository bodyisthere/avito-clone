import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { adsActions } from "../../modules/ads";
import { userActions } from "../../store/slices/userSlice";
import { locationActions } from "../../store/slices/locationSlice";
import { categoryActions } from "../../store/slices/categorySlice";

const actions = {
  //тут экшены из стора
  //...example
  ...categoryActions,
  ...adsActions,
  ...userActions,
  ...locationActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch);
}
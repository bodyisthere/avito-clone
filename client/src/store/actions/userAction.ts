import axios from "axios";

import { AppDispatch } from "../store";
import AuthService from "../../api/AuthService";
import { userSlice } from "../slices/userSlice";


class User {
  async login(dispatch: AppDispatch) {
    try {
      dispatch(userSlice.actions.login())
      // const response = await AuthService.login('email', 'password')
      // dispatch(userSlice.actions.loginSuccess(response))
    } catch (e: any) {
      console.log(e)
      dispatch(userSlice.actions.loginError(e))
    }
  }
}

export default new User();

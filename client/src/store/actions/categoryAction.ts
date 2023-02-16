import axios from "axios";

import { AppDispatch } from "../store";
import { categorySlice, ICategoryData } from "../slices/categorySlice";

export class Category {
  async getAllCategories(dispatch: AppDispatch) {
    try {
      dispatch(categorySlice.actions.getAll());
      const response = await axios.get<ICategoryData[]>('http://localhost:5000/get-all-categories');
      dispatch(categorySlice.actions.getAllSuccess(response.data));
    } catch (e) {
      dispatch(categorySlice.actions.getAllError('3'))
    }
  }
}

export default new Category()

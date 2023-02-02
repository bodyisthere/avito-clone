import axios from "axios";

import { ICities } from "../types/types";

export const getCities = async (city: string) =>{
  return await axios.get<ICities[]>("http://localhost:5000/get-cities", {params: {city}})
}

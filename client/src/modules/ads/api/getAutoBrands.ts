import axios from "axios"

export const getAutoBrands = async () => {
  const result = await axios.get('http://localhost:5000/get-all-car-brands');
  return result;
}
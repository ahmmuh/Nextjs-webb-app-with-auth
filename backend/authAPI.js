import axios from "axios";
import { BASE_URL } from "./base_url";
//Authentication

//Login

export const loginUser = async (credentials) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, credentials);
    return res.data;
  } catch (error) {
    console.error(
      `Något gick fel vid inloggning, Status: ${error.response?.status} Felmeddelande: ${error.response?.statusText}`
    );
  }
};

//Logout

export const logoutUser = async () => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/logout`);
    return res.data;
  } catch (error) {
    `Något gick fel vid utloggning, Status: ${error.response?.status} Felmeddelande: ${error.response?.statusText}`;
  }
};

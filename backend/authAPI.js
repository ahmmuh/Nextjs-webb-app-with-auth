import axios from "axios";
import { BASE_URL } from "./base_url";
//Authentication

//Login

export const loginUser = async (credentials) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, credentials, {
      withCredentials: true,
    });

    //Bara test data
    const userResponse = await axios.get(
      "http://localhost:5000/api/auth/currentUser",
      {
        withCredentials: true,
      }
    );
    console.log("Inloggad användare:", userResponse.data.inloggedUser);

    //Test data slut
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

//Current inlogged User
export const getCurrentLogedUser = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/auth/currentUser`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error(
      `Något gick fel vid inloggning, Status: ${error.response?.status} Felmeddelande: ${error.response?.statusText}`
    );
    throw error;
  }
};

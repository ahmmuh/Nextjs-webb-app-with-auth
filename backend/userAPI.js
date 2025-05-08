import axios from "axios";
import { BASE_URL } from "./base_url";

//Register new Användare
export const registerUser = async (newUser) => {
  try {
    const res = await axios.post(`${BASE_URL}/users`, newUser);
    return res.data;
  } catch (error) {
    console.error(`Vid skapandet av ny Användare, error: ${error.message}`);
  }
};

export const getUsers = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/users`);
    return res.data;
  } catch (error) {
    console.error(`Kunde inte hämta users, error: ${error.message}`);
  }
};

export const getUser = async (userId) => {
  try {
    const res = await axios.get(`${BASE_URL}/users/${userId}`);
    return res.data;
  } catch (error) {
    console.error(`Kunde inte hämta user, error: ${error.message}`);
  }
};

export const updateUser = async (userId, updatedUser) => {
  try {
    const res = await axios.patch(`${BASE_URL}/users/${userId}`, updatedUser);
    return res.data;
  } catch (error) {
    console.error(`Kunde inte hämta user, error: ${error.message}`);
  }
};

export const deleteUser = async (userId) => {
  try {
    const res = await axios.delete(`${BASE_URL}/users/${userId}`);
    return res.data;
  } catch (error) {
    console.error(`Kunde inte hämta user, error: ${error.message}`);
  }
};

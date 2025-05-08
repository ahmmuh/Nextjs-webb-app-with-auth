import axios from "axios";
import { BASE_URL } from "./base_url";

//Add new book
export const addBook = async (newBook) => {
  try {
    const res = await axios.post(`${BASE_URL}/books`, newBook);
    return res.data;
  } catch (error) {
    return console.error(
      `Något gick fel vid skapandet av ny book, status: ${error.response?.status}, message: ${error.response?.statusText}`
    );
  }
};

export const getBooks = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/books`);
    return res.data;
  } catch (error) {
    console.error(`Kunde inte hämta böcker, error: ${error.message}`);
  }
};

export const getBook = async (bookId) => {
  try {
    const res = await axios.get(`${BASE_URL}/books/${bookId}`);
    return res.data;
  } catch (error) {
    console.error(`Kunde inte hämta book, error: ${error.message}`);
  }
};

export const updateBook = async (bookId, updatedBook) => {
  try {
    const res = await axios.patch(`${BASE_URL}/books/${bookId}`, updatedBook);
    return res.data;
  } catch (error) {
    console.error(`Kunde inte hämta book, error: ${error.message}`);
  }
};

export const deleteBook = async (bookId) => {
  try {
    const res = await axios.delete(`${BASE_URL}/books/${bookId}`);
    return res.data;
  } catch (error) {
    console.error(`Kunde inte hämta book, error: ${error.message}`);
  }
};

// "use client";
// import React, { useState, useEffect } from "react";
// import { getBooks } from "../backend/bookAPI";

// export const UseFetchUsers = () => {
//   const [loading, setLoading] = useState(true);
//   const [books, setBooks] = uBeState([]);
//   const [errors, setErrors] = useState(null);

//   //Fetch books

//   const fetchBooks = async () => {
//     try {
//       const bookLista = await getBooks();
//       if (bookLista.length === 0) {
//         return console.log("Det finns inga böcker o visa");
//       }
//       setBooks(bookLista);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error", error.message);
//       setLoading(false);
//       setErrors(error);
//     }
//   };

//   // call useEffect

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   //Return loading, books,errors som ett objekt
//   return {
//     books,
//     loading,
//     errors,
//   };
// };

"use client";
import React, { useState, useEffect } from "react";
import { getUsers } from "../backend/userAPI";

export const UseFetchUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = uBeState([]);
  const [errors, setErrors] = useState(null);

  //Fetch books

  const fetchUsers = async () => {
    try {
      const UserLista = await getUsers();
      if (UserLista.length === 0) {
        return console.log("Det finns inga Users o visa");
      }
      setUsers(UserLista);
      setLoading(false);
    } catch (error) {
      console.error("Error", error.message);
      setLoading(false);
      setErrors(error);
    }
  };

  // call useEffect

  useEffect(() => {
    fetchUsers();
  }, []);

  //Return loading, books,errors som ett objekt
  return {
    users,
    loading,
    errors,
  };
};

"use client";
import React, { useState, useEffect } from "react";
import { getUsers } from "../backend/userAPI";
import { getCurrentLogedUser } from "../backend/authAPI";

export const UseFetchCurrentUser = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState(null);

  //Fetch books

  const fetchUser = async () => {
    try {
      const response = await getCurrentLogedUser();
      if (!response) {
        return console.log("Det finns inga User o visa");
      }
      setUser(response || {});
      setLoading(false);
    } catch (error) {
      console.error("Error", error.message);
      setLoading(false);
      setErrors(error);
    }
  };

  // call useEffect

  useEffect(() => {
    fetchUser();
  }, []);

  //Return loading, books,errors som ett objekt
  return {
    user,
    loading,
    errors,
  };
};

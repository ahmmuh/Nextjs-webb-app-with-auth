"use client";

import React, { useState } from "react";

function UserRegistrationForm() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      password: user.password,
    };
    console.log("NY användare", newUser);

    try {
      //Call addUser function from backend

      setUser(newUser); //Kanske inte behövs
    } catch (error) {
      console.error("Kunde inte skapa ny användare");
      return;
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="form-container w-full px-10">
        <h4>Registrera nya användare</h4>
        <form className="mt-3">
          <div className="mb-4">
            <input
              className="border border-b-2 border-b-orange-400 p-1 w-1/2"
              type="text"
              name="firstName"
              placeholder="Förnamn"
            />
          </div>
          <div className="mb-4">
            <input
              className="border border-b-2 border-b-orange-400 p-1 w-1/2"
              type="text"
              name="lastName"
              placeholder="Efternamn"
            />
          </div>{" "}
          <div className="mb-4">
            <input
              className="border border-b-2 border-b-orange-400 p-1 w-1/2"
              type="text"
              name="userName"
              placeholder="Användarnamn"
            />
          </div>
          <div className="mb-4">
            <input
              className="border border-b-2 border-b-orange-400 p-1 w-1/2"
              type="email"
              name="email"
              placeholder="E-postaddress"
            />
          </div>
          <div className="mb-4">
            <input
              className="border border-b-2 border-b-orange-400 p-1 w-1/2"
              type="password"
              name="password"
              placeholder="Lösenord"
            />
          </div>
          <button
            className="bg-orange-600 text-white border border-b-amber-500
           p-2 w-1/4 hover:bg-green-400">
            Skapa konto
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserRegistrationForm;

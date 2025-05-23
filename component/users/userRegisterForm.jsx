"use client";

import React, { useState } from "react";
import { registerUser } from "../../backend/userAPI";
import { displaySuccess } from "../../toast/dispayToast";
import { useRouter } from "next/navigation";

function UserRegistrationForm() {
  const router = useRouter();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  //Change input

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      password: user.password,
    };
    console.log("NY användare", newUser);
    try {
      //Call addUser function from backend
      await registerUser(newUser);

      setUser(newUser); //Kanske inte behövs
      displaySuccess("Ny användare har registrerats");
      console.log("NY användare", newUser);
      router.push("/");
      return;
    } catch (error) {
      console.error("Kunde inte skapa ny användare");
      displayError("Kunde inte skapa ny användare");
      return;
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="form-container w-full px-10">
        <h4>Registrera nya användare</h4>
        <form className="mt-3" onSubmit={submitHandler}>
          <div className="mb-4">
            <input
              className="border border-b-2 border-b-orange-400 p-1 w-1/2"
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={changeHandler}
              placeholder="Förnamn"
            />
          </div>
          <div className="mb-4">
            <input
              className="border border-b-2 border-b-orange-400 p-1 w-1/2"
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={changeHandler}
              placeholder="Efternamn"
            />
          </div>{" "}
          <div className="mb-4">
            <input
              className="border border-b-2 border-b-orange-400 p-1 w-1/2"
              type="text"
              name="username"
              value={user.username}
              onChange={changeHandler}
              placeholder="Användarnamn"
            />
          </div>
          <div className="mb-4">
            <input
              className="border border-b-2 border-b-orange-400 p-1 w-1/2"
              type="email"
              name="email"
              value={user.email}
              onChange={changeHandler}
              placeholder="E-postaddress"
            />
          </div>
          <div className="mb-4">
            <input
              className="border border-b-2 border-b-orange-400 p-1 w-1/2"
              type="password"
              name="password"
              value={user.password}
              onChange={changeHandler}
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

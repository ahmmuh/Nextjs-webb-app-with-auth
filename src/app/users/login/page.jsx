"use client";
import React, { useState } from "react";
import { loginUser } from "../../../../backend/authAPI";
import { displayError, displaySuccess } from "../../../../toast/dispayToast";
import { useRouter } from "next/navigation";

function UserLogin() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const loggedUser = {
      username: user.username,
      password: user.password,
    };
    try {
      await loginUser(loggedUser);
      displaySuccess("Inloggad");
      router.push("/");
    } catch (error) {
      console.log("User who want to login", loggedUser);
      displayError("User who want to login");
      router.push("/");
    }
  };
  return (
    <div className="  ">
      <div className="form-container w-full">
        <form onSubmit={handleLogin} className=" p-10 w-full">
          <h4 className="text-2xl py-4">Logga in</h4>
          <div className="mb-4 w-full">
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
              type="password"
              name="password"
              value={user.password}
              onChange={changeHandler}
              placeholder="Lösenord"
            />
          </div>
          <button
            className="bg-green-300 text-white border border-b-amber-500
           p-2 w-1/4 hover:bg-green-400">
            Logga in
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;

import React from "react";

function UserLogin() {
  return (
    <div className="  ">
      <div className="form-container w-full">
        <form className=" p-10 w-full">
          <h4 className="text-2xl py-4">Logga in</h4>
          <div className="mb-4 w-full">
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
              type="password"
              name="password"
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

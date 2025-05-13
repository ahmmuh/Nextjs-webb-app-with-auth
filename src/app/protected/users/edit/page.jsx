import React from "react";

function EditUser() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h4>Registrera dig först</h4>
      <div className="form-container">
        <form>
          <div className="mb-4">
            <input type="text" name="firstName" placeholder="Förnamn" />
          </div>
          <div className="mb-4">
            <input type="text" name="lastName" placeholder="Efternamn" />
          </div>
          <div className="mb-4">
            <input type="text" name="userName" placeholder="Användarnamn" />
          </div>
          <div className="mb-4">
            <input type="email" name="email" placeholder="E-postaddress" />
          </div>
          <div className="mb-4">
            <input type="password" name="password" placeholder="Lösenord" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUser;

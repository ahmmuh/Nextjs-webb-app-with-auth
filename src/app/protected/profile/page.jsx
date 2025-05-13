"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { UseFetchCurrentUser } from "../../../../customHooks/useFetchCurrentUser";
import Link from "next/link";
import { updateUser } from "../../../../backend/userAPI";
import { useRouter } from "next/navigation";
import { displayError, displaySuccess } from "../../../../toast/dispayToast";

function Profile() {
  //Router
  const router = useRouter();
  const { user, loading, error } = UseFetchCurrentUser();

  const [updatedUser, setUpdatedUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(user._id, updatedUser);
      displaySuccess("Din profile uppdaterats");
      router.push("/protected/dashboard");
      console.log("User who will be updated", updatedUser);
    } catch (error) {
      displayError("Kunde inte uppdatera profilen");
      return;
    }
  };

  useEffect(() => {
    if (user) {
      setUpdatedUser({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        username: user.username || "",
        email: user.email || "",
      });
    }
  }, [user]);

  if (loading) return <p>Laddar profil</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div className="flex  flex-col justify-start items-startr bg-white">
      <Link className="ml-4 mt-5" href={"/protected/dashboard"}>
        Back
      </Link>
      <div className="image-ontainer flex justify-center items-center p-4 ">
        <Image
          className="rounded-full"
          src={
            "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
          }
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </div>
      <div className="p-5 w-full">
        <form onSubmit={handleSubmit}>
          <ul className="flex flex-col">
            <li className=" p-3">
              Förnamn:
              <span className="">
                {user && (
                  <input
                    name="firstName"
                    type="text"
                    className=" border-amber-200 p-1 border-2 w-full"
                    onChange={handleChange}
                    value={updatedUser.firstName}
                  />
                )}
              </span>
            </li>
            <li className=" p-3 ">
              Efternamn:
              <span className="">
                {user && (
                  <input
                    type="text"
                    className=" border-amber-200 p-1 border-2 w-full"
                    name="lastName"
                    onChange={handleChange}
                    value={updatedUser.lastName}
                  />
                )}
              </span>
            </li>{" "}
            <li className=" p-3">
              Användarnamn{" "}
              <span className="">
                {user && (
                  <input
                    type="text"
                    className=" border-amber-200 p-1 border-2 w-full"
                    name="username"
                    onChange={handleChange}
                    value={updatedUser.username}
                  />
                )}
              </span>
            </li>
            <li className=" p-3 ">
              E-postadress:
              <span className="">
                {user && (
                  <input
                    type="email"
                    className=" border-amber-200 p-1 border-2 w-full"
                    name="email"
                    onChange={handleChange}
                    value={updatedUser.email}
                  />
                )}
              </span>
            </li>
            <button
              className="bg-green-300 text-white px-3 py-1 border border-r-amber-50
          rounded">
              Update
            </button>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Profile;

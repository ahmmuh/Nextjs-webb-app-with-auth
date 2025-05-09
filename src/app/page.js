"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import UserRegistrationForm from "../../component/users/userRegisterForm";
import UserLogin from "./users/login/page";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5000";
export default function Home() {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  const show = () => {
    setToggle(false);
  };

  const hide = () => {
    setToggle(true);
  };
  return (
    <>
      <div className=" bg-amber-300 h-full p-1 flex justify-end ">
        <button onClick={show} className=" text-black  p-2">
          Logga in
        </button>
        <button onClick={hide} className=" text-black  p-2">
          Skapa konto
        </button>
      </div>
      ;{toggle ? <UserRegistrationForm /> : <UserLogin />}
      
    </>
  );
}

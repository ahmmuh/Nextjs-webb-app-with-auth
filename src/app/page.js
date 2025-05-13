"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import UserLogin from "./login/page";
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
      {/* <div className=" bg-amber-300 h-full p-1 flex justify-end ">
        <Link href={"/login"}>Login</Link>
      </div> */}
      <UserLogin />
    </>
  );
}

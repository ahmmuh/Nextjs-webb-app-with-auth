"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { UseFetchCurrentUser } from "../../../../customHooks/useFetchCurrentUser";
import { logoutUser } from "../../../../backend/authAPI";

function BookPage() {
  //router
  const router = useRouter();

  return (
    <div className="p-10">
      <h3 className="text-purple-400 text-2xl ">Din book sida</h3>
    </div>
  );
}

export default BookPage;

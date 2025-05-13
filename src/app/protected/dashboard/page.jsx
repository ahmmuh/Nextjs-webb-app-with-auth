"use client";
import React, { useState } from "react";
import { UseFetchCurrentUser } from "../../../../customHooks/useFetchCurrentUser";
import { logoutUser } from "../../../../backend/authAPI";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { DashboadLayout } from "./_layout";
import Sidebar from "../sidebar";

function DashboardPage() {
  const router = useRouter();
  const { user, loading, error } = UseFetchCurrentUser();

  const logoutHandler = async (e) => {
    e.preventDefault();
    if (user) {
      await logoutUser();
      return router.push("/");
    } else {
      router.push("/");
    }
  };

  if (loading) return <p>Laddar användare</p>;
  if (error) return <p>Fel: {error.message}</p>;
  return (
    <div>
      <header className="bg-amber-100 px-10 py-4 flex justify-between items-center border-b border-orange-200">
        <h1 className="text-xl font-semibold text-pink-600">📄 Dashboard</h1>
        <div className="flex items-center gap-4">
          {user && (
            <span className="text-green-600 text-sm">
              Inloggad som {user.username}
            </span>
          )}
          <button
            onClick={logoutHandler}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm">
            Logout
          </button>
        </div>
      </header>
      <Sidebar />

      <div className="container mx-auto pt-4">
        {user && (
          <h4 className="text-2xl text-pink-400 ">
            Välkommen {user.firstName} 😊
          </h4>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;

import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:min-h-screen">
      <div className=" p-6 md:col-span-1 border-r border-r-orange-300">
        <h2 className="text-xl font-bold mb-4">Meny</h2>
        <ul className="flex flex-col gap-3">
          <li>
            <Link
              href={"/protected/dashboard"}
              className="hover:underline text-pink-500">
              Hem
            </Link>
          </li>
          <li>
            <Link
              href={"/protected/profile"}
              className="hover:underline text-pink-500">
              Min profil
            </Link>
          </li>{" "}
          <li>
            <Link
              href={"/protected/books"}
              className="hover:underline text-pink-500">
              Böcker
            </Link>
          </li>{" "}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

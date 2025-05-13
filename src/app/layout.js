"use client";

import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Toaster />
        {children}
      </body>
    </html>
  );
}

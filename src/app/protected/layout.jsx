"use client";

import React, { useState, useEffect } from "react";
import { UseFetchCurrentUser } from "../../../customHooks/useFetchCurrentUser";
import { useRouter } from "next/navigation";

const ProtectedLayout = ({ children }) => {
  const { user, loading, error } = UseFetchCurrentUser();
  //Route
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user?._id) {
      return router.push("/login");
    }
  }, [loading, user, router]);
  if (loading) return <p>Laddar</p>;
  if (!user._id) return null;

  return <>{children}</>;
};

export default ProtectedLayout;

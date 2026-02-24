import AuthProvider from "@/context/AuthContext";
import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
};

export default RootLayout;
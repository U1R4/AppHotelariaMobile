import AuthProvider from "@/context/AuthContext";
import { ReserveProvider } from "@/context/ReserveContext";
import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <AuthProvider>
      <ReserveProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </ReserveProvider>
    </AuthProvider>
  );
};

export default RootLayout;
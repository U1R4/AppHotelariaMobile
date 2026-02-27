import RenderLogin from "@/components/login";
import { useAuth } from "@/context/AuthContext";
import { Redirect } from "expo-router";
import React from "react";

const Login = () => {

    const {token, isLoading} = useAuth();
 
    if(isLoading) return null; 
    if(token) {
        return <Redirect href="/(tabs)/explorer" />
    }

    return (
        <RenderLogin/>
    );
}
export default Login;
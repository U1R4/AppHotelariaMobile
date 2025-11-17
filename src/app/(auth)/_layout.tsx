import { Stack } from "expo-router";


const AuthLayout = () => {
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" options={{title: "login"}}/>
            <Stack.Screen name="register" options={{title: "register"}}/>
            <Stack.Screen name="resetPass" options={{title: "resetPass"}}/>
        </Stack>
    )
}
export default AuthLayout;
import { Stack } from "expo-router";


const AuthLayout = () => {
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" options={{title: "login"}}/>
        </Stack>
    )
}
export default AuthLayout;
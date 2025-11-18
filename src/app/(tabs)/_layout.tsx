import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';

const TabLayout = () => {
  return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#424242ff', headerShown: false, tabBarStyle: {justifyContent: 'center', alignItems: "center", height: 60}}} >
            <Tabs.Screen  name="explorer"  options={{  title: 'explorer',  tabBarIcon: ({ color }) =>
                <MaterialCommunityIcons size={28} name="map" color={color} />}}/>

            <Tabs.Screen name="reserve" options={{ title: 'reserve', tabBarIcon: ({ color }) => 
                <MaterialCommunityIcons size={28} name="airplane" color={color} /> }}/>

            <Tabs.Screen name="account" options={{ title: 'account', tabBarIcon: ({ color }) => 
                <MaterialCommunityIcons size={28} name="account" color={color} /> }}/>

        </Tabs>
  );
}
export default TabLayout;
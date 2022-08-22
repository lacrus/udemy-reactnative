import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const Drawer = createDrawerNavigator();

const BottomTap = createBottomTabNavigator();

export default function App() {
  return (
    // <UserScreen />

    <NavigationContainer>
      <BottomTap.Navigator
        initialRouteName="Bienvenido"
        screenOptions={{
          headerStyle: {
            backgroundColor: "yellow",
          },
          headerTintColor: "#f4511e",
          //   headerTitleStyle: {
          //     fontWeight: "bold",
          //   },
          //   contentStyle: { backgroundColor: "#000" },
          tabBarActiveBackgroundColor: "black",
          tabBarActiveTintColor: "white",
        }}
      >
        <BottomTap.Screen
          name="Bienvenido"
          component={WelcomeScreen}
          options={{
            //   headerStyle: {
            //     backgroundColor: "#000",
            //   },
            //   headerTintColor: "white",
            //   drawerLabel: "hola",
            //   drawerIcon: ({ color, size }) => (
            //     <Ionicons name="home" color={color} size={size} />
            //   ),
            //   drawerActiveBackgroundColor: "#000",
            //   drawerStyle: { backgroundColor: "green" },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTap.Screen
          name="Usuario"
          component={UserScreen}
          options={{
            //   drawerLabel: "usuario",
            //   drawerIcon: ({ color, size }) => (
            //     <Ionicons name="person" color={color} size={size} />
            //   ),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={"black"} size={size} />
            ),
          }}
        />
      </BottomTap.Navigator>
    </NavigationContainer>
  );
}

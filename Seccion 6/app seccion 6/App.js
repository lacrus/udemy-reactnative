import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import ListadoComidas from "./screens/ListadoComidas.jsx";
import InfoComida from "./screens/InfoComida";
import Favoritos from "./screens/Favoritos";
import { Ionicons } from "@expo/vector-icons";
import FavoritosContextoProvider from "./store/context/favoritos-contexto";
import { Provider } from "react-redux";
import store from "./store/redux/store";

import { CATEGORIES } from "./data/dummy-data";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTap = createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <BottomTap.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#f4511e",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        sceneContainerStyle: { backgroundColor: "#000" },
        tabBarActiveBackgroundColor: "#fafafa",
        tabBarActiveTintColor: "#000",
        tabBarInactiveBackgroundColor: "#000",
        tabBarInactiveTintColor: "white",
      }}
      s
    >
      <BottomTap.Screen
        name="mealsCategories"
        component={CategoriesScreen}
        options={{
          title: "Categorias",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <BottomTap.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          title: "Tus Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </BottomTap.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritosContextoProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Drawer"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#000",
              },
              headerTintColor: "#f4511e",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              contentStyle: { backgroundColor: "#000" },
            }}
          >
            <Stack.Screen
              // name="mealsCategories"
              // component={CategoriesScreen}
              name="Drawer"
              component={DrawerNavigator}
              options={{
                title: "Categorias",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ListadoComidas"
              component={ListadoComidas}
              options={{
                headerRight: () => {
                  return <Button title="home" />;
                },
              }}
              // options={({ route, navigation }) => {
              //   const nombreCategoria = CATEGORIES.filter(
              //     (i) => i.id === route.params.categoryId
              //   )[0].title;
              //   return {
              //     title: nombreCategoria + "  Food",
              //   };
              // }}
            />
            <Stack.Screen name="InfoComida" component={InfoComida} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritosContextoProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

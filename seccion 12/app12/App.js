import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";
import Map from "./screens/Map";
import { useEffect, useState } from "react";
import { init } from "./util/database";
import PlaceDetail from "./screens/PlaceDetail";
import ModifyPlace from "./screens/ModifyPlace";

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  // useEffect(() => {
  //   init()
  //     .then(() => {
  //       setDbInitialized(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  if (!dbInitialized) {
    return (
      <AppLoading
        startAsync={init}
        onFinish={() => setDbInitialized(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTintColor: Colors.gray700,
            headerTitleStyle: {
              fontWeight: "bold",
            },
            contentStyle: { backgroundColor: Colors.gray700 },
          })}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Tus lugares",
              // headerShown: false,
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: "Agregar lugar",
              // headerShown: false,
            }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{
              title: "Selecciona tu ubicación",
            }}
          />
          <Stack.Screen
            name="PlaceDetails"
            component={PlaceDetail}
            options={{
              title: "Cargando lugar..",
            }}
          />
          <Stack.Screen
            name="ModifyPlace"
            component={ModifyPlace}
            options={{
              title: "Modificar lugar",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

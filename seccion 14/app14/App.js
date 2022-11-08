import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Alert, Platform } from "react-native";
import { privados } from "./privado";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  useEffect(() => {
    async function configurePushNotifications() {
      const { status } = await Notifications.getPermissionsAsync();
      let finalStatus = status;
      if (finalStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        Alert.alert(
          "Permiso requerido",
          "Las notificaciones necesitan permisos"
        );
        return;
      }
      const pushTokenData = await Notifications.getExpoPushTokenAsync();
      console.log(pushTokenData);
      if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.DEFAULT,
        });
      }
    }
    configurePushNotifications();
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("notificacion recibida");
        console.log(notification);
      }
    );

    const suscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log("respuesta de notificacion recibida");
        console.log(response);
        console.log(response.notification.request.content.data.userName);
      }
    );

    return () => {
      subscription.remove();
      suscription2.remove();
    };
  }, []);

  async function notificacionHandler() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "mi primer notificaion local",
        body: "este es el cuerpo de la notificacion",
        data: { userName: "Max" },
      },
      trigger: {
        seconds: 3,
      },
    });
    console.log("hola que tal");
  }

  function pushNotificationHandler() {
    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: privados.PUSH_TOKEN,
        title: "mandado desde el front",
        body: "re re re front",
      }),
    });
  }

  return (
    <View style={styles.container}>
      <Button
        onPress={async () => await notificacionHandler()}
        title="Notificacion"
      />
      <Button title="notificacion push" onPress={pushNotificationHandler} />
      <StatusBar style="auto" />
    </View>
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

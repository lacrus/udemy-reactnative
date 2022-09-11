import { Alert, Image, StyleSheet, Text, View } from "react-native";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";

import { Colors } from "../constants/colors";
import OutlineButton from "./UI/OutlineButton";
import { useEffect, useState } from "react";
import { getAdrress, getMapPreview } from "../util/location";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import Loading from "./Loading";

export default function LocationPicker({
  valid,
  onPickLocation,
  initialValues,
  isEditing,
}) {
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = useState();
  const navigation = useNavigation();
  const route = useRoute();
  const [loadingObtener, setLoadingObtener] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (initialValues) {
      const mapPickedLocation = {
        lat: initialValues.location.lat,
        lng: initialValues.location.lng,
      };
      setPickedLocation(mapPickedLocation);
    }
  }, []);

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = route.params && {
        lat: initialValues
          ? initialValues.location.lat
          : route.params.pickedLat,
        lng: initialValues
          ? initialValues.location.lng
          : route.params.pickedLng,
      };
      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]);

  useEffect(() => {
    async function fetch() {
      if (pickedLocation) {
        try {
          const address = await getAdrress(
            pickedLocation.lat,
            pickedLocation.lng
          );
          onPickLocation({ ...pickedLocation, address: address });
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetch();
  }, [pickedLocation, onPickLocation]);

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Permisos insuficientes",
        "Para usar la ubicación debes darle permiso a la app"
      );
      return false;
    }
    return true;
  }

  async function getLocationHandler() {
    setLoadingObtener(true);
    try {
      const hasPermission = await verifyPermissions();
      if (!hasPermission) {
        return;
      }
      const location = await getCurrentPositionAsync();
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch (e) {
      Alert.alert("Algo fallo..", "Por favor volve a intentar");
    }
    setLoadingObtener(false);
  }

  // console.log(initialValues);

  function pickOnMapHandler() {
    // console.log(pickedLocation.lat);
    if (!isEditing) {
      navigation.navigate("Map");
    } else {
      navigation.navigate("Map", {
        modifyLat: pickedLocation.lat,
        modifyLng: pickedLocation.lng,
      });
    }
  }

  let locationPreview = <Text>Ninguna ubicación seleccionada</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        style={s.image}
        source={{
          uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
        }}
      />
    );
  }

  return (
    <View>
      <View style={[s.mapPreview, !valid && s.invalidInput]}>
        {locationPreview}
      </View>
      <View style={s.actions}>
        {loadingObtener ? (
          <Loading />
        ) : (
          <OutlineButton icon="location" onPress={getLocationHandler}>
            Obtener
          </OutlineButton>
        )}
        <OutlineButton icon="map" onPress={pickOnMapHandler}>
          Seleccionar
        </OutlineButton>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
  invalidInput: {
    backgroundColor: Colors.error50,
  },
});

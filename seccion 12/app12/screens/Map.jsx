import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";

export default function Map({ navigation, route }) {
  const initialLocation =
    route.params && typeof route.params.initialLat === "number"
      ? {
          lat: route.params.initialLat,
          lng: route.params.initialLng,
        }
      : null;

  const initialValues =
    route.params && typeof route.params.modifyLat === "number"
      ? {
          lat: route.params.modifyLat,
          lng: route.params.modifyLng,
        }
      : null;

  const [selectedLocation, setSelectedLocation] = useState(
    initialLocation || initialValues
      ? initialLocation
        ? initialLocation
        : initialValues
      : null
  );

  const region = {
    latitude:
      initialLocation || initialValues
        ? initialLocation
          ? initialLocation.lat
          : initialValues.lat
        : 37.78,
    longitude:
      initialLocation || initialValues
        ? initialLocation
          ? initialLocation.lng
          : initialValues.lng
        : -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    if (initialLocation) {
      return;
    }
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({
      lat: lat,
      lng: lng,
    });
  }

  useLayoutEffect(() => {
    if (initialLocation) {
      return;
    }
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler, initialLocation]);

  function savePickedLocationHandler() {
    if (!selectedLocation) {
      Alert.alert(
        "Ninguna ubicación seleccionada",
        "Selecciona una ubicación en el mapa primero."
      );
      return;
    }
    if (initialValues) {
      navigation.navigate("ModifyPlace", {
        pickedLat: selectedLocation.lat,
        pickedLng: selectedLocation.lng,
      });
    } else {
      navigation.navigate("AddPlace", {
        pickedLat: selectedLocation.lat,
        pickedLng: selectedLocation.lng,
      });
    }
  }

  return (
    <MapView
      style={s.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="X"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}

const s = StyleSheet.create({
  map: {
    flex: 1,
  },
});

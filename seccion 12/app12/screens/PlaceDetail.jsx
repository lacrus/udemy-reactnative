import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import OutlineButton from "../components/UI/OutlineButton";
import { Colors } from "../constants/colors";
import { deletePlace, fetchPlaceDetails } from "../util/database";

export default function PlaceDetail({ route }) {
  const [fetchedPlace, setFetchedPlace] = useState({});

  const selectedPlaceId = route.params.placeId;
  const navigation = useNavigation();

  function deletePlaceHandler() {
    Alert.alert(
      "Seguro deseas eliminar el lugar?",
      "Esta acción no puede revertirse",
      [
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            try {
              await deletePlace(selectedPlaceId);
            } catch (error) {
              Alert.alert("No se pudo borrar el lugar", error.message);
            }
            navigation.navigate("AllPlaces");
          },
        },
        {
          text: "Cancelar",
          style: "default",
          onPress: () => {},
        },
      ]
    );
  }

  useEffect(() => {
    async function loadPlaceData() {
      const place = await fetchPlaceDetails(selectedPlaceId);
      setFetchedPlace(place);
      navigation.setOptions({
        title: place.title,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="trash-outline"
            size={24}
            color={tintColor}
            onPress={deletePlaceHandler}
          />
        ),
      });
    }

    loadPlaceData();
  }, [selectedPlaceId]);

  function showOnMapHandler() {
    navigation.navigate("Map", {
      initialLat: fetchedPlace.location.lat,
      initialLng: fetchedPlace.location.lng,
    });
  }

  function modifyPlaceHandler() {
    navigation.navigate("ModifyPlace", {
      lugar: fetchedPlace,
    });
  }

  if (!fetchedPlace) {
    return (
      <View style={s.fallback}>
        <Text>Cargando información del lugar...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image source={{ uri: fetchedPlace.imageUri }} style={s.image} />
      <View style={s.locationContainer}>
        <View style={s.addressContainer}>
          <Text style={s.address}>{fetchedPlace.address}</Text>
        </View>
        <OutlineButton icon="map" onPress={showOnMapHandler}>
          Ver en el Mapa
        </OutlineButton>
        <OutlineButton icon="create-outline" onPress={modifyPlaceHandler}>
          Modificar lugar
        </OutlineButton>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

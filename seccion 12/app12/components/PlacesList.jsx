import { useNavigation } from "@react-navigation/native";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import PlaceItem from "./PlaceItem";

export default function PlacesList({ places }) {
  const navigation = useNavigation();

  function selectPlaceHandler(id) {
    navigation.navigate("PlaceDetails", {
      placeId: id,
    });
  }

  if (!places || places.length === 0) {
    return (
      <View style={s.fallbackContainer}>
        <Text style={s.fallbackText}>Empieza a agregar lugares!!</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={s.list}
      data={places}
      keyExtractor={(i) => i.id}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={selectPlaceHandler} />
      )}
    />
  );
}

const s = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});

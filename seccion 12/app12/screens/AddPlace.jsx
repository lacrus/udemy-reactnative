import { Alert } from "react-native";

import PlaceForm from "../components/PlaceForm";
import { insertPlace } from "../util/database";
import Loading from "../components/Loading";
import { useState } from "react";

export default function AddPlace({ navigation }) {
  const [loading, setLoading] = useState(false);
  async function createPlaceHandler(place) {
    setLoading(true);
    try {
      await insertPlace(place);
    } catch (e) {
      Alert.alert(
        "No pudimos agrerar el lugar",
        "Vuelve a intentarlo en unos instantes"
      );
    }
    setLoading(false);
    navigation.navigate("AllPlaces");
  }

  return (
    <>
      {loading ? <Loading /> : <PlaceForm onCreatePlace={createPlaceHandler} />}
    </>
  );
}

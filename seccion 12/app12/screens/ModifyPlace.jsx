import { useState } from "react";
import { Alert } from "react-native";
import Loading from "../components/Loading";
import PlaceForm from "../components/PlaceForm";
import { updatePlace } from "../util/database";

export default function ModifyPlace({ navigation, route }) {
  const [loading, setLoading] = useState(false);
  async function modifyPlaceHandler(place) {
    setLoading(true);
    try {
      await updatePlace(place);
    } catch (e) {
      Alert.alert(
        "No pudimos modificar el lugar",
        "Vuelve a intentarlo en unos instantes"
      );
    }
    setLoading(false);
    navigation.navigate("AllPlaces");
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <PlaceForm
          onModifyPlace={modifyPlaceHandler}
          initialValues={route.params.lugar}
        />
      )}
    </>
  );
}

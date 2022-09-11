import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlacesList from "../components/PlacesList";
import { fetchPlaces } from "../util/database";

export default function AllPlaces({ navigation, route }) {
  const isFocused = useIsFocused();
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }
    if (
      isFocused
      // && route.params
    ) {
      // setLoadedPlaces((currentPlaces) => [
      //   ...currentPlaces,
      //   route.params.place,
      // ]);
      loadPlaces();
    }
  }, [isFocused, route]);

  return <PlacesList places={loadedPlaces} />;
}

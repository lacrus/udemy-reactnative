import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "./UI/Button";
import OutlineButton from "./UI/OutlineButton";
import { Place } from "../models/place";
import { updatePlace } from "../util/database";

export default function PlaceForm({
  onCreatePlace,
  initialValues,
  onModifyPlace,
}) {
  const [isEditing, setIsEditing] = useState({
    value: initialValues ? true : false,
    id: initialValues?.id,
  });
  const [enteredTitle, setEnteredTitle] = useState({
    value: initialValues ? initialValues.title : "",
    isValid: true,
  });
  const [selectedImage, setSelectedImage] = useState({
    value: initialValues ? initialValues.imageUri : "",
    isValid: true,
  });
  const [pickedLocation, setPickedLocation] = useState({
    value: initialValues ? initialValues.location : "",
    isValid: true,
  });
  function changeTitleHandler(enteredText) {
    setEnteredTitle((actual) => {
      return {
        value: enteredText,
        isValid: true,
      };
    });
  }

  function takeImageHandler(imageUri) {
    setSelectedImage((actual) => {
      return {
        ...actual,
        value: imageUri,
      };
    });
  }
  const pickLocationHandler = useCallback((location) => {
    setPickedLocation((actual) => {
      return {
        ...actual,
        value: location,
      };
    });
  }, []);

  function savePlaceHandler() {
    const placeData = new Place(
      enteredTitle.value,
      selectedImage.value,
      pickedLocation.value
    );
    //validaciones
    const titleIsValid = placeData.title.trim().length > 0;
    const imageIsValid = placeData.imageUri?.trim().length > 0;
    const locationIsValid = placeData.address?.trim().length > 0;

    if (!titleIsValid || !imageIsValid || !locationIsValid) {
      setEnteredTitle((i) => {
        return {
          ...i,
          isValid: titleIsValid,
        };
      });
      setSelectedImage((i) => {
        return {
          ...i,
          isValid: imageIsValid,
        };
      });
      setPickedLocation((i) => {
        return {
          ...i,
          isValid: locationIsValid,
        };
      });
      return;
    }
    onCreatePlace(placeData);
  }

  async function updatePlaceHandler() {
    const placeData = new Place(
      enteredTitle.value,
      selectedImage.value,
      pickedLocation.value,
      isEditing.id
    );
    //validaciones
    const titleIsValid = placeData.title.trim().length > 0;
    const imageIsValid = placeData.imageUri?.trim().length > 0;
    const locationIsValid = placeData.address?.trim().length > 0;

    if (!titleIsValid || !imageIsValid || !locationIsValid) {
      setEnteredTitle((i) => {
        return {
          ...i,
          isValid: titleIsValid,
        };
      });
      setSelectedImage((i) => {
        return {
          ...i,
          isValid: imageIsValid,
        };
      });
      setPickedLocation((i) => {
        return {
          ...i,
          isValid: locationIsValid,
        };
      });
      return;
    }

    // console.log(placeData);
    onModifyPlace(placeData);
  }

  return (
    <ScrollView style={s.form}>
      <View style={s.view}>
        <Text style={[s.label, !enteredTitle.isValid && s.invalidLabel]}>
          Titulo
        </Text>
        <TextInput
          style={[s.input, !enteredTitle.isValid && s.invalidInput]}
          onChangeText={changeTitleHandler}
          value={enteredTitle.value}
          autoCapitalize="sentences"
        />
        <ImagePicker
          valid={selectedImage.isValid}
          onTakeImage={takeImageHandler}
          initialValues={initialValues}
        />
        <LocationPicker
          valid={pickedLocation.isValid}
          onPickLocation={pickLocationHandler}
          initialValues={initialValues}
          isEditing={isEditing.value}
        />
        <Button
          onPress={isEditing.value ? updatePlaceHandler : savePlaceHandler}
        >
          {isEditing.value ? "Modificar Lugar" : "Agregar lugar"}
        </Button>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: { fontWeight: "bold", marginBottom: 4, color: Colors.primary500 },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  view: {
    paddingBottom: 40,
  },
  invalidLabel: {
    color: Colors.error500,
  },
  invalidInput: {
    backgroundColor: Colors.error50,
  },
});

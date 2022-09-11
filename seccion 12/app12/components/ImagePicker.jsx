import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  launchImageLibraryAsync,
  MediaTypeOptions,
} from "expo-image-picker";
import { useState } from "react";
import { Alert, Button, Image, StyleSheet, View, Text } from "react-native";
import { Colors } from "../constants/colors";
import OutlineButton from "./UI/OutlineButton";
import Loading from "./Loading";

export default function ImagePicker({ valid, onTakeImage, initialValues }) {
  const [useCameraPermissionsInformation, requestPermission] =
    useCameraPermissions();
  const [loading, setLoading] = useState(false);

  const [pickedImage, setPickedImage] = useState(
    initialValues ? initialValues.imageUri : null
  );

  async function verifyPermissions() {
    if (
      useCameraPermissionsInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (useCameraPermissionsInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Permisos insuficientes",
        "para usar la camara debes darle permiso a la app"
      );
      return false;
    }
    return true;
  }

  async function takeImageHandler() {
    setLoading(true);
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (image.cancelled) {
      setLoading(false);
      return;
    }
    onTakeImage(image.uri);
    setPickedImage(image.uri);
    setLoading(false);
  }

  const selectImageHandler = async () => {
    setLoading(true);
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (result.cancelled) {
      setLoading(false);
      return;
    }
    onTakeImage(result.uri);
    setPickedImage(result.uri);
    setLoading(false);
  };

  let imagePreview = <Text>Ninguna imagen tomada</Text>;

  if (pickedImage) {
    imagePreview = <Image style={s.image} source={{ uri: pickedImage }} />;
  }

  if (loading) {
    imagePreview = <Loading />;
  }

  return (
    <View>
      <View style={[s.imagePreview, !valid && s.invalidInput]}>
        {imagePreview}
      </View>
      <View style={s.actions}>
        <OutlineButton icon="images-outline" onPress={selectImageHandler}>
          Seleccionar
        </OutlineButton>
        <OutlineButton icon="camera" onPress={takeImageHandler}>
          Tomar
        </OutlineButton>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
  invalidInput: {
    backgroundColor: Colors.error50,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

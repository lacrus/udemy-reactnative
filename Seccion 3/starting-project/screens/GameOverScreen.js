import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import imagen from "../assets/img/success.png";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  const { width, height } = useWindowDimensions();

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Fin del Juego!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image style={styles.image} source={imagen} />
        </View>
        <View>
          <Text style={styles.symmaryText}>
            Tu telefono necesito{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> cantidad de
            rondas para adivinar el numero{" "}
            <Text style={styles.highlight}>{userNumber}</Text>
          </Text>
        </View>
        <View>
          <PrimaryButton onPress={onStartNewGame}>Nuevo Juevo</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
}

// const anchoPantalla = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: anchoPantalla < 380 ? 200 : 300,
    // height: anchoPantalla < 380 ? 200 : 300,
    // borderRadius: anchoPantalla < 380 ? 100 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  symmaryText: {
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});

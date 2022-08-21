import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Alert, FlatList, Items } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Buttons from "../components/ui/Buttons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direccion) {
    if (
      (direccion === "lower" && currentGuess < userNumber) ||
      (direccion === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("No mientas!!", "Tu sabes que eso esta mal..", [
        { text: "Disculpas!", style: "cancel" },
      ]);
      return;
    }

    if (direccion === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((i) => [newRndNumber, ...i]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>El oponente adivina</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Text>Adivina</Text>
      <Card>
        <InstructionText style={styles.instructionText}>
          ¿Menor o Mayor?
        </InstructionText>
        <Buttons
          textButtonLeft={<Ionicons name="md-remove" size={24} color="white" />}
          textButtonRigth={<Ionicons name="md-add" size={24} color="white" />}
          onPressButtonLeft={nextGuessHandler.bind(this, "lower")}
          onPressButtonRight={nextGuessHandler.bind(this, "greater")}
        />
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(i) => {
            return (
              <GuessLogItem
                roundNumber={guessRoundsListLength - i.index}
                guess={i.item}
              />
            );
          }}
          keyExtractor={(i) => i}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ddb52f",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

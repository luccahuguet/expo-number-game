// screens/GameScreen.js

import { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      alert("Game over!");
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      alert("Don't lie!");
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
      const nextNumber = generateRandomBetween(
        minBoundary,
        currentGuess,
        currentGuess
      );
      setCurrentGuess(nextNumber);
    } else if (direction === "greater") {
      minBoundary = currentGuess + 1;
      const nextNumber = generateRandomBetween(
        currentGuess,
        maxBoundary,
        currentGuess
      );
      setCurrentGuess(nextNumber);
      setRounds((prevRounds) => [nextNumber, ...prevRounds]);
    } else {
      console.log("Invalid direction");
    }
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="remove" size={24} color="white" />{" "}
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="add" size={24} color="white" />{" "}
          </PrimaryButton>
        </View>
      </Card>
      <View>
        {rounds.map((round) => (
          <Text key={round}>{round}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 48,
  },
  buttonContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    // width: "100%",
    padding: 24,
  },
});

export default GameScreen;

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
const GameOverScreen = ({}) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!</Text>
      {/* <Text>Number of rounds: {roundsNumber}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="Restart Game" onPress={onRestart} /> */}
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

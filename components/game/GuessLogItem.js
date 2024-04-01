import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: Colors.primary800,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default GuessLogItem;

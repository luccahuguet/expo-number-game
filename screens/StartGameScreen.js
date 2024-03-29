import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Numbers Game!{props.name}</Text>
      <TextInput style={styles.numberInput} maxLength={2} keyboardAppearance="dark" keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
      <PrimaryButton> Reset </PrimaryButton>
      <PrimaryButton> Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "darkred",
    borderRadius: 16,
    elevation: 8,
    color: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    margin: 10,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "goldenrod",
    borderBottomWidth: 2,
    color: "goldenrod",
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
});

export default StartGameScreen;

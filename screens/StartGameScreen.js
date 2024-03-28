import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {props.name}!</Text>
      <TextInput />
      <PrimaryButton> Reset </PrimaryButton>
      <PrimaryButton> Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 16,
    backgroundColor: "darkred",
    borderRadius: 16,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default StartGameScreen;

import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  const pressHandler = () => {
    if (onPress) {
      onPress();
    }
  }
  return (
    <View style={styles.outerContainer}>
      <Pressable onPress={pressHandler} style={({ pressed }) => pressed ? [styles.innerContainer, styles.pressed] : styles.innerContainer}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View >
  );
};


const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: "crimson",
    borderRadius: 28,
    paddingVertical: 12,
    paddingHorizontal: 24,
    margin: 4,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  // adds styling for ios
  pressed: {
    backgroundColor: "darkred",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default PrimaryButton;

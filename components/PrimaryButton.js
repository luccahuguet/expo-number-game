// components/PrimaryButton.js

import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: Colors.primary800,
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
    backgroundColor: Colors.primary600,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default PrimaryButton;

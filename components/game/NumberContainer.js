import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "white",
    padding: 24,
    borderRadius: 10,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "white",
    fontSize: 24,
  },
});

export default NumberContainer;
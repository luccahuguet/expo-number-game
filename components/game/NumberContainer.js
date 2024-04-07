import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "white",
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 16 : 24,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "white",
    fontSize: deviceWidth < 380 ? 24 : 36,
  },
});

export default NumberContainer;

import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary500,
    borderRadius: 16,
    elevation: 8,
    color: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default Card;

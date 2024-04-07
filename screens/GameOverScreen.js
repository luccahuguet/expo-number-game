import React from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Title>The Game is Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text>
        Number of rounds: <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        to find the number <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onRestart}>Restart Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: (deviceWidth < 380 ? 150 : 300) / 2,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: deviceWidth * 0.7,
    height: deviceHeight * 0.7,
  },
  highlight: {
    fontWeight: "bold",
    color: Colors.primary800,
    fontSize: 24,
  },
});

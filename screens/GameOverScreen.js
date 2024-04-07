import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  const { width: width, height: height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 500) {
    imageSize = 150;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <View style={styles.screen}>
      <Title>The Game is Over!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: (deviceWidth < 380 ? 150 : 300) / 2,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    fontWeight: "bold",
    color: Colors.primary800,
    fontSize: 24,
  },
});

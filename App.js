import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null);

  const pickNumberHandler = (selectedNumber) => {
    setPickedNumber(selectedNumber);
  };

  let content = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (pickedNumber) {
    content = <GameScreen userNumber={pickedNumber} />;
  }

  return (
    <LinearGradient
      colors={["#F00", "#DAA520", "#DAA520"]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        {content}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundGradient: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

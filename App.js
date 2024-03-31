// App.js

import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import * as Font from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import * as SplashScreen from "expo-splash-screen";
// import AppLoading from "expo-app-loading";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontError, setFontError] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
          "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        });
      } catch (error) {
        console.log(error);
        setFontError(true);
      } finally {
        setFontsLoaded(true);
      }
    }

    loadFonts();
  }, []);

  if (!fontsLoaded && !fontError) {
    SplashScreen.preventAutoHideAsync();
  } else {
    SplashScreen.hideAsync();
  }

  const pickNumberHandler = (selectedNumber) => {
    setPickedNumber(selectedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  let content = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (pickedNumber) {
    content = (
      <GameScreen userNumber={pickedNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && pickedNumber) {
    content = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={["#F00", "#DAA520", "#DAA520"]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{content}</SafeAreaView>
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

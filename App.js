import { View, StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient style={styles.rootScreen} colors={["#FF0000", "#DAA520"]}>
      <ImageBackground
        source={require("./assets/background.png")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: "goldenrod",
    // justifyContent: "center",
    // alignItems: "center"
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

// screens/GameScreen.js

import React from "react";
import { View, SafeAreaView, Text, Button, StyleSheet } from "react-native";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      {/* <Button title="Click Me" onPress={() => console.log("Button clicked!")} /> */}
      <View>
        <Text>Higher or lower?</Text>
      </View>
      {/* <View>Log rounds</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
});

export default GameScreen;

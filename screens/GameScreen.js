// screens/GameScreen.js

import React from "react";
import { View, SafeAreaView, Text, Button, StyleSheet } from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
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
    padding: 48,
  },
});

export default GameScreen;

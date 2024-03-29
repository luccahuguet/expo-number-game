import React from "react";
import { View, Text, Button } from "react-native";

const GameScreen = () => {
  return (
    <View>
      <Text>Game Screen</Text>
      <Button title="Click Me" onPress={() => console.log("Button clicked!")} />
    </View>
  );
};

export default GameScreen;

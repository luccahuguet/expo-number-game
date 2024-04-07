import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 12,
    marginVertical: 16,
    // fontFamily: "open-sans-bold",
    fontStyle: "italic",
    maxWidth: "80%",
    width: 300,
  },
});

export default Title;

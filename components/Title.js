import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "yellow",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "yellow",
    padding: 12,
    marginVertical: 16,
  },
});

export default Title;

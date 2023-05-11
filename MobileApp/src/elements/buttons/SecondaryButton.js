import LinearGradient from "react-native-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

let SecondaryButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <LinearGradient
        colors={["#D748FB", "rgba(172, 12, 156, 0.92)"]}
        start={{ x: 0.5, y: 0.1 }}
        end={{ x: 0.5, y: 0.9 }}
        style={styles.gradient}
      >
        <Text style={styles.buttonText}>Register</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 100,
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
    textTransform: "uppercase",
    padding: 5,
  },
});

export default SecondaryButton;

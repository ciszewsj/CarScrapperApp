import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet } from "react-native";

let MainButton = () => {


  return (
    <TouchableOpacity style={styles.button}>
      <LinearGradient
        colors={["#4C87A0", "rgba(5, 208, 221, 0.5)"]}
        start={{ x: 0.5, y: 0.1 }}
        end={{ x: 0.5, y: 0.9 }}
        style={styles.gradient}
      >
        <Text style={styles.buttonText}>Login</Text>
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
    // borderWidth: 1,
    borderColor: "rgba(82, 0, 255, 0.49)",
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

export default MainButton;

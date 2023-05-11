import LinearGradient from "react-native-linear-gradient";
import { StyleSheet } from "react-native";

export let Background = (props) => {
  return (
    <LinearGradient
      colors={["#4F86F0", "#A70ECD", "#1A3F6A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {props.children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

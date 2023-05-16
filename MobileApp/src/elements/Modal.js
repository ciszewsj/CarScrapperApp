import LinearGradient from "react-native-linear-gradient";
import { StyleSheet, View } from "react-native";

let ModalElement = ({ children }) => {
  return (
    <LinearGradient
      colors={["rgba(45, 109, 232, 0.5)", "rgba(10, 245, 245, 0.9)", "rgba(245, 31, 236, 0.6)", "rgba(245, 31, 236, 0.8)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 0.3333, 0.6667, 1]}
      style={{ height: "100%", width: "100%", position: "absolute" }}
    >
      <View style={styles.modal}>
        {children}
      </View>
    </LinearGradient>
  );

};

export default ModalElement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
  modal: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  closeButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007AFF",
  },
});


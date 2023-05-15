import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import LinearGradient from "react-native-linear-gradient";

let BoardView = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <LinearGradient
      colors={["rgba(45, 109, 232, 0.5)", "rgba(10, 245, 245, 0.9)", "rgba(245, 31, 236, 0.6)", "rgba(245, 31, 236, 0.8)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 0.3333, 0.6667, 1]}
      style={{ height: "100%", width: "80%", right: 0, position: "absolute" }}
    >
      <View style={styles.modal}>
        <Text style={styles.modalText}>To jest zawartość modala</Text>

        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text style={styles.closeButton}>Zamknij</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );

};
export default BoardView;
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

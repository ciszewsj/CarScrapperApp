import { Modal, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

let BoardView = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.modal}>
        <Text style={styles.modalText}>To jest zawartość modala</Text>

        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text style={styles.closeButton}>Zamknij</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default BoardView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

import ModalElement from "./Modal";
import { Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

let LoadingRoll = () => {
  return (
    <ModalElement>
      <Ionicons name="aperture-outline" size={100} />
      <Text>Loading...</Text>
    </ModalElement>
  );
};

export default LoadingRoll;

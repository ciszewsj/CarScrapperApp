import AppButton from "./AppButton";
import { View } from "react-native";

let EditButton = ({ onPress }) => {
  return (
    <View style={{
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      position: "absolute",
      right: 10,
      bottom: 10,
      opacity: 0.5,
    }}>
      <AppButton title={"+"} onPress={onPress} />
    </View>
  );
};

export default EditButton;

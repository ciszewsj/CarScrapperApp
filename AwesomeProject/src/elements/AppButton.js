import { Text, TouchableOpacity } from "react-native";

const AppButton = ({ onPress, title, variant = "lightgray" }) => (
  <TouchableOpacity onPress={onPress}
                    style={{
                      backgroundColor: `${variant}`,
                      padding: 10,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
    <Text style={{ fontSize: 24 }}>{title}</Text>
  </TouchableOpacity>
);

export default AppButton;

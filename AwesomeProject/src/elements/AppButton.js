import { Text, TouchableOpacity } from "react-native";

const AppButton = ({ onPress, title, variant = "lightgray" }) => (
  <TouchableOpacity onPress={onPress}
                    style={{
                      backgroundColor: `${variant}`,
                      borderRadius: 50,
                      alignItems: "center",
                      justifyContent: "center",
                      height:75,
                      width:75
                    }}>
    <Text style={{ fontSize: 24 }}>{title}</Text>
  </TouchableOpacity>
);

export default AppButton;

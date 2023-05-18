import { Text, View } from "react-native";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";


export const customToast = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "#455AC7" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
      }}
    />
  ),
  tomatoToast: ({ text1, props }) => (
    <View style={{ height: 60, width: "100%", backgroundColor: "tomato" }}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};

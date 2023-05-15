import { Text, View } from "react-native";
import InputText from "./InputText";

let TwoValuesSelect = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 2 }}>
        <InputText variant={"small"} />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24 }}>-</Text>
      </View>
      <View style={{ flex: 2, alignItems: "flex-end" }}>

        <InputText variant={"small"} />
      </View>

    </View>
  );
};
export default TwoValuesSelect;

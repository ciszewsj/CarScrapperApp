import { Text, View } from "react-native";
import InputText from "./buttons/InputText";

let TwoValuesSelect = ({ leftValue, setLeftValue, rightValue, setRightValue }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 2 }}>
        <InputText value={leftValue} onChange={setLeftValue} variant={"small"}keyboard={"numeric"}  />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24 }}>-</Text>
      </View>
      <View style={{ flex: 2, alignItems: "flex-end" }}>
        <InputText value={rightValue} onChange={setRightValue} variant={"small"} keyboard={"numeric"} />
      </View>

    </View>
  );
};
export default TwoValuesSelect;

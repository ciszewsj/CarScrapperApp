import { Text, View } from "react-native";
import InputText from "./buttons/InputText";

let TwoValuesSelect = ({ leftValue, setLeftValue, leftError, rightValue, setRightValue, rightError }) => {
  const handleLeftInputChange = (text) => {
    if (/^\d*$/.test(text)) {
      setLeftValue && setLeftValue(text);
    }
  };

  const handleRightInputChange = (text) => {
    if (/^\d*$/.test(text)) {
      setRightValue && setRightValue(text);
    }
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 2 }}>
        <InputText value={leftValue} onChange={handleLeftInputChange} variant={"small"} keyboard={"numeric"}
                   error={leftError} />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24 }}>-</Text>
      </View>
      <View style={{ flex: 2, alignItems: "flex-end" }}>
        <InputText value={rightValue} onChange={handleRightInputChange} variant={"small"} keyboard={"numeric"}
                   error={rightError} />
      </View>

    </View>
  );
};
export default TwoValuesSelect;

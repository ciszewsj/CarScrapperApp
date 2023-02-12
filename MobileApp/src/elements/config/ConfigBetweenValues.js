import { Text, TextInput, View } from "react-native";
import { useEffect } from "react";

let ConfigBetweenValues = ({ title, minHook, maxHook }) => {
  let min, max = 0;
  let setMin, setMax;
  if (minHook) {
    [min, setMin] = minHook;
  }
  if (maxHook) {
    [max, setMax] = maxHook;
  }

  useEffect(() => {

  }, [min, max]);

  return (
    <View>
      <Text numberOfLines={1} style={{ fontSize: 16 }}>{title}</Text>
      <View style={{
        flexDirection: "row",
        marginVertical: 12,
      }}>

        <TextInput
          keyboardType={"numeric"}
          style={{
            height: 40,
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            flex: 1,
          }}
          defaultValue={min}
          onChangeText={setMin}
        >
        </TextInput>
        <Text style={{
          fontSize: 24,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 12,
        }}>-</Text>
        <TextInput
          keyboardType={"numeric"}
          style={{
            height: 40,
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            flex: 1,
          }}
          defaultValue={max}
          onChangeText={setMax}
        >
        </TextInput>
      </View>
    </View>
  );
};

export default ConfigBetweenValues;

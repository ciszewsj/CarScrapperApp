import { Text, TextInput, View } from "react-native";

let ConfigBetweenValues = ({ title }) => {
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
          }}>
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
          }}>
        </TextInput>
      </View>
    </View>
  );
};

export default ConfigBetweenValues;

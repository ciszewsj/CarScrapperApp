import { Text, TextInput, View } from "react-native";

let ConfigText = ({ title, setState }) => {
  return (
    <View>
      <Text numberOfLines={1} style={{ fontSize: 16 }}>{title}</Text>
      <TextInput style={{
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
      }} onChangeText={setState}>
      </TextInput>
    </View>
  );
};

export default ConfigText;

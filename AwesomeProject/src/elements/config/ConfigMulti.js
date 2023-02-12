import { Text, TouchableOpacity, View } from "react-native";

let ConfigMulti = ({ title, onPress, selected }) => {
  return (
    <View>
      <Text numberOfLines={1} style={{ fontSize: 16 }}>{title}</Text>
      <TouchableOpacity style={{
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
      }} onPress={onPress}>
        <Text>
          Wybrano: {selected}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfigMulti;

import { Text, TouchableOpacity, View } from "react-native";

let ConfigScrollItem = ({ name, onPress, selected }) => {
  return (
    <View style={{
      marginVertical: 10,
    }}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[{
            height: 80,
            padding: 10,
            borderRadius: 10,
            flexDirection: "row",
            borderStyle: "solid",
            borderColor: "dark",
            borderWidth: 2,
            alignItems: "center",
            justifyContent: "center",

          },
            selected === true &&
            {
              backgroundColor: "rgba(25, 135, 84, 0.5)",
            },
          ]}
        >
          <Text style={{ fontSize: 24 }}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ConfigScrollItem;

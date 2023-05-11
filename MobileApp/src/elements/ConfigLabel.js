import Label from "./Label";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

let ConfigLabel = () => {
  const navigation = useNavigation();

  return (
    <Label onPress={() => {
      navigation.navigate("Edit");
    }}>
      <View style={{ marginLeft: 10, flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text numberOfLines={1} style={{ fontSize: 24 }}>Mazda MX5</Text>
        <Text numberOfLines={1} style={{ fontSize: 16 }}>1200PLN</Text>
        <Text numberOfLines={1} style={{ fontSize: 16 }}>2015</Text>
        <Text numberOfLines={1} style={{ fontSize: 16 }}>09.02.2023r. 21:37</Text>
      </View>
    </Label>
  );
};

export default ConfigLabel;

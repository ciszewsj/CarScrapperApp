import Label from "./Label";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

let ConfigLabel = ({ id, name, categoryName, priceFrom, priceTo }) => {
  const navigation = useNavigation();

  return (
    <Label onPress={() => {
      navigation.navigate("Edit", { id: id });
    }}>
      <View style={{ marginLeft: 10, flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text numberOfLines={1} style={{ fontSize: 24 }}>{name}</Text>
        <Text numberOfLines={1} style={{ fontSize: 16 }}>{categoryName}</Text>
        <Text numberOfLines={1} style={{ fontSize: 16 }}>{priceFrom} - {priceTo} PLN</Text>
      </View>
    </Label>
  );
};

export default ConfigLabel;

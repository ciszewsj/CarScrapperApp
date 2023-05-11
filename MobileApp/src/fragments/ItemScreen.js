import { Background } from "../elements/Background";
import { ScrollView } from "react-native";
import ItemLabel from "../elements/ItemLabel";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

let ItemScreen = () => {
  return (
    <Background>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <ItemLabel />
        <ItemLabel />
        <ItemLabel />
        <ItemLabel />
        <ItemLabel />
        <ItemLabel />
        <ItemLabel />
        <ItemLabel />
        <ItemLabel />
        <ItemLabel />
        <ItemLabel />
      </ScrollView>
    </Background>
  );
};
export default ItemScreen;

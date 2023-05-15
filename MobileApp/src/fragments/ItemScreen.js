import { Background } from "../elements/Background";
import { ScrollView } from "react-native";
import ItemLabel from "../elements/ItemLabel";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import BoardView from "../elements/BoardView";

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
      <BoardView />

    </Background>
  );
};
export default ItemScreen;

import { Background } from "../elements/Background";
import { ScrollView } from "react-native";
import ItemLabel from "../elements/ItemLabel";
import BoardView from "../elements/BoardView";
import { useState } from "react";

let ItemScreen = () => {
  const [visible, setVisible] = useState(true);
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
      {visible && <BoardView onPress={setVisible} />}
    </Background>
  );
};
export default ItemScreen;

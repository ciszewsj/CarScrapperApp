import { Background } from "../elements/Background";
import { ScrollView } from "react-native";
import ItemLabel from "../elements/ItemLabel";
import BoardView from "../elements/BoardView";
import { useState } from "react";
import { useEffect } from "react";
import { useRoute } from "@react-navigation/native";

let ItemScreen = () => {
  const route = useRoute();

  const [modal, setModal] = useState();

  useEffect(() => {
    try {
      const { param1 } = route && route.params;
      setModal(!modal);
    } catch (e) {
      setModal(false);
    }
  }, [route]);
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
      {modal && <BoardView onPress={setModal} />}
    </Background>
  );
};
export default ItemScreen;

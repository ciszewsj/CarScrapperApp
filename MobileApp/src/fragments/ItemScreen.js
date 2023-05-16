import { Background } from "../elements/Background";
import { ScrollView } from "react-native";
import ItemLabel from "../elements/ItemLabel";
import BoardView from "../elements/BoardView";
import { useState } from "react";
import { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import ProtectedView from "../elements/ProtectedView";

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
    <ProtectedView logged={true}>
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
    </ProtectedView>
  );
};
export default ItemScreen;

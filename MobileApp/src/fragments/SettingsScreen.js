import { Background } from "../elements/Background";
import { ScrollView } from "react-native";
import ConfigLabel from "../elements/ConfigLabel";
import BoardView from "../elements/BoardView";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import ProtectedView from "../elements/ProtectedView";

let SettingsScreen = () => {
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
          <ConfigLabel />
          <ConfigLabel />
          <ConfigLabel />
          <ConfigLabel />
          <ConfigLabel />
          <ConfigLabel />
          <ConfigLabel />
          <ConfigLabel />
          <ConfigLabel />
          <ConfigLabel />
          <ConfigLabel />
          <ConfigLabel />
        </ScrollView>
        {modal && <BoardView onPress={setModal} />}
      </Background>
    </ProtectedView>
  );
};
export default SettingsScreen;

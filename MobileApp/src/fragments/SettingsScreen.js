import { Background } from "../elements/Background";
import { ScrollView } from "react-native";
import ConfigLabel from "../elements/ConfigLabel";

let SettingsScreen = () => {
  return (
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
    </Background>
  );
};
export default SettingsScreen;

import { ScrollView, View } from "react-native";
import AppButton from "../elements/AppButton";
import SettingsLabel from "../elements/SettingsLabel";

let CarScrapperOptionsScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <SettingsLabel />
        <SettingsLabel />
        <SettingsLabel />
        <SettingsLabel />
        <SettingsLabel />
        <SettingsLabel />
        <SettingsLabel />
      </ScrollView>
      <View style={{
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        position: "absolute",
        right: 10,
        bottom: 10,
        opacity: 0.5,
      }}>
        <AppButton title={"+"} onPress={e => {
          navigation.navigate("Edytuj");
        }} />
      </View>
    </View>
  );
};

export default CarScrapperOptionsScreen;

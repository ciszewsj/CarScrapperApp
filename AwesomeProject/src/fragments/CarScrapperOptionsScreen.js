import { ScrollView, View } from "react-native";
import AppButton from "../elements/AppButton";
import SettingsLabel from "../elements/SettingsLabel";

let CarScrapperOptionsScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <View style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}>
          <AppButton title={"Utwórz nowy"} />
        </View>
        <SettingsLabel onPress={e => {
          navigation.navigate("Edytuj");
        }} />
        <SettingsLabel />
        <SettingsLabel />
        <SettingsLabel />
        <SettingsLabel />
        <SettingsLabel />
        <SettingsLabel />
      </ScrollView>
    </View>
  );
};

export default CarScrapperOptionsScreen;

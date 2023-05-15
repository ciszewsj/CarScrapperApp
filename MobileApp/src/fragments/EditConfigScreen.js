import { Background } from "../elements/Background";
import { Text, View } from "react-native";
import InputText from "../elements/InputText";
import SecondaryButton from "../elements/buttons/SecondaryButton";
import MainButton from "../elements/buttons/MainButton";
import SelectButton from "../elements/buttons/SelectButton";
import { useNavigation } from "@react-navigation/native";
import TwoValuesSelect from "../elements/TwoValuesSelect";

let EditConfigScreen = () => {
  const navigation = useNavigation();

  return (
    <Background>
      <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
        <Text style={{ fontSize: 50 }}>
        </Text>
      </View>
      <View style={{
        flex: 4,
      }}>
        <Text style={{ fontSize: 16 }}>
          Product Name
        </Text>
        <InputText />
        <Text style={{ fontSize: 16 }}>
          Category
        </Text>
        <SelectButton />
        <Text style={{ fontSize: 16 }}>
          Price
        </Text>
        <TwoValuesSelect />
      </View>

      <View style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: 300,
      }}>
        <SecondaryButton onPress={() => navigation.navigate("SettingsScreen")}>
          Remove
        </SecondaryButton>
        <MainButton onPress={() => navigation.navigate("SettingsScreen")}>
          Save
        </MainButton>
      </View>
    </Background>
  );
};
export default EditConfigScreen;

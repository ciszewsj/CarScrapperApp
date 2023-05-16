import { Background } from "../elements/Background";
import { Text, View } from "react-native";
import InputText from "../elements/buttons/InputText";
import SecondaryButton from "../elements/buttons/SecondaryButton";
import MainButton from "../elements/buttons/MainButton";
import SelectButton from "../elements/buttons/SelectButton";
import { useNavigation } from "@react-navigation/native";
import TwoValuesSelect from "../elements/TwoValuesSelect";
import ProtectedView from "../elements/ProtectedView";
import { createConfig } from "../client/Client";
import { useContext } from "react";
import { GlobalUserContext } from "../context/GlobalUserContext";

let EditConfigScreen = () => {
  const navigation = useNavigation();
  const [auth, setAuth] = useContext(GlobalUserContext);

  return (
    <ProtectedView logged={true}>

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
          <MainButton onPress={() =>
            createConfig(auth.token, {})
          }>
            Save
          </MainButton>
        </View>
      </Background>
    </ProtectedView>
  );
};
export default EditConfigScreen;

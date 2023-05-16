import { Text, View } from "react-native";
import InputText from "../elements/InputText";
import SecondaryButton from "../elements/buttons/SecondaryButton";
import { Background } from "../elements/Background";
import { useNavigation } from "@react-navigation/native";
import ProtectedView from "../elements/ProtectedView";

export let RegisterScreen = () => {
  const navigation = useNavigation();

  return (
    <ProtectedView logged={false}>
      <Background>
        <View style={{ flex: 2, justifyContent: "center", alignContent: "center" }}>
          <Text style={{ fontSize: 50 }}>
            ScrapItem
          </Text>
        </View>
        <View style={{
          flex: 3,
        }}>
          <Text style={{ fontSize: 16 }}>
            Name
          </Text>
          <InputText />
          <Text style={{ fontSize: 16 }}>
            Email
          </Text>
          <InputText />
          <Text style={{ fontSize: 16 }}>
            Password
          </Text>
          <InputText />
        </View>
        <View style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-start",
        }}>
          <SecondaryButton isWidth={true} onPress={() => navigation.navigate("Login")}>
            Register
          </SecondaryButton>
        </View>
      </Background>
    </ProtectedView>
  );
};

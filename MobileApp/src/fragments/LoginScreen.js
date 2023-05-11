import { Text, View } from "react-native";
import MainButton from "../elements/buttons/MainButton";
import SecondaryButton from "../elements/buttons/SecondaryButton";
import InputText from "../elements/InputText";
import { Background } from "../elements/Background";
import { useNavigation } from "@react-navigation/native";

let LoginScreen = () => {
  const navigation = useNavigation();

  return (
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
        justifyContent: "space-between",
        width: 300,
      }}>
        <SecondaryButton onPress={() => navigation.navigate("Register")} />
        <MainButton onPress={() => navigation.navigate("Main")} />
      </View>
    </Background>

  );
};


export default LoginScreen;

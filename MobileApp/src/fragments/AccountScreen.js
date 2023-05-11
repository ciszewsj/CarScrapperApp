import { Background } from "../elements/Background";
import { Text, View } from "react-native";
import SecondaryButton from "../elements/buttons/SecondaryButton";
import MainButton from "../elements/buttons/MainButton";
import { useNavigation } from "@react-navigation/native";

let AccountScreen = () => {
  const navigation = useNavigation();

  return (
    <Background>
      <View style={{ flex: 2, justifyContent: "center", alignContent: "center" }}>
        <Text style={{ fontSize: 50 }}>
          ScrapItem
        </Text>
      </View>
      <View style={{
        flex: 4,
        alignItems: "center",
      }}>

        <SecondaryButton onPress={() => navigation.navigate("Login")} />
        <MainButton onPress={() => navigation.navigate("Login")} />
      </View>

    </Background>
  );
};
export default AccountScreen;

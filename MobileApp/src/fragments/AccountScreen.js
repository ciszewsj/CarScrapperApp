import { Background } from "../elements/Background";
import { Text, View } from "react-native";
import SecondaryButton from "../elements/buttons/SecondaryButton";
import MainButton from "../elements/buttons/MainButton";
import { useNavigation } from "@react-navigation/native";
import "firebase/auth";
import firebase from "firebase/compat";

let AccountScreen = () => {
  const navigation = useNavigation();

  return (
    <Background>
      <View style={{ flex: 2, justifyContent: "center", alignContent: "center" }}>
        <Text style={{ fontSize: 50 }}>
          ScrapItem
        </Text>
      </View>
      <View style={{ flex: 1 }} />

      <View style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 10,
      }}>

        <MainButton isWidth={true} onPress={() => {
          firebase.auth().sendPasswordResetEmail("jakubpiotrciszewski@gmail.com").then(r => console.log(r));
        }}>
          Change password
        </MainButton>
        <SecondaryButton isWidth={true} onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        })}>
          Logout
        </SecondaryButton>

      </View>
      <View style={{ flex: 2 }} />
    </Background>
  );
};
export default AccountScreen;

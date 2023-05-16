import { Background } from "../elements/Background";
import { Text, View } from "react-native";
import SecondaryButton from "../elements/buttons/SecondaryButton";
import MainButton from "../elements/buttons/MainButton";
import "firebase/auth";
import firebase from "firebase/compat";
import ProtectedView from "../elements/ProtectedView";
import { useContext } from "react";
import { GlobalUserContext } from "../context/GlobalUserContext";

let AccountScreen = () => {
  const [auth, setAuth] = useContext(GlobalUserContext);

  return (
    <ProtectedView logged={true}>
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
          <SecondaryButton isWidth={true} onPress={() => setAuth({})}>
            Logout
          </SecondaryButton>

        </View>
        <View style={{ flex: 2 }} />
      </Background>
    </ProtectedView>
  )
    ;
};
export default AccountScreen;

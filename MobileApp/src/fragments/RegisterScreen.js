import { BackHandler, Text, View } from "react-native";
import InputText from "../elements/InputText";
import SecondaryButton from "../elements/buttons/SecondaryButton";
import { Background } from "../elements/Background";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export let RegisterScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {

    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction,
    );

    return () => backHandler.remove();
  }, []);


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
        <SecondaryButton onPress={() => navigation.navigate("Login")} />
      </View>
    </Background>

  );
};

import { Text, TextInput, View } from "react-native";
import AppButton from "../elements/AppButton";

let CarScrapperEditOptionsScreen = () => {

  return (
    <>
      <TextInput>
      </TextInput>

      <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <View style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}>
          <AppButton title={"Zapisz"} variant={"#90ee90"} />
        </View>

        <View style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}>
          <AppButton title={"Usuń"} variant={"#ffcccb"} />
        </View>
      </View>
    </>
  );
};

export default CarScrapperEditOptionsScreen;

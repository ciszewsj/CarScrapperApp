import { StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MainButton from "../elements/buttons/MainButton";
import SecondaryButton from "../elements/buttons/SecondaryButton";
import InputText from "../elements/InputText";

let LoginScreen = () => {

  return (
    <LinearGradient
      colors={["#4F86F0", "#A70ECD", "#1A3F6A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
        <Text style={{ fontSize: 50 }}>
          ScrapItem
        </Text>
      </View>
      <View style={{
        flex: 1,
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
        alignItems: "center",
        justifyContent: "space-between",
        width: 300,
        paddingHorizontal: 20,
        paddingBottom: 150,
      }}>
        <SecondaryButton />
        <MainButton />
      </View>
    </LinearGradient>

  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,

  },
  input: {
    width: "100%",
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontFamily: "zilla-slab-highlight",

  },
});


export default LoginScreen;

import { Image, Linking, Text, TouchableOpacity, View } from "react-native";

let CarLabel = () => {

  let url = "https://www.otomoto.pl/oferta/toyota-yaris-toyota-yaris-gr-1-6-dynamic-ID6Fbf8O.html";

  return (
    <TouchableOpacity onPress={e => {
      Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log("FAILURE");
        }
      });
    }}>
      <View
        style={{
          height: 150,
          margin: 5,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          borderStyle: "solid",
          borderColor: "dark",
          borderWidth: 2,
          alignItems: "center",
          justifyContent: "center",
        }}>

        <Image resizeMethod={"scale"} style={{ height: 130, width: 130, borderRadius: 10 }}
               source={require("./car-test.jpg")} />
        <View style={{ marginLeft: 10, flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text numberOfLines={1} style={{ fontSize: 24 }}>Mazda MX5</Text>
          <Text numberOfLines={1} style={{ fontSize: 16 }}>1200PLN</Text>
          <Text numberOfLines={1} style={{ fontSize: 16 }}>2015</Text>
          <Text numberOfLines={1} style={{ fontSize: 16 }}>09.02.2023r. 21:37</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CarLabel;

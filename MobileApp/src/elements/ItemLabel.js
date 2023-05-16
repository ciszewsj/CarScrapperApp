import { Image, Linking, Text, View } from "react-native";
import Label from "./Label";

let ItemLabel = () => {
  let url = "https://www.otomoto.pl/oferta/toyota-yaris-toyota-yaris-gr-1-6-dynamic-ID6Fbf8O.html";
  let press = () => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("FAILURE");
      }
    });
  };
  return (
    <Label url={url} onPress={press}>
      <Image resizeMethod={"scale"} style={{ height: 130, width: 130, borderRadius: 10 }}
             // source={{ uri: "https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png")}}
             source={{ uri: "https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" }}

             blurRadius={1} />
      <View style={{ marginLeft: 10, flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text numberOfLines={1} style={{ fontSize: 24 }}>Mazda MX5</Text>
        <Text numberOfLines={1} style={{ fontSize: 16 }}>1200PLN</Text>
        <Text numberOfLines={1} style={{ fontSize: 16 }}>2015</Text>
        <Text numberOfLines={1} style={{ fontSize: 16 }}>09.02.2023r. 21:37</Text>
      </View>
    </Label>
  );
};


export default ItemLabel;

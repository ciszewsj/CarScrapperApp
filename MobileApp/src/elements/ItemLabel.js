import { Image, Linking, Text, View } from "react-native";
import Label from "./Label";
import { useEffect, useState } from "react";

let ItemLabel = ({ url, imageUrl, date, name, price, category }) => {

  let [dateFormat, setDateFormat] = useState();

  useEffect(() => {
    let dateValue = new Date(date);
    const year = dateValue.getFullYear();
    const month = String(dateValue.getMonth() + 1).padStart(2, "0");
    const day = String(dateValue.getDate()).padStart(2, "0");
    const hours = String(dateValue.getHours()).padStart(2, "0");
    const minutes = String(dateValue.getMinutes()).padStart(2, "0");
    const seconds = String(dateValue.getSeconds()).padStart(2, "0");
    setDateFormat(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
  }, []);
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
             source={{ uri: imageUrl }}
             blurRadius={1} />
      <View style={{ marginLeft: 10, flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text numberOfLines={1} style={{ fontSize: 24 }}>{name}</Text>
        <Text numberOfLines={1} style={{ fontSize: 16 }}>{category}</Text>
        <Text numberOfLines={1} style={{ fontSize: 16 }}>{price} PLN</Text>
        <Text numberOfLines={1} style={{ fontSize: 16 }}>{dateFormat}</Text>
      </View>
    </Label>
  );
};


export default ItemLabel;

import { Image, Linking, Text, TouchableOpacity, View } from "react-native";

let SettingsLabel = ({ onPress }) => {

  return (
    <TouchableOpacity onPress={onPress}>
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

        {/*<Image resizeMethod={"scale"} style={{ height: 130, width: 130, borderRadius: 10 }}*/}
        {/*       source={require("./car-test.jpg")} />*/}
        <View style={{ marginLeft: 10, flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text numberOfLines={1} style={{ fontSize: 24 }}>Mazda MX5</Text>
          <Text numberOfLines={1} style={{ fontSize: 16 }}>Marki: 4</Text>
          <Text numberOfLines={1} style={{ fontSize: 16 }}>Modele: 4</Text>
          <Text numberOfLines={1} style={{ fontSize: 16 }}>1200 - 12000</Text>
          <Text numberOfLines={1} style={{ fontSize: 16 }}>2010 - 2020</Text>
          {/*<Text numberOfLines={1} style={{ fontSize: 16 }}>09.02.2023r. 21:37</Text>*/}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SettingsLabel;

import { Text, TouchableOpacity, View } from "react-native";

let SettingsLabel = ({ onPress, info }) => {

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

        <View style={{ marginLeft: 10, flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text numberOfLines={1} style={{ fontSize: 24 }}>{info && info.name}</Text>
          <Text numberOfLines={1}
                style={{ fontSize: 16 }}>Marki: {info ? info.brands ? info.brands.length : 0 : 0}</Text>
          <Text numberOfLines={1}
                style={{ fontSize: 16 }}>Modele: {info ? info.models ? info.models.length : 0 : 0}</Text>
          <Text numberOfLines={1}
                style={{ fontSize: 16 }}>{info && info.price && info.price.min} - {info && info.price && info.price.max}</Text>
          <Text numberOfLines={1}
                style={{ fontSize: 16 }}>{info && info.years && info.years.min} - {info && info.years && info.years.max}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SettingsLabel;

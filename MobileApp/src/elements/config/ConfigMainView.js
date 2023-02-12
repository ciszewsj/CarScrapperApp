import { Alert, ScrollView, View } from "react-native";
import ConfigText from "./ConfigText";
import ConfigMulti from "./ConfigMulti";
import ConfigBetweenValues from "./ConfigBetweenValues";
import AppButton from "../buttons/AppButton";

let ConfigMainView = ({ setView, carInfoHook, globalContext, navigation }) => {
  let [carInfo, setCarInfo] = carInfoHook;
  let [context, setContext] = globalContext;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ margin: 10 }}>
          <ConfigText title={"Nazwa"} defaultValue={carInfo && carInfo.name} setState={(e) => {
            carInfo.name = e;
            setCarInfo({ ...carInfo });
          }} />
          <ConfigMulti title={"Marki"} onPress={() => setView(1)}
                       selected={carInfo ? carInfo.brands ? carInfo.brands.length : 0 : 0} />
          <ConfigMulti title={"Modele"} onPress={() => setView(2)}
                       selected={carInfo ? carInfo.models ? carInfo.models.length : 0 : 0} />

          <ConfigBetweenValues
            title={"Cena"}
            minHook={[carInfo && carInfo["price"] && carInfo["price"]["min"].toString(), () => {
            }]}
            maxHook={[carInfo && carInfo["price"] && carInfo["price"]["max"].toString(), () => {
            }]} />
          <ConfigBetweenValues
            title={"Rocznik"}
            minHook={[carInfo && carInfo["years"] && carInfo["years"]["min"].toString(), () => {
            }]}
            maxHook={[carInfo && carInfo["years"] && carInfo["years"]["max"].toString(), () => {
            }]} />
        </View>
      </ScrollView>
      <View style={{
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        position: "absolute",
        right: 10,
        bottom: 10,
        opacity: 0.5,
      }}>
        <AppButton
          title={"V"} variant={"#90ee90"}
          onPress={() => {
            if (carInfo != null) {

              if (carInfo.id != null && context.options.map((item) => {
                return item.id;
              }).includes(carInfo.id)) {
                context.options = [...context.options.filter(e => {
                  return e.id !== carInfo.id;
                }), carInfo];
              } else {
                carInfo.id = context.options.length;
                context.options = [...context.options, carInfo];
              }
              setContext({ ...context });
            }
            navigation.goBack();
          }} />
      </View>

      <View style={{
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        position: "absolute",
        left: 10,
        bottom: 10,
        opacity: 0.5,
      }}>
        <AppButton title={"X"} variant={"#ffcccb"} onPress={() => {
          Alert.alert("Ustawienia", "Czy chcesz porzucić zmiany?", [
            {
              text: "Anuluj",
              onPress: () => {
              },
              style: "cancel",
            }, {
              text: "Tak",
              onPress: () => {
                navigation.goBack();
              },
            },
          ]);
        }} />
      </View>
    </View>
  );
};

export default ConfigMainView;

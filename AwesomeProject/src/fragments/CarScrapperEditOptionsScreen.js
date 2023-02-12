import { ScrollView, View } from "react-native";
import AppButton from "../elements/AppButton";
import { useState } from "react";
import ConfigText from "../elements/config/ConfigText";
import ConfigBetweenValues from "../elements/config/ConfigBetweenValues";
import SelectScrollView from "../elements/SelectScrollView";
import ConfigMulti from "../elements/config/ConfigMulti";

let CarScrapperEditOptionsScreen = ({ navigation }) => {

  let [view, setView] = useState(0);
  let items = [{
    name: "Fiat",
    models: ["Scudo", "Punto"],
  }, {
    name: "Audi",
    models: ["a4", "a5"],
  }, {
    name: "Wolksvagen",
    models: ["Bora", "Passat"],
  }, {
    name: "Porsche",
  }, {
    name: "Ferrari",
  }, {
    name: "Bentlay",
  }, {
    name: "Toyota",
  }, {
    name: "Polonez",
  }, {
    name: "Mazda",
  },
  ];

  let [settings, setSettings] = useState({});

  let [selectedBrand, setSelectedBrand] = useState([]);
  let [selectedModels, setSelectedModels] = useState([]);

  return (
    <>
      {view === 0 ?
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={{ margin: 10 }}>
              <ConfigText title={"Nazwa"} setState={setSettings} />
              <ConfigMulti title={"Marki"} onPress={() => setView(1)} selected={selectedBrand.length} />
              <ConfigMulti title={"Modele"} onPress={() => setView(2)} selected={selectedModels.length} />

              <ConfigBetweenValues title={"Cena"} />
              <ConfigBetweenValues title={"Rocznik"} />
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
            <AppButton title={"V"} variant={"#90ee90"} onPress={() => navigation.navigate("Opcje")} />
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
            <AppButton title={"X"} variant={"#ffcccb"} onPress={() => navigation.navigate("Opcje")} />
          </View>
        </View>
        :
        view === 1 ?
          <SelectScrollView
            itemList={items.map(function(item) {
              return item["name"];
            })}
            selectedItemsHook={[selectedBrand, setSelectedBrand]}
            back={() => setView(0)} />
          :
          <SelectScrollView
            itemList={
              [].concat(items.map((item) => {
                return item["models"];
              })).flat().filter(el => {
                return el !== undefined;
              })
            }
            selectedItemsHook={[selectedModels, setSelectedModels]}
            back={() => setView(0)} />

      }
    </>
  );
};

export default CarScrapperEditOptionsScreen;

import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ConfigText from "./config/ConfigText";
import { Fragment, useEffect, useState } from "react";
import AppButton from "./AppButton";
import ConfigScrollItem from "./config/ConfigScrollItem";

let SelectScrollView = ({ itemList, selectedItemsHook, back }) => {
  let [selectedItems, setSelectedItems] = selectedItemsHook;
  let [itemListState, setItemListState] = useState(itemList);

  let [itemName, setItemName] = useState("");

  useEffect(() => {
    itemListState.sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    });
    setItemListState([...itemListState]);
  }, [selectedItems]);

  let onPressAction = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems([...
        selectedItems.filter(i => {
          return i !== item;
        })]);
    }
  };


  return (
    <View style={{ margin: 10, flex: 1 }}>
      <ConfigText title={"Marki"} setState={setItemName} />
      <View style={{ flex: 1 }}>
        <ScrollView>
          {
            itemListState.map((name, index) => {
              if (name.toUpperCase().includes(itemName.toUpperCase()))
                return <Fragment key={index}>
                  <ConfigScrollItem
                    selected={selectedItems.includes(name)}
                    name={name}
                    onPress={() =>
                      onPressAction(name)
                    } />
                </Fragment>;
            })
          }
        </ScrollView>
      </View>
      <View style={{
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        position: "absolute",
        right: 10,
        bottom: 10,
        opacity: 0.5,
      }}>
        <AppButton title={"+"} onPress={back} />
      </View>
    </View>
  )
    ;
};
export default SelectScrollView;

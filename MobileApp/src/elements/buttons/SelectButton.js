import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const SelectButton = ({ options, onSelect }) => {

  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  return (
    <View>
      <SelectList
        boxStyles={{
          width: 380,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "rgba(221, 38, 38, 0.21)",
          backgroundGradient: "linear-gradient(91.91deg, rgba(255, 255, 255, 0.7) 0%, rgba(166, 223, 255, 0.7) 28.42%, rgba(96, 255, 150, 0.7) 100%)",
        }}
        dropdownStyles={{
          width: 380,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "rgba(221, 38, 38, 0.21)",
          backgroundGradient: "linear-gradient(91.91deg, rgba(255, 255, 255, 0.7) 0%, rgba(166, 223, 255, 0.7) 28.42%, rgba(96, 255, 150, 0.7) 100%)",
        }}

        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
      />
    </View>
  );
};

export default SelectButton;

import React from "react";
import { Text, ToastAndroid, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useContext, useEffect, useState } from "react";
import { GlobalUserContext } from "../../context/GlobalUserContext";
import { Statuses } from "../../client/ResponseObject";
import { getProductsCategories } from "../../client/Client";

const SelectButton = ({ idSelected, onSelect, setLoadingCategories, error }) => {


  const [auth, setAuth] = useContext(GlobalUserContext);
  const [responseCategories, setResponseCategories] = useState({});
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState([]);

  useEffect(() => {
    if (selected != null && selected.length > 0) {
      let res;
      let tmp = value && value.find(obj => {
        return obj.value === selected;
      });
      res = tmp != null && tmp.key != null ? tmp.key : 0;
      res && onSelect ? onSelect(res) : ToastAndroid.show("Could not set value!", ToastAndroid.SHORT);
    }
  }, [selected]);

  useEffect(() => {
    if (responseCategories.code === Statuses.FAILURE) {
      ToastAndroid.show("Could not get categories !", ToastAndroid.SHORT);
    } else if (responseCategories.code === Statuses.SUCCESS) {
      setValue(responseCategories.body && responseCategories.body.length > 0
        ? responseCategories.body.map(elem => {
          return { "key": elem.id, value: elem.name };
        }) : []);
    }
    if (setLoadingCategories !== null && responseCategories.code != null) {
      setLoadingCategories(false);
    }
  }, [responseCategories]);

  useEffect(() => {
    if (setLoadingCategories !== null) {
      setLoadingCategories(true);
    }
    getProductsCategories(auth.token, setResponseCategories);
  }, []);
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

        setSelected={(val) => {
          setSelected(val);
        }}

        defaultOption={value[idSelected - 1]}
        data={value}
        save="value"
      />
      <Text style={{ color: "red", fontSize: 12 }}>{error}</Text>
    </View>
  );
};

export default SelectButton;

import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CarLabel from "../elements/CarLabel";

let HomeScreen = () => {
  return (
    <View style={styles}>
      <ScrollView>
        <CarLabel />
        <CarLabel />
        <CarLabel />
        <CarLabel />
        <CarLabel />
        <CarLabel />
        <CarLabel />
        <CarLabel />
        <CarLabel />
        <CarLabel />
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;

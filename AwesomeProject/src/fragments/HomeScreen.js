import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Linking, ScrollView } from "react-native";
import CarLabel from "../elements/CarLabel";

let HomeScreen = () => {
  let [token, setToken] = useState();


  return (
    //   <TouchableOpacity onPress={e => {
    //     Linking.canOpenURL(url).then(supported => {
    //       if (supported) {
    //         Linking.openURL(url);
    //   {/*    } else {*/}
    //   {/*      console.log("FAILURE");*/}
    //   {/*    }*/}
    //   {/*  });*/}
    //   {/*}}>*/}
    //   {/*  <Text style={{ marginVertical: "10%", marginHorizontal: "20%" }} selectable={true}>{token}</Text>*/}
    //   {/*</TouchableOpacity>*/}
    //   {/*<NotificationManager setToken={setToken} />*/}

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

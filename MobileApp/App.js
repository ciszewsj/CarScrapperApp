import * as React from "react";
import MainAppBottomTabNavigator from "./src/navigators/MainAppBottomTabNavigator";
import { useEffect, useState } from "react";
import { GlobalUserContext, globalUsersSettings } from "./src/context/GlobalUserContext";
import messaging from "@react-native-firebase/messaging";
import { Alert } from "react-native";
import LoginScreen from "./src/authorization/LoginScreen";


export default function App() {
  let [globalContext, setGlobalContext] = useState(globalUsersSettings);
  messaging().getToken().then(token =>
    console.log(token));
  let [a, setA] = useState({});

  messaging().subscribeToTopic("topic");

  messaging().setBackgroundMessageHandler(message => {
    console.log(message);
    setA(message);
  });
  console.log(a);


  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
      console.log(JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);


  return (
    <GlobalUserContext.Provider value={[globalContext, setGlobalContext]}>
      {/*// <MainAppBottomTabNavigator />*/}
      <LoginScreen>
      </LoginScreen>
    </GlobalUserContext.Provider>
  );
}

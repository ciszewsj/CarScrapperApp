import * as React from "react";
import { useEffect, useState } from "react";
import { GlobalUserContext, globalUsersSettings } from "./src/context/GlobalUserContext";
import messaging from "@react-native-firebase/messaging";
import { Alert, StatusBar } from "react-native";
import LoginScreen from "./src/fragments/LoginScreen";
import { RegisterScreen } from "./src/fragments/RegisterScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigators/MainNavigator";

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

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar translucent={true} hidden={true} />
      <GlobalUserContext.Provider value={[globalContext, setGlobalContext]}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{
            headerShown: false,
            headerLeft: null,
          }} />
          <Stack.Screen name="Main" component={MainNavigator} options={{
            headerShown: false,
            headerLeft: null,
          }} />
        </Stack.Navigator>
      </GlobalUserContext.Provider>
    </NavigationContainer>
  );
}

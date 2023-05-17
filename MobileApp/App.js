import * as React from "react";
import { useState } from "react";
import { GlobalUserContext, globalUsersSettings } from "./src/context/GlobalUserContext";
import { StatusBar } from "react-native";
import LoginScreen from "./src/fragments/LoginScreen";
import { RegisterScreen } from "./src/fragments/RegisterScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigators/MainNavigator";
import Toast from "react-native-toast-message";
import MessageService from "./src/elements/MessageService";

export default function App() {
  let [globalContext, setGlobalContext] = useState(globalUsersSettings);


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
        <MessageService />
      </GlobalUserContext.Provider>
      <Toast />
    </NavigationContainer>
  );
}

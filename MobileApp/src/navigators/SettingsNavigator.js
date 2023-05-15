import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EditConfigScreen from "../fragments/EditConfigScreen";
import SettingsScreen from "../fragments/SettingsScreen";

let SettingsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen}
                    options={{ headerShown: false }} />
      <Stack.Screen name="Edit" component={EditConfigScreen} options={{
        headerShown: false,
        headerLeft: null,
      }} />
    </Stack.Navigator>
  );
};
export default SettingsNavigator;

import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EditConfigScreen from "../fragments/EditConfigScreen";
import SettingsScreen from "../fragments/SettingsScreen";

let SettingsNavigator = ({ navigation, route }) => {
  const Stack = createStackNavigator();
  const { setState } = route.params;

  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen}
                    options={{ headerShown: false }}
                    initialParams={{ setState: setState }}
      />
      <Stack.Screen name="Edit" component={EditConfigScreen} options={{
        headerShown: false,
        headerLeft: null,
      }} initialParams={{ setState: setState }}
      />
    </Stack.Navigator>
  );
};
export default SettingsNavigator;

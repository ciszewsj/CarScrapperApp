import * as React from "react";
import HomeScreen from "./src/fragments/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import CarScrapperOptionsTst from "./src/fragments/CarScrapperOptionsTst";

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ((focused, color, size) => {
            return <Icon type={"font-awesome"} name={"car"} nativeID={"f85b"} solid={true} size={24} />;
          }),

        }}

        />
        <Tab.Screen name="Opcje" component={CarScrapperOptionsTst} options={{
          headerShown: false,
          tabBarIcon: ((focused, color, size) => {
            return <Icon type={"font-awesome"} name="gears" size={24} />;
          }),
        }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

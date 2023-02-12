import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../fragments/HomeScreen";
import { Icon } from "react-native-elements";
import CarScrapperOptionsTst from "./CarScrapperOptionsTst";
import { NavigationContainer } from "@react-navigation/native";

let MainAppBottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ((focused, color, size) => {
            return <Icon type={"font-awesome"} name={"car"} nativeID={"f85b"} solid={true} size={24} />;
          }),

        }}

        />
        <Tab.Screen name="OpcjeView" component={CarScrapperOptionsTst} options={{
          headerShown: false,
          tabBarIcon: ((focused, color, size) => {
            return <Icon type={"font-awesome"} name="gears" size={24} />;
          }),
        }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainAppBottomTabNavigator;

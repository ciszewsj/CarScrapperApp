import Ionicons from "react-native-vector-icons/Ionicons";
import ItemScreen from "../fragments/ItemScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LinearGradient from "react-native-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import SettingsNavigator from "./SettingsNavigator";
import AccountScreen from "../fragments/AccountScreen";

let MainNavigator = () => {
  const Tab = createBottomTabNavigator();

  let ColorStyle = () => {
    return (
      <LinearGradient
        colors={["#455AC7", "#7879F1", "#4958A4"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}

        style={{ height: "100%" }}
      />
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Scrapped Items"
      screenOptions={{
        tabBarActiveTintColor: "#000000",
      }}
    >
      <Tab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
          headerBackground: () => <ColorStyle />,
          tabBarBackground: () => <ColorStyle />,

          headerRight: () => <TouchableOpacity onPress={() => console.log("Dodaj")}>
            <Text style={{ marginRight: 10 }}>Dodaj</Text>
          </TouchableOpacity>,
        }}

      />
      <Tab.Screen
        name="Scrapped Items"
        component={ItemScreen}
        options={{
          tabBarLabel: "Scrapped Items",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          headerBackground: () => <ColorStyle />,
          tabBarBackground: () => <ColorStyle />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AccountScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
          headerBackground: () => <ColorStyle />,
          tabBarBackground: () => <ColorStyle />,
        }}
      />
    </Tab.Navigator>

  );
};

export default MainNavigator;

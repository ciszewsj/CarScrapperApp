import { createStackNavigator } from "@react-navigation/stack";
import CarScrapperOptionsScreen from "../fragments/CarScrapperOptionsScreen";
import CarScrapperEditOptionsScreen from "../fragments/CarScrapperEditOptionsScreen";

let CarScrapperOptionsTst = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Opcje"  component={CarScrapperOptionsScreen} />
      <Stack.Screen name="Edytuj" component={CarScrapperEditOptionsScreen} />
    </Stack.Navigator>
  );
};
export default CarScrapperOptionsTst;

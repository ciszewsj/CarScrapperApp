import { createStackNavigator } from "@react-navigation/stack";
import CarScrapperOptionsScreen from "./CarScrapperOptionsScreen";
import CarScrapperEditOptionsScreen from "./CarScrapperEditOptionsScreen";

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

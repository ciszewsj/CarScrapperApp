import { ScrollView, View } from "react-native";
import SettingsLabel from "../elements/SettingsLabel";
import { Fragment, useContext } from "react";
import { GlobalUserContext } from "../context/GlobalUserContext";
import EditButton from "../elements/buttons/EditButton";

let CarScrapperOptionsScreen = ({ navigation, route: { params } }) => {
  let [context, setContext] = useContext(GlobalUserContext);
  let configs = context.options;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {
          configs.map((info, index) => {
            return <Fragment key={index}>
              <SettingsLabel onPress={() => navigation.navigate("Edytuj", info)} info={info} />
            </Fragment>;
          })
        }
      </ScrollView>
      <EditButton onPress={() => {
        navigation.navigate("Edytuj");
      }} />
    </View>
  );
};

export default CarScrapperOptionsScreen;

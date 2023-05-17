import { Background } from "../elements/Background";
import { ScrollView, ToastAndroid } from "react-native";
import ConfigLabel from "../elements/ConfigLabel";
import BoardView from "../elements/BoardView";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import ProtectedView from "../elements/ProtectedView";
import { useContext } from "react";
import { GlobalUserContext } from "../context/GlobalUserContext";
import { getConfigList } from "../client/Client";
import LoadingRoll from "../elements/LoadingRoll";
import { Statuses } from "../client/ResponseObject";
import { useIsFocused } from "@react-navigation/native";

let SettingsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  const [auth, setAuth] = useContext(GlobalUserContext);
  const [modal, setModal] = useState(false);
  const [response, setResponse] = useState({});
  const [loadingGetCategories, setLoadingGetCategories] = useState(false);

  useEffect(() => {
    switch (response.code) {
      case Statuses.SUCCESS:
        setLoadingGetCategories(false);
        break;
      case  Statuses.FAILURE:
        ToastAndroid.show("Could not get data about configs!", ToastAndroid.SHORT);
        setLoadingGetCategories(false);
        break;
      default:
    }
  }, [response]);

  useEffect(() => {
    if (isFocused) {
      setModal(false);
      setLoadingGetCategories(true);
      getConfigList(auth.token, setResponse);
    }
  }, [isFocused]);

  useEffect(() => {
    try {
      const { param1 } = route && route.params;
      setModal(!modal);
    } catch (e) {
      setModal(false);
    }
  }, [route]);

  return (
    <ProtectedView logged={true}>
      <Background>
        <ScrollView style={{ flex: 1, width: "100%" }}>
          {response.body && response.body.map(config => <ConfigLabel key={config.id} id={config.id} name={config.name}
                                                                     priceFrom={config.priceFrom}
                                                                     priceTo={config.priceTo}
                                                                     categoryName={config.category && config.category.name} />)}
        </ScrollView>
        {modal &&
          <BoardView onPressLeft={() => {
            navigation.navigate("Edit");
          }}
                     onPressRight={() => {
                       setModal(false);
                     }}
          />}
      </Background>
      {(loadingGetCategories) && <LoadingRoll />}

    </ProtectedView>
  );
};
export default SettingsScreen;

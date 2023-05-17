import { Background } from "../elements/Background";
import { ScrollView, ToastAndroid } from "react-native";
import ItemLabel from "../elements/ItemLabel";
import BoardView from "../elements/BoardView";
import { useState } from "react";
import { useEffect } from "react";
import { useIsFocused, useRoute } from "@react-navigation/native";
import ProtectedView from "../elements/ProtectedView";
import { getMyProductsList } from "../client/Client";
import { useContext } from "react";
import { GlobalUserContext } from "../context/GlobalUserContext";
import { Statuses } from "../client/ResponseObject";
import LoadingRoll from "../elements/LoadingRoll";

let ItemScreen = () => {
  const route = useRoute();
  const isFocused = useIsFocused();
  const [auth, setAuth] = useContext(GlobalUserContext);

  const [modal, setModal] = useState(false);

  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    switch (response.code) {
      case Statuses.SUCCESS:
        setLoading(false);
        break;
      case  Statuses.FAILURE:
        ToastAndroid.show("Could not get data about configs!", ToastAndroid.SHORT);
        setLoading(false);
        break;
      default:
    }
  }, [response]);

  useEffect(() => {
    if (isFocused) {
      setModal(false);
      setLoading(true);
      getMyProductsList(auth.token, setResponse);
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
  console.log(response.body);
  return (
    <ProtectedView logged={true}>
      <Background>
        <ScrollView style={{ flex: 1, width: "100%" }}>
          {response.body && response.body.map(item => <ItemLabel key={item.id}
                                                                 name={item.name}
                                                                 url={item.url}
                                                                 imageUrl={item.imageUrl}
                                                                 price={item.price}
                                                                 category={item.category && item.category.name}
                                                                 date={item.addedDate} />)}

        </ScrollView>
        {modal && <BoardView both={false} onPress={setModal} />}
      </Background>
      {(loading) && <LoadingRoll />}

    </ProtectedView>
  );
};
export default ItemScreen;

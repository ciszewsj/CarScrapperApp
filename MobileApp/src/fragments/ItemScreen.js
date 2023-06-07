import { Background } from "../elements/Background";
import { RefreshControl, ScrollView, ToastAndroid } from "react-native";
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

  const [filters, setFilters] = useState({});
  const [refresh, setRefresh] = useState();

  const [items, setItems] = useState([]);

  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [maxDate, setMaxDate] = useState(0);

  const [additionalResponse, setAdditionalResponse] = useState({});
  const [additionalRefresh, setAdditionalRefresh] = useState(false);

  useEffect(() => {
    switch (response.code) {
      case Statuses.SUCCESS:
        setLoading(false);
        setItems(response.body.content);
        setPage(response.body.number);
        setMaxPage(response.body.totalPages);
        if (response.body.content.length > 0) {
          setMaxDate(response.body.content[0].found);
        }
        break;
      case  Statuses.FAILURE:
        ToastAndroid.show("Could not get data about configs!", ToastAndroid.SHORT);
        setLoading(false);
        break;
      default:
    }
    setRefresh(false);
  }, [response]);

  useEffect(() => {
    if (isFocused) {
      setModal(false);
      setLoading(true);
      getMyProductsList(auth.token, setResponse, filters);
    }
  }, [isFocused, refresh]);

  useEffect(() => {
    try {
      const { param1 } = route && route.params;
      setModal(!modal);
    } catch (e) {
      setModal(false);
    }
  }, [route]);

  useEffect(() => {
    switch (additionalResponse.code) {
      case Statuses.SUCCESS:
        setAdditionalRefresh(false);
        setItems([]);
        let oldItemsIds = items.map(item => item.id);
        let newItems = additionalResponse.body.content.filter(elem => !oldItemsIds.includes(elem.id));
        setItems([...items, ...newItems]);

        setPage(additionalResponse.body.number);
        setMaxPage(additionalResponse.body.totalPages);
        break;
      case  Statuses.FAILURE:
        ToastAndroid.show("Could not get data about configs!", ToastAndroid.SHORT);
        setAdditionalRefresh(false);
        break;
      default:
    }
    setAdditionalRefresh(false);
  }, [additionalResponse]);


  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isScrolledToBottom = layoutMeasurement.height + contentOffset.y + 100 >= contentSize.height;
    if (isScrolledToBottom && page + 1 < maxPage) {
      getMyProductsList(auth.token, setAdditionalResponse, {
        ...filters,
        "maxDate": maxDate,
        "pageNumber": page + 1,
        "pageSize": 25,
      });
      setAdditionalRefresh(true);
    }
  };


  return (<ProtectedView logged={true}>
    <Background>
      <ScrollView
        refreshControl={<RefreshControl
          refreshing={refresh}
          onRefresh={setRefresh}
        />}
        onScroll={handleScroll}

        style={{ flex: 1, width: "100%" }}>
        {items.map(item => <ItemLabel key={item.id}
                                      name={item.name}
                                      url={item.url}
                                      imageUrl={item.imageUrl}
                                      price={item.price}
                                      category={item.category && item.category.name}
                                      date={item.addedDate} />)}

      </ScrollView>
      {modal && <BoardView both={false} onPress={setModal} setFilters={setFilters} filters={filters}
                           onPressRight={() => setRefresh(true)} withPrice={true} />}
    </Background>
    {(loading || additionalRefresh) && <LoadingRoll />}

  </ProtectedView>);
};
export default ItemScreen;

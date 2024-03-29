import { Background } from "../elements/Background";
import { Text, ToastAndroid, View } from "react-native";
import InputText from "../elements/buttons/InputText";
import SecondaryButton from "../elements/buttons/SecondaryButton";
import MainButton from "../elements/buttons/MainButton";
import SelectButton from "../elements/buttons/SelectButton";
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import TwoValuesSelect from "../elements/TwoValuesSelect";
import ProtectedView from "../elements/ProtectedView";
import { createConfig, deleteConfig, getConfig, updateConfig } from "../client/Client";
import { useContext, useEffect } from "react";
import { GlobalUserContext } from "../context/GlobalUserContext";
import { useState } from "react";
import { Statuses } from "../client/ResponseObject";
import LoadingRoll from "../elements/LoadingRoll";

let EditConfigScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [auth, setAuth] = useContext(GlobalUserContext);
  const [form, setForm] = useState({});
  const [responseCreateConfig, setResponseCreateConfig] = useState({});
  const [responseGetConfig, setResponseGetConfig] = useState({});
  const [responseDeleteConfig, setResponseDeleteConfig] = useState({});

  const [loadingCreateConfig, setLoadingCreateConfig] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [loadingGetCategories, setLoadingGetCategories] = useState(false);

  const [loadingDeleteCategories, setLoadingDeleteCategories] = useState(false);

  const [id, setId] = useState(null);
  const { setState } = route.params;
  const isFocused = useIsFocused();

  useEffect(() => {
    if (setState && isFocused) {
      setState(false);
      console.log(123);
    }
  }, [isFocused]);


  useEffect(() => {
    switch (responseDeleteConfig.code) {
      case Statuses.SUCCESS:
        setLoadingDeleteCategories(false);
        navigation.navigate("SettingsScreen");
        break;
      case Statuses.FAILURE:
        ToastAndroid.show("Could not delete config!", ToastAndroid.SHORT);
        setLoadingDeleteCategories(false);
        break;
      default:
    }
  }, [responseDeleteConfig]);

  useEffect(() => {
    switch (responseCreateConfig.code) {
      case Statuses.SUCCESS:
        setId(responseCreateConfig.body.id);
        setLoadingCreateConfig(false);
        break;
      case Statuses.VALIDATION_ERROR:
        ToastAndroid.show("Could not save config!", ToastAndroid.SHORT);
        setLoadingCreateConfig(false);
        break;
      case Statuses.FAILURE:
        ToastAndroid.show("Could not save config!", ToastAndroid.SHORT);
        setLoadingCreateConfig(false);
        break;
      default:
    }
  }, [responseCreateConfig]);

  useEffect(() => {
    if (responseGetConfig.code === Statuses.SUCCESS) {

      if (responseGetConfig.body) {
        setForm({
          "name": responseGetConfig.body.name,
          "priceFrom": responseGetConfig.body.priceFrom,
          "priceTo": responseGetConfig.body.priceTo,
          "categoryId": responseGetConfig.body.category ? responseGetConfig.body.category.id : -1,
        });
      }
      setLoadingGetCategories(false);
    } else if (responseGetConfig.code === Statuses.FAILURE || responseGetConfig.code === Statuses.VALIDATION_ERROR) {
      setLoadingGetCategories(false);
      ToastAndroid.show("Could not get information about config!", ToastAndroid.SHORT);
      navigation.navigate("SettingsScreen");
    }
  }, [responseGetConfig]);


  useEffect(() => {
    try {
      const { id } = route && route.params;
      console.log(id);
      if (id != null) {
        setId(id);
        setLoadingGetCategories(true);
        getConfig(id, auth.token, setResponseGetConfig);
      }
    } catch (e) {
    }
  }, [route]);

  return (
    <ProtectedView logged={true}>
      <Background>
        <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
          <Text style={{ fontSize: 50 }}>
          </Text>
        </View>
        <View style={{
          flex: 4,
        }}>
          <Text style={{ fontSize: 16 }}>
            Product Name
          </Text>
          <InputText isSecure={false} value={form.name} onChange={e => {
            setForm({ ...form, "name": e });
          }} error={responseCreateConfig && responseCreateConfig.code &&
            responseCreateConfig.code === Statuses.VALIDATION_ERROR &&
            responseCreateConfig.body.name
          } />
          <Text style={{ fontSize: 16 }}>
            Category
          </Text>
          <SelectButton setLoadingCategories={setLoadingCategories} onSelect={(id) => {
            setForm({ ...form, "categoryId": id });
          }} idSelected={form.categoryId}
                        error={responseCreateConfig && responseCreateConfig.code &&
                          responseCreateConfig.code === Statuses.VALIDATION_ERROR &&
                          responseCreateConfig.body.categoryId}
          />
          <Text style={{ fontSize: 16 }}>
            Price
          </Text>
          <TwoValuesSelect leftValue={form.priceFrom && form.priceFrom.toString()}
                           setLeftValue={e => setForm({ ...form, "priceFrom": e })}
                           leftError={responseCreateConfig && responseCreateConfig.code &&
                             responseCreateConfig.code === Statuses.VALIDATION_ERROR &&
                             responseCreateConfig.body.priceFrom
                           }
                           rightValue={form.priceTo && form.priceTo.toString()}
                           setRightValue={e => setForm({ ...form, "priceTo": e })}
                           rightError={responseCreateConfig && responseCreateConfig.code &&
                             responseCreateConfig.code === Statuses.VALIDATION_ERROR &&
                             responseCreateConfig.body.priceTo
                           } />
        </View>

        <View style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: id == null ? "center" : "space-between",
          width: 300,
        }}>{id &&
          <SecondaryButton onPress={() => {
            setLoadingDeleteCategories(true);
            deleteConfig(id, auth.token, setResponseDeleteConfig);
          }}>
            Remove
          </SecondaryButton>}
          <MainButton onPress={() => {
            setLoadingCreateConfig(true);
            id == null ?
              createConfig(auth.token, form, setResponseCreateConfig) :
              updateConfig(id, auth.token, form, setResponseCreateConfig);
          }
          }>
            Save
          </MainButton>
        </View>
        {(loadingCreateConfig || loadingCategories || loadingGetCategories || loadingDeleteCategories) &&
          <LoadingRoll />}
      </Background>
    </ProtectedView>
  );
};
export default EditConfigScreen;

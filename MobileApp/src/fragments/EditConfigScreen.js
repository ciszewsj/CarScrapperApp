import { Background } from "../elements/Background";
import { Text, ToastAndroid, View } from "react-native";
import InputText from "../elements/buttons/InputText";
import SecondaryButton from "../elements/buttons/SecondaryButton";
import MainButton from "../elements/buttons/MainButton";
import SelectButton from "../elements/buttons/SelectButton";
import { useNavigation } from "@react-navigation/native";
import TwoValuesSelect from "../elements/TwoValuesSelect";
import ProtectedView from "../elements/ProtectedView";
import { createConfig, getProductsCategories } from "../client/Client";
import { useContext, useEffect } from "react";
import { GlobalUserContext } from "../context/GlobalUserContext";
import { useState } from "react";
import { Statuses } from "../client/ResponseObject";
import LoadingRoll from "../elements/LoadingRoll";

let EditConfigScreen = () => {
  const navigation = useNavigation();
  const [auth, setAuth] = useContext(GlobalUserContext);
  const [form, setForm] = useState({});
  const [responseCreateConfig, setResponseCreateConfig] = useState({});
  const [responseGetConfig, setResponseGetConfig] = useState({});
  const [loadingCreateConfig, setLoadingCreateConfig] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(false);

  console.log(form);

  useEffect(() => {
    if (responseCreateConfig.code === Statuses.SUCCESS) {


    } else {
      ToastAndroid.show("Wrong data !", ToastAndroid.SHORT);
    }
    setLoadingCreateConfig(false);
  }, [responseCreateConfig]);

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
          }} />
          <Text style={{ fontSize: 16 }}>
            Category
          </Text>
          <SelectButton setLoadingCategories={setLoadingCategories} onSelect={(id) => {
            setForm({ ...form, "categoryId": id });

          }} />
          <Text style={{ fontSize: 16 }}>
            Price
          </Text>
          <TwoValuesSelect leftValue={form.priceFrom} setLeftValue={e => setForm({ ...form, "priceFrom": e })}
                           rightValue={form.priceTo} setRightValue={e => setForm({ ...form, "priceTo": e })} />
        </View>

        <View style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          width: 300,
        }}>
          <SecondaryButton onPress={() => navigation.navigate("SettingsScreen")}>
            Remove
          </SecondaryButton>
          <MainButton onPress={() => {
            setLoadingCreateConfig(true);
            createConfig(auth.token, form, setResponseCreateConfig);
          }
          }>
            Save
          </MainButton>
        </View>
        {loadingCreateConfig || loadingCategories && <LoadingRoll />}
      </Background>
    </ProtectedView>
  );
};
export default EditConfigScreen;

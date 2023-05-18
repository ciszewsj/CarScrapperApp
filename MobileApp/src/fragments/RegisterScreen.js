import { Text, ToastAndroid, View } from "react-native";
import InputText from "../elements/buttons/InputText";
import SecondaryButton from "../elements/buttons/SecondaryButton";
import { Background } from "../elements/Background";
import { useNavigation } from "@react-navigation/native";
import ProtectedView from "../elements/ProtectedView";
import { useEffect, useState } from "react";
import { register } from "../client/Client";
import { Statuses } from "../client/ResponseObject";
import LoadingRoll from "../elements/LoadingRoll";

export let RegisterScreen = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (response.code === Statuses.SUCCESS) {
      navigation.navigate("Login");
    } else if (response.code === Statuses.VALIDATION_ERROR || response.code === Statuses.FAILURE) {
      ToastAndroid.show("Wrong data !", ToastAndroid.SHORT);
    }
    setLoading(false);
  }, [response]);

  console.log(response);
  return (
    <ProtectedView logged={false}>
      <Background>
        <View style={{ flex: 2, justifyContent: "center", alignContent: "center" }}>
          <Text style={{ fontSize: 50 }}>
            ScrapItem
          </Text>
        </View>
        <View style={{
          flex: 3,
        }}>
          <Text style={{ fontSize: 16 }}>
            Name
          </Text>
          <InputText isSecure={false} value={form.name} onChange={e => {
            setForm({ ...form, "name": e });
          }} error={response && response.code &&
            response.code === Statuses.VALIDATION_ERROR &&
            response.body.name} />
          <Text style={{ fontSize: 16 }}>
            Email
          </Text>
          <InputText isSecure={false} value={form.email} onChange={e => {
            setForm({ ...form, "email": e });
          }} error={response && response.code &&
            response.code === Statuses.VALIDATION_ERROR &&
            response.body.email} />
          <Text style={{ fontSize: 16 }}>
            Password
          </Text>
          <InputText isSecure={true} value={form.password} onChange={e => {
            setForm({ ...form, "password": e });
          }} error={response && response.code &&
            response.code === Statuses.VALIDATION_ERROR &&
            response.body.password} />
        </View>
        <View style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-start",
        }}>
          <SecondaryButton isWidth={true} onPress={() => {
            setLoading(true);
            register(form, setResponse);
          }}>
            Register
          </SecondaryButton>
        </View>
        {loading && <LoadingRoll />}

      </Background>
    </ProtectedView>
  );
};

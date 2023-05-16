import { Text, ToastAndroid, View } from "react-native";
import MainButton from "../elements/buttons/MainButton";
import SecondaryButton from "../elements/buttons/SecondaryButton";
import InputText from "../elements/buttons/InputText";
import { Background } from "../elements/Background";
import { useNavigation } from "@react-navigation/native";
import "firebase/auth";
import firebase from "firebase/compat";
import { useContext, useState } from "react";
import LoadingRoll from "../elements/LoadingRoll";
import { GlobalUserContext, globalUsersSettings } from "../context/GlobalUserContext";
import ProtectedView from "../elements/ProtectedView";
import Toast from "react-native-toast-message";
// import Toast from "react-native-toast-message";

let LoginScreen = () => {

  const [auth, setAuth] = useContext(GlobalUserContext);

  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({});

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
            Email
          </Text>
          <InputText value={form.login} onChange={e => {
            setForm({ ...form, "login": e });
          }} />
          <Text style={{ fontSize: 16 }}>
            Password
          </Text>
          <InputText value={form.password} onChange={e => {
            setForm({ ...form, "password": e });
          }} isSecure={true}

          />
        </View>

        <View style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          width: 300,
        }}>
          <SecondaryButton onPress={() => navigation.navigate("Register")}>
            Register
          </SecondaryButton>
          <MainButton onPress={() => {
            setLoading(true);
            firebase.auth().signInWithEmailAndPassword(form.login, form.password)
              .then(info => {
                  info.user.getIdToken().then(
                    token => {
                      setLoading(false);
                      setAuth(globalUsersSettings(token, info.user.email, info.user.displayName,
                        info.user.tenantId));
                    },
                  ).catch(e => {
                      console.log("Bład");
                      Toast.show({
                        type: "success",
                        text1: "Hello",
                        text2: "This is some something 👋",
                      });
                      setLoading(false);
                    },
                  );
                },
              ).catch(e => {
              console.log("Bład");
              Toast.show({
                type: "success",
                text1: "Hello",
                text2: "This is some something 👋",
              });
              setLoading(false);
            });
          }}>
            Login
          </MainButton>
        </View>
        {loading && <LoadingRoll />}

      </Background>
    </ProtectedView>

  );
};


export default LoginScreen;

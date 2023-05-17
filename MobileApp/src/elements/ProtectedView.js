import { useContext } from "react";
import { GlobalUserContext } from "../context/GlobalUserContext";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase/compat";
import { ToastAndroid } from "react-native";

let ProtectedView = ({ logged, children }) => {
  const [auth, setAuth] = useContext(GlobalUserContext);
  const navigation = useNavigation();

  useEffect(() => {
    let timeout;
    if (auth != null && auth.token != null) {
      timeout = setTimeout(async () => {
        try {
          const user = firebase.auth().currentUser;
          if (user) {
            const refreshedToken = await user.getIdToken(true);
            console.log("Odświeżony token:", refreshedToken);
            setAuth({ ...auth, "token": refreshedToken });
          } else {
            console.log("Not logged in user");
            ToastAndroid.show("Auth problem!", ToastAndroid.SHORT);
          }
        } catch (error) {
          console.log("Błąd podczas odświeżania tokenu:", error);
          ToastAndroid.show("Auth problem!", ToastAndroid.SHORT);
        }
      }, 1000 * 60 * 10);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [auth]);

  useEffect(() => {
    switch (logged) {
      case false : {
        if (auth.token) {
          navigation.reset({
            index: 0,
            routes: [{ name: "Main" }],
          });
        }
        break;
      }
      case true:
        if (!auth.token) {
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });
          break;
        }
    }

  }, [auth]);

  return (
    <>
      {children}
    </>
  );
};

export default ProtectedView;

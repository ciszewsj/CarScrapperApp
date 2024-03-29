import { useContext, useState } from "react";
import { GlobalUserContext } from "../context/GlobalUserContext";
import { useEffect } from "react";
import { AsyncStorage } from "react-native";
import LoadingRoll from "./LoadingRoll";
import firebase from "firebase/compat";

let StorageService = () => {
  const [auth, setAuth] = useContext(GlobalUserContext);

  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);

    // await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    //
    // let user = await firebase.auth().currentUser;

    // console.log(user)

    // await AsyncStorage.getItem("userData")
    //   .then(async (value) => {
    //     if (value) {
    //       let info = JSON.parse(value);
    //       if (info.token) {
    //         setAuth(info);
    //       }
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("Błąd podczas wczytywania zmiennej:", error);
    //   });
    setLoading(false);
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("userData", JSON.stringify(auth))
      .then(() => {
        console.log("Zmienna została zapisana.");
      })
      .catch((error) => {
        console.log("Błąd podczas zapisywania zmiennej:", error);
      });
  }, [auth]);

  return (
    <>
      {loading && <LoadingRoll />}
    </>
  );
};

export default StorageService;

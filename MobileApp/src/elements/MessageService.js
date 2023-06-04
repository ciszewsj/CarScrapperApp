import messaging from "@react-native-firebase/messaging";
import { useEffect } from "react";
import firebase from "firebase/compat";
import Toast from "react-native-toast-message";
import { useContext } from "react";
import { GlobalUserContext } from "../context/GlobalUserContext";

let MessageService = () => {
  const [auth, setAuth] = useContext(GlobalUserContext);

  useEffect(() => {
    firebase.initializeApp({
      apiKey: "AIzaSyCtMbrjgfueCGf5UTeLGcUXOhg4CDJ1Wk0", appId: "1:86231730698:android:2b2ed375e8006821722df3",
    });
    messaging().getToken().then(token => console.log(token));
    messaging().setBackgroundMessageHandler(message => {
      console.log(message);
    });
    messaging().onMessage(async remoteMessage => {
      Toast.show({
        type: "success",
        text1: remoteMessage.notification.title,
        text2: remoteMessage.notification.body,
      });
    });
    console.log("APP INITED")
  }, []);

  useEffect(() => {
    const subscribeToTopic = async () => {
      if (auth != null && auth.userID != null) {
        await messaging().subscribeToTopic(auth.userID);
      }
    };

    const unsubscribeFromTopic = async () => {
      if (auth != null && auth.userID != null) {
        await messaging().unsubscribeFromTopic(auth.userID);
      }
    };
    subscribeToTopic();
    return () => {
      unsubscribeFromTopic();
    };
  }, [auth]);


  return <>
  </>;
};

export default MessageService;

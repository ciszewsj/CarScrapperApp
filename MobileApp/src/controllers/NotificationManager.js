import { useEffect } from "react";
import messaging from "@react-native-firebase/messaging";
import { Alert } from "react-native";

let NotificationManager = ({ setToken }) => {


  useEffect(() => {
    messaging().getToken().then(
      obj => {
        console.log("FCM : ", obj);
        setToken(obj);
      },
    );

    // messaging().setBackgroundMessageHandler(
    messaging().onMessage(
      async remoteMessage => {
        let message_body = remoteMessage.notification.body;
        let message_title = remoteMessage.notification.title;
        let avatar = remoteMessage.notification.android.imageUrl;

        console.log(message_title, message_body);
        Alert.alert(message_title, message_body);
      });
    let unsubscribe = messaging().onMessage(
      async remoteMessage => {
        console.log(remoteMessage);
      });
    return unsubscribe;

  }, []);
  return null;
};
export default NotificationManager;

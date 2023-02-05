import { Component, useEffect } from "react";
import PushNotification from "react-native-push-notification";

let PushController = () => {

  useEffect(() => {
    PushNotification.configure({
      onNotification: function(notification) {
        console.log("NOTIFICATION: ", notification);
      },
      popInitialNotification: true,
    });
  });

  return null;

};
export default PushController;

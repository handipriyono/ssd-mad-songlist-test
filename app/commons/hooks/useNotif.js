import { useEffect, useRef } from "react";
import * as Notifications from "expo-notifications";

export default function useNotifHook() {
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {});

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        // console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
}

export async function sendNotif(content) {
  await Notifications.scheduleNotificationAsync({
    content: content,
    trigger: null,
  });
}

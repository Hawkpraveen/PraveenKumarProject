import * as Notifications from "expo-notifications";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    async function fetchMyAPI() {
      schedulePushNotification();
      console.log("working");
    }
    const intervalId = setInterval(() => {
      fetchMyAPI();
    }, 1000 * (60 * 60)); // in milliseconds
    // 1000 * (5 * 60*60)
    return () => clearInterval(intervalId);
  }, []);
  async function allowsNotificationsAsync() {
    const settings = await Notifications.getPermissionsAsync();
    return (
      settings.granted ||
      settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
    );
  }
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
  async function schedulePushNotification() {
    const hasPushNotificationPermissionGranted =
      await allowsNotificationsAsync();

    if (hasPushNotificationPermissionGranted) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Take Water",
          body: "Here is the Water remainder",
          data: { data: "goes here" },
        },
        trigger: { seconds: 1 },
      });
    }
  }
  return <></>;
}

import * as Notifications from "expo-notifications";
import { useEffect } from "react";
const Lunchnotification = () => {
  useEffect(() => {
    async function fetchMyAPI() {
      schedulePushNotification();
      console.log("working");
    }

    fetchMyAPI();
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
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    }),
  });
  async function schedulePushNotification() {
    const hasPushNotificationPermissionGranted =
      await allowsNotificationsAsync();

    if (hasPushNotificationPermissionGranted) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Lunch",
          body: "its time to take up your Lunch",
        },
        trigger: {
          hour: 13,
          minute: 5,
          repeats: true,
        },
      });
    }
  }
  return <></>;
};

export default Lunchnotification;

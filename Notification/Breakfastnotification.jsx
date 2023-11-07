import * as Notifications from "expo-notifications";
import { useEffect } from "react";
const Breakfastnotification = () => {
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
          title: "Breakfast",
          body: "its time to take up your Breakfast",
        },
        trigger: {
          trigger: {
            hour: 8,
            minute: 30,
            repeats: true,
          },
        },
      });
    }
  }
  return <></>;
};

export default Breakfastnotification;

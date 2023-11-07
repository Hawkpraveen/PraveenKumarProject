import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useRoute } from "@react-navigation/core";
import { useState } from "react";
import Home from "./full/Home";
import Coach from "./full/Coach";
import Challenge from "./full/Challenge";
import Profile from "./full/Profile";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Waternotification from "./Notification/Waternotification";
import Breakfastnotification from "./Notification/Breakfastnotification";
import Lunchnotification from "./Notification/Lunchnotification";
import Dnrnotification from "./Notification/Dnrnotification";
import Excerisenotification from "./Notification/Excerisenotification";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
const Tab = createMaterialBottomTabNavigator();
const User = () => {
  const route = useRoute();
  const [v, setv] = useState(route.params.id);

  return (
    <>
      <StatusBar style="light" />
      <Waternotification />
      <Breakfastnotification />
      <Lunchnotification />
      <Dnrnotification />
      <Excerisenotification />

      <Tab.Navigator>
        <Tab.Screen
          name="Uhome"
          component={Home}
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home-work" size={26} color={color} />
            ),
          }}
          initialParams={{ id: v }}
        />
        <Tab.Screen
          name="coach"
          component={Coach}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map" color={color} size={26} />
            ),
          }}
          initialParams={{ id: v }}
        />
        <Tab.Screen
          name="challenge"
          component={Challenge}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map" color={color} size={26} />
            ),
          }}
          initialParams={{ id: v }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map" color={color} size={26} />
            ),
          }}
          initialParams={{ id: v }}
        />
      </Tab.Navigator>
    </>
  );
};

export default User;

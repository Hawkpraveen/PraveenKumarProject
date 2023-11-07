import { createDrawerNavigator } from "@react-navigation/drawer";
import Notification from "./user/Notification";
import { useRoute } from "@react-navigation/core";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import Deit from "./user/Deit";
import { View } from "react-native";
import Daily from "./user/Daily";
import Exercise from "./user/Exercise";
import Userhome from "./user/Userhome";
import Updateprofile from "./user/Updateprofile";

const User = ({ navigation }) => {
  const route = useRoute();

  const [i, seti] = useState(route.params["id"]);

  return (
    <>
      <Notification />

      {/* <View style={{ marginLeft: "85%", marginTop: "10%" }}>
        <MaterialCommunityIcons
          name="logout"
          size={50}
          color="black"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View> */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="userhome"
          component={Userhome}
          initialParams={{ id: i }}
        />
        <Stack.Screen
          name="exercise"
          component={Exercise}
          initialParams={{ id: i }}
        />
        <Stack.Screen name="deit" component={Deit} initialParams={{ id: i }} />
        <Stack.Screen
          name="update"
          component={Updateprofile}
          initialParams={{ id: i }}
        />
        <Stack.Screen
          name="daily"
          component={Daily}
          initialParams={{ id: i }}
        />
      </Stack.Navigator>

      {/* <Tab.Screen
          name="Userdetails"
          component={Userdetails}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-edit"
                size={26}
                color="black"
              />
            ),
          }}
          initialParams={{ id: i }}
        /> */}
    </>
  );
};

export default User;

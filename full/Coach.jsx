import { useRoute } from "@react-navigation/core";

import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import Deit from "../user/Deit";

import Exercise from "../user/Exercise";
import Userhome from "../user/Userhome";
import Updateprofile from "../user/Updateprofile";
import viewcalories from "../user/Viewcalories";
import Viewcalories from "../user/Viewcalories";
import Generalfact from "../user/Generalfact";
const Coach = () => {
  const route = useRoute();

  const [i, seti] = useState(route.params["id"]);
  return (
    <>
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
          component={Generalfact}
          initialParams={{ id: i }}
        />
        <Stack.Screen
          name="daily"
          component={Viewcalories}
          initialParams={{ id: i }}
        />
      </Stack.Navigator>
    </>
  );
};

export default Coach;

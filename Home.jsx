import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import Login from "./Login";
import Register from "./Register";

import User from "./User";
import Editdata from "./user/Editdata";

import Videos from "./Video";
import Admin from "./Admin";
const Home = () => {
  const logout = (navigation) => {
    navigation.navigate("home");
  };
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="video" component={Videos} />
          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen name="Register" component={Register} />

          <Stack.Screen name="user" component={User} />

          <Stack.Screen name="edit" component={Editdata} />
          <Stack.Screen name="admin" component={Admin} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Home;

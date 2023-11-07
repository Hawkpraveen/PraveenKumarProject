import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./admin/Home";

const Drawer = createDrawerNavigator();
const Admin = () => {
  return (
    <>
      <Drawer.Navigator initialRouteName="Home" useLegacyImplementation={true}>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </>
  );
};

export default Admin;

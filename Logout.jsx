import { useEffect } from "react";

const Logout = ({ navigation }) => {
  useEffect(() => {
    navigation.navigate("Login");
  });
  return <></>;
};

export default Logout;

import axios from "axios";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (email == "admin" && password == "1212") {
      navigation.navigate("admin");
    } else {
      const value = {
        name: email,
        password: password,
      };

      axios.post(" http://192.168.45.27:5000/login", value).then((res) => {
        var a = res.data;
        console.log(a);
        if (a !== null) {
          navigation.navigate("user", { id: a[0] });
        } else {
          Alert.alert("Failed", "check username or password");
        }
      });
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/295/295128.png",
        }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 40, color: "red" }}>
        LOGIN 
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          login();
        }}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.regBtn}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  forbt: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    backgroundColor: "#00FFEF",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "white",
  },
  image: {
    marginBottom: 40,
    width: "40%",
    height: "20%",
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "red",
  },
  regBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "00FFEF",
  },
});

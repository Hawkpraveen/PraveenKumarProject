import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const Register = ({ navigation }) => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setmobile] = useState("");
  const [currentstatus, setcurrentstatus] = useState("");
  const [workingcompany, setworkingcompany] = useState("");
  const [designation, setdesignation] = useState("");
  const [role, setrole] = useState("");
  const [radioButton, setRadioButton] = useState("Yes");
  const register = () => {
    const value = {
      name: name,
      email: email,
      mobile: mobile,
      height: currentstatus,
      weight: workingcompany,
      age: designation,
      gender: radioButton,
      password: password,
    };
    axios.post(" http://192.168.45.27:5000/insertusers", value).then((res) => {
      Alert.alert("Registered Successfully", "Thank you for registration");
      navigation.navigate("Login");
    });
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#82EEFD" }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 25,
          marginLeft: "30%",
          color: "white",
          marginTop: "20%",
          alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
          
        }}
      >
        REGISTER
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setname(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Mobile."
          placeholderTextColor="#003f5c"
          onChangeText={setmobile}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Height in cm"
          placeholderTextColor="#003f5c"
          onChangeText={setcurrentstatus}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Weight in kg"
          placeholderTextColor="#003f5c"
          onChangeText={setworkingcompany}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Age"
          placeholderTextColor="#003f5c"
          onChangeText={setdesignation}
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
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity onPress={() => setRadioButton("Male")}>
          <Text style={{ color: "white" }}>
            <Ionicons
              name={
                radioButton === "Male" ? "radio-button-on" : "radio-button-off"
              }
              size={25}
              color="white"
            />
            Male
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setRadioButton("Female")}>
          <Text style={{ color: "white" }}>
            <Ionicons
              name={
                radioButton === "Female"
                  ? "radio-button-on"
                  : "radio-button-off"
              }
              size={25}
              color="white"
            />
            Female
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          register();
        }}
      >
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  forbt: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    backgroundColor: "#82EEFD",
    alignItems: "center",
  },
  loginText: {
    color: "white",
  },
  image: {
    marginBottom: 10,
    width: "20%",
    height: "20%",
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    marginLeft: "10%",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    alignItems: "center",
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
    backgroundColor: "#FF1493",
    marginLeft: "5%",
  },
  regBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "blue",
  },
});

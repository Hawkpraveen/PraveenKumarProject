import axios from "axios";
import React, { useEffect, useState } from "react";
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
const image = { uri: "https://reactjs.org/logo-og.png" };
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";
const Updateprofile = ({ navigation, props }) => {
  const route = useRoute();
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setmobile] = useState("");
  const [currentstatus, setcurrentstatus] = useState("");
  const [workingcompany, setworkingcompany] = useState("");
  const [designation, setdesignation] = useState("");
  const [role, setrole] = useState("");
  const [radioButton, setRadioButton] = useState("Yes");
  console.log(route);
  const update = () => {
    const value = {
      name: name,
      email: email,
      mobile: mobile,
      height: currentstatus,
      weight: workingcompany,
      age: designation,
      gender: radioButton,
      password: password,
      userid: route.params.id,
    };
    axios.post(" http://192.168.45.27:5000/updateusers", value).then((res) => {
      Alert.alert("Update Successfully", "Thank you for Updatation");
    });
  };
  useEffect(() => {
    const value = { userid: route.params.id };

    axios.post(" http://192.168.45.27:5000/viewuseri", value).then((res) => {
      console.log(res.data);
      setname(res.data[1]);
      setEmail(res.data[2]);
      setPassword(res.data[7]);
      setmobile(res.data[3]);
      setcurrentstatus(String(res.data[4]));
      setworkingcompany(String(res.data[5]));
      setdesignation(String(res.data[6]));
      setrole(res.data[8]);
    });
  }, []);
  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 42,
            lineHeight: 84,
            fontWeight: "bold",
            textAlign: "center",
            backgroundColor: "#000000c0",
          }}
        >
          Fit Myself{" "}
        </Text>
      </ImageBackground>
      <Text style={{ fontWeight: "bold", fontSize: 25, marginLeft: "30%" }}>
        Update
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setname(email)}
          value={name}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Mobile."
          placeholderTextColor="#003f5c"
          onChangeText={setmobile}
          value={mobile}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Height in cm"
          placeholderTextColor="#003f5c"
          onChangeText={setcurrentstatus}
          value={currentstatus}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Weight in kg"
          placeholderTextColor="#003f5c"
          onChangeText={setworkingcompany}
          value={workingcompany}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Age"
          placeholderTextColor="#003f5c"
          onChangeText={setdesignation}
          value={designation}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Role"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setrole(password)}
          value={role}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          update();
        }}
      >
        <Text style={styles.loginText}>Update</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Updateprofile;

const styles = StyleSheet.create({
  forbt: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
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

import { useRoute } from "@react-navigation/core";
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";
import { TextInput } from "react-native";
import { Alert } from "react-native";
import axios from "axios";

const Editdata = ({ navigation }) => {
  const [data, setdata] = useState([
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ]);

  useEffect(() => {
    axios.post(" http://192.168.45.27:5000/noteveiw").then((res) => {
      setdata(res.data);
    });
  }, []);
  const checking = (r, x) => {
    const rx = [];
    for (var y of data) {
      if (y[0] === x[0]) {
        y[1] = r;
        rx.push(y);
      } else {
        rx.push(y);
      }
    }

    setdata(rx);
  };

  return (
    <>
      <View style={{ width: "50%", marginLeft: "25%", marginTop: "15%" }}>
        <Button
          title="back"
          onPress={() => {
            navigation.navigate("coach");
          }}
        />
      </View>
      <View style={{ flex: 1, marginTop: "25%" }}>
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "white",
            color: "black",
            marginBottom: 25,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Excerise remainder{" "}
          </Text>

          <TextInput
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {" "}
            {data[0][1]}
          </TextInput>
        </View>
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "white",
            color: "black",
            marginBottom: 25,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Break Schedule{" "}
          </Text>
          <TextInput
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {" "}
            {data[1][1]}
          </TextInput>
        </View>
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "white",
            color: "black",
            marginBottom: 25,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Lunch Remainder{" "}
          </Text>
          <TextInput
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {" "}
            {data[2][1]}
          </TextInput>
        </View>
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "white",
            color: "black",
            marginBottom: 25,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Dinner remainder{" "}
          </Text>
          <TextInput
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
            onChangeText={(e) => checking(e, data[3])}
          ></TextInput>
        </View>
        <Button
          title="Update"
          onPress={() => {
            axios
              .post(" http://192.168.45.27:5000/noteup", { x: data })
              .then((res) => {
                console.log(res.data);
                setdata(res.data);
              });
          }}
        />
      </View>
    </>
  );
};

export default Editdata;

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
import Deit from "../user/Deit";

const Home = ({ navigation }) => {
  const image = { uri: "https://reactjs.org/logo-og.png" };
  const route = useRoute();
  const [i, seti] = useState(route.params["id"]);
  const [x, setx] = useState(0);
  const [bf, setbf] = useState("");
  const [data, setdata] = useState([]);
  const [lunch, setlunch] = useState("");
  const [dnr, setdnr] = useState("");
  const [excerise, setexcerise] = useState("");
  const [water, setwater] = useState("600");
  useEffect(() => {
    axios.post(" http://192.168.45.27:5000/noteveiw").then((res) => {
      setdata(res.data);
    });
  }, []);
  const valus = () => {
    setx(0);
  };
  const check = () => {
    if (x === 0) {
      return (
        <View style={{ flex: 5 }}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          >
            <Text style={styles.text}>Fit Myself </Text>
          </ImageBackground>
          <TouchableOpacity
            style={{
              width: "90%",
              height: 150,
              borderColor: "red",
              borderWidth: 2,
              borderRadius: 15,
              margin: 15,
            }}
            onPress={() => {
              setx(1);
            }}
          >
            <View>
              <Text
                style={{
                  paddingTop: 50,
                  paddingLeft: 15,
                  fontSize: 40,
                  fontWeight: "bold",
                  color: "black",
                  textAlign: "center",
                }}
              >
                Notification Schedule
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "90%",
              height: 150,
              borderColor: "red",
              borderWidth: 2,
              borderRadius: 15,
              margin: 15,
            }}
            onPress={() => {
              setx(2);
            }}
          >
            <View>
              <Text
                style={{
                  paddingTop: 50,
                  paddingLeft: 15,
                  fontSize: 40,
                  fontWeight: "bold",
                  color: "black",
                  textAlign: "center",
                }}
              >
                Calories Intake
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: "90%",
              height: 150,
              borderColor: "red",
              borderWidth: 2,
              borderRadius: 15,
              margin: 15,
            }}
            onPress={() => {
              setx(3);
            }}
          >
            <View>
              <Text
                style={{
                  paddingTop: 50,
                  paddingLeft: 15,
                  fontSize: 40,
                  fontWeight: "bold",
                  color: "black",
                  textAlign: "center",
                }}
              >
                Diet
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else if (x === 1) {
      return (
        <>
          <View style={{ width: "50%", marginLeft: "25%", marginTop: "10%" }}>
            <Button
              title="back"
              onPress={() => {
                setx(0);
              }}
            />

            <Button
              title="Edit"
              onPress={() => {
                navigation.navigate("edit");
              }}
              color="red"
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
                Water remainder{" "}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Every 60 min{" "}
              </Text>
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
                Excerise remainder{" "}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {" "}
                {data[0][1]}
              </Text>
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
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {data[1][1]}
              </Text>
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
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {data[2][1]}
              </Text>
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
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {" "}
                {data[3][1]}
              </Text>
            </View>
          </View>
        </>
      );
    } else if (x === 2) {
      return (
        <>
          <View style={{ width: "50%", marginLeft: "25%", marginTop: "15%" }}>
            <Button
              title="back"
              onPress={() => {
                setx(0);
              }}
            />
          </View>
          <View style={{ flex: 1, marginTop: "5%" }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Break fast Calories
            </Text>
            <TextInput
              style={{
                height: 50,
                width: "80%",
                marginLeft: "10%",
                borderColor: "black",
                borderWidth: 1,
                borderStyle: "solid",
              }}
              placeholder="Break fast."
              placeholderTextColor="#003f5c"
              value={bf}
              onChangeText={setbf}
            />
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Lunch Calories
            </Text>
            <TextInput
              style={{
                height: 50,
                width: "80%",
                marginLeft: "10%",
                borderColor: "black",
                borderWidth: 1,
                borderStyle: "solid",
              }}
              placeholder="Lunch."
              placeholderTextColor="#003f5c"
              value={lunch}
              onChangeText={setlunch}
            />

            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Dinner Calories
            </Text>
            <TextInput
              style={{
                height: 50,
                width: "80%",
                marginLeft: "10%",
                borderColor: "black",
                borderWidth: 1,
                borderStyle: "solid",
              }}
              placeholder="Dinner."
              placeholderTextColor="#003f5c"
              value={dnr}
              onChangeText={setdnr}
            />

            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Exercies Calories burnt
            </Text>
            <TextInput
              style={{
                height: 50,
                width: "80%",
                marginLeft: "10%",
                borderColor: "black",
                borderWidth: 1,
                borderStyle: "solid",
              }}
              placeholder="Excerise."
              placeholderTextColor="#003f5c"
              value={excerise}
              onChangeText={setexcerise}
            />

            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Water consumed
            </Text>
            <TextInput
              style={{
                height: 50,
                width: "80%",
                marginLeft: "10%",
                borderColor: "black",
                borderWidth: 1,
                borderStyle: "solid",
              }}
              placeholder="Water consumed."
              placeholderTextColor="#003f5c"
              value={water}
              onChangeText={setwater}
            />
            <View style={{ width: "50%", marginLeft: "25%", marginTop: "15%" }}>
              <Button
                title="Submit"
                onPress={() => {
                  const value = {
                    breakfast: bf,
                    lunch: lunch,
                    dnr: dnr,
                    exercise: excerise,
                    water: water,
                    userid: i,
                  };
                  console.log(value);
                  axios
                    .post(" http://192.168.45.27:5000/insertcalories", value)
                    .then((res) => {
                      var a = res.data;
                      if (a === "s") {
                        Alert.alert("Update Successfully");
                        setbf("");
                        setdnr("");
                        setlunch("");
                        setexcerise("");
                        setwater("");
                      } else {
                        Alert.alert("Already updated Successfully");
                      }
                    });
                }}
                color="green"
              />
            </View>
          </View>
        </>
      );
    } else if (x === 3) {
      return (
        <>
          <View style={{ width: "50%", marginLeft: "25%", marginTop: "15%" }}>
            {/* <Button
              title="back"
              onPress={() => {
                setx(0);
              }}
            /> */}
          </View>
          <Deit valus={valus} />
        </>
      );
    }
  };
  return (
    <>
      <View style={styles.container}>{check()}</View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#82EEFD",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default Home;

import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
const image = { uri: "https://reactjs.org/logo-og.png" };

const Userhome = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Fit Myself </Text>
        </ImageBackground>
        <View style={{ flex: 3, flexDirection: "row", marginTop: "30%" }}>
          <TouchableOpacity
            style={{
              width: "40%",
              height: 250,
              borderColor: "white",
              borderWidth: 2,
              borderRadius: 15,
              margin: 15,
            }}
            onPress={() => {
              navigation.navigate("daily");
            }}
          >
            <View>
              <Text
                style={{
                  paddingTop: 50,
                  paddingLeft: 20,
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "orange",
                }}
              >
                Calories follow up
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "40%",
              height: 250,
              borderColor: "white",
              borderWidth: 2,
              borderRadius: 15,
              margin: 15,
            }}
            onPress={() => {
              navigation.navigate("exercise");
            }}
          >
            <View>
              <Text
                style={{
                  paddingTop: 50,
                  paddingLeft: 20,
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "orange",
                }}
              >
                Exercise
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 3, flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              width: "80%",
              height: 150,
              borderColor: "white",
              borderWidth: 2,
              borderRadius: 15,
              margin: 15,
            }}
            onPress={() => {
              navigation.navigate("update");
            }}
          >
            <View>
              <Text
                style={{
                  paddingTop: 50,
                  paddingLeft: 20,
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "orange",
                }}
              >
                General facts
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
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

export default Userhome;

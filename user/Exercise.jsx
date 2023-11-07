import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-native";
import { Pressable } from "react-native";
import { ScrollView } from "react-native";
import { View, Text, Image } from "react-native";
import { ImageBackground } from "react-native";
const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71_T4cq7gyDBvuhNXRlVKJZFEbei78i3g5Q&usqp=CAU",
};
const Exercise = () => {
  const [exercise, setexercise] = useState([]);
  const [x, setx] = useState(0);
  const [fexercise, setfexercise] = useState({});
  const [checking, setchecking] = useState([]);
  useEffect(() => {
    axios.post(" http://192.168.45.27:5000/viewexercise").then((res) => {
      setexercise(res.data[0]);
      setfexercise(res.data[1]);
    });
  }, []);
  const parse = () => {
    var k = 0;
    if (exercise.length > 0) {
      return (
        <>
          <Pressable
            onPress={() => {
              setx(1);
              setchecking(fexercise[exercise[0]]);
            }}
            key={k++}
          >
            <ImageBackground
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDs9dgMdTqhGEIjAYblQCb4JXyTvtCXN3cgg&usqp=CAU",
              }}
              resizeMode="cover"
              style={{
                flex: 1,
                // backgroundColor: "blue",
                height: 120,
                marginBottom: 25,
                paddingTop: 30,
                width: "90%",
                marginLeft: "10%",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  {exercise[0].toUpperCase()}
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
          <Pressable
            onPress={() => {
              setx(1);
              setchecking(fexercise[exercise[1]]);
            }}
            key={k++}
          >
            <ImageBackground
              source={{
                uri: "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/health/wp-content/uploads/2023/03/960x0-9.jpg",
              }}
              resizeMode="cover"
              style={{
                flex: 1,
                // backgroundColor: "blue",
                height: 120,
                marginBottom: 25,
                paddingTop: 30,
                width: "90%",
                marginLeft: "10%",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  {exercise[1].toUpperCase()}
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
          <Pressable
            onPress={() => {
              setx(1);
              setchecking(fexercise[exercise[2]]);
            }}
            key={k++}
          >
            <ImageBackground
              source={{
                uri: "https://images.ctfassets.net/psi7gc0m4mjv/a06cda8b-c45b-4465-9dfc-1a41b56acf63/cbc001fdb746c0425ddf8990d9b19acc/issa-best-arm-exercises.jpg",
              }}
              resizeMode="cover"
              style={{
                flex: 1,
                // backgroundColor: "blue",
                height: 120,
                marginBottom: 25,
                paddingTop: 30,
                width: "90%",
                marginLeft: "10%",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  {exercise[2].toUpperCase()}
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
          <Pressable
            onPress={() => {
              setx(1);
              setchecking(fexercise[exercise[3]]);
            }}
            key={k++}
          >
            <ImageBackground
              source={{
                uri: "https://cdn.shopify.com/s/files/1/0291/3743/6771/files/Cardio_exercises_1_480x480.png?v=1638875793",
              }}
              resizeMode="cover"
              style={{
                flex: 1,
                // backgroundColor: "blue",
                height: 120,
                marginBottom: 25,
                paddingTop: 30,
                width: "90%",
                marginLeft: "10%",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  {exercise[3].toUpperCase()}
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
          <Pressable
            onPress={() => {
              setx(1);
              setchecking(fexercise[exercise[4]]);
            }}
            key={k++}
          >
            <ImageBackground
              source={{
                uri: "https://www.mensjournal.com/.image/t_share/MTk2MTM2NjM1NjYzMTMyMTY1/renegaderow.jpg",
              }}
              resizeMode="cover"
              style={{
                flex: 1,
                // backgroundColor: "blue",
                height: 120,
                marginBottom: 25,
                paddingTop: 30,
                width: "90%",
                marginLeft: "10%",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  {exercise[4].toUpperCase()}
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
          <Pressable
            onPress={() => {
              setx(1);
              setchecking(fexercise[exercise[5]]);
            }}
            key={k++}
          >
            <ImageBackground
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
              resizeMode="cover"
              style={{
                flex: 1,
                // backgroundColor: "blue",
                height: 120,
                marginBottom: 25,
                paddingTop: 30,
                width: "90%",
                marginLeft: "10%",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  {exercise[5].toUpperCase()}
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
          <Pressable
            onPress={() => {
              setx(1);
              setchecking(fexercise[exercise[6]]);
            }}
            key={k++}
          >
            <ImageBackground
              source={{
                uri: "https://assets.gqindia.com/photos/5d15eb5f154641a1d2596b5c/16:9/pass/Chest%20exercise.jpg",
              }}
              resizeMode="cover"
              style={{
                flex: 1,
                // backgroundColor: "blue",
                height: 120,
                marginBottom: 25,
                paddingTop: 30,
                width: "90%",
                marginLeft: "10%",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  {exercise[6].toUpperCase()}
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
        </>
      );
    }
  };
  const check = () => {
    if (x === 0) {
      return (
        <View
          style={{
            flex: 1,
            marginTop: "5%",
          }}
        >
          {parse()}
        </View>
      );
    } else if (x === 1) {
      return (
        <>
          <View style={{ width: "20%" }}>
            <Button
              title="Back"
              onPress={() => {
                setx(0);
              }}
            />
            {checking.map((c) => {
              return (
                <View key={c[0]} style={{ flex: 1, width: "100%" }}>
                  {/* <Text>{c[2]}</Text> */}
                  <Image
                    source={{
                      uri: c[2],
                    }}
                    style={{ width: 400, height: 400 }}
                  />
                  <View
                    key={c[0]}
                    style={{
                      flex: 1,
                      width: 360,
                      borderColor: "black",
                      borderWidth: 2,
                      borderRadius: 15,
                    }}
                  >
                    <Text style={{ fontSize: 15, textAlign: "center" }}>
                      {c[1].toUpperCase()}
                    </Text>
                    <Text style={{ fontSize: 15, textAlign: "center" }}>
                      {c[3]}
                    </Text>
                    <Text style={{ fontSize: 15, textAlign: "center" }}>
                      {c[4]}
                    </Text>
                    <Text style={{ fontSize: 15, textAlign: "center" }}>
                      {c[6]}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </>
      );
    }
  };
  return (
    <>
      <ScrollView style={{ backgroundColor: "#00FFEF" }}>{check()}</ScrollView>
    </>
  );
};

export default Exercise;

import axios from "axios";
import { useEffect, useState } from "react";
import { ImageBackground, Text } from "react-native";
import { View } from "react-native";
import { ScrollView } from "react-native";
const image = {
  uri: "https://media.istockphoto.com/id/1324669937/vector/a-set-of-young-men-playing-sports-squats-push-ups-plank-meditation-yoga-stretching-sports-at.jpg?s=612x612&w=0&k=20&c=cNBug2iUUCw8eqn3rYKjueJLTtMF1E8Tu2o0dDS0pt8=",
};
const Challenge = () => {
  const [data, setdata] = useState([]);
  const [challenge, setchallenge] = useState([]);
  const [past, setpast] = useState([]);
  const [news, setnews] = useState([]);
  useEffect(() => {
    axios.post(" http://192.168.45.27:5000/dailychallenge").then((res) => {
      var x = new Date();
      const ne = [];
      const ol = [];
      for (var k of res.data) {
        if (parseInt(k[0]) > parseInt(x.getDate())) {
          ne.push(k);
        } else if (parseInt(k[0]) === parseInt(x.getDate())) {
          setchallenge(k);
        } else {
          ol.push(k);
        }
      }
      setdata(res.data);
      setnews(ne);
      setpast(ol);
    });
  }, []);

  // console.log(data);
  return (
    <>
      <View
        style={{
          flex: 1,
          borderColor: "black",
          borderWidth: 2,
        }}
      >
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
        <ScrollView
          style={{
            flex: 5,
            backgroundColor: "#82EEFD",
            // borderColor: "black",
            // borderWidth: 2,
          }}
        >
          <Text style={{ fontSize: 35, color: "white" }}>Past task</Text>
          {past.map((p) => {
            return (
              <>
                <View
                  key={p[0]}
                  style={{
                    height: 100,
                    width: 200,
                    marginLeft: "20%",
                  }}
                >
                  <ImageBackground
                    source={image}
                    resizeMode="cover"
                    style={{
                      justifyContent: "center",
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "blue",
                        textAlign: "center",
                      }}
                    >
                      {p[0]}. {p[1]}
                    </Text>
                  </ImageBackground>
                  <Text></Text>
                </View>
              </>
            );
          })}
        </ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            // borderColor: "black",
            // borderWidth: 2,
            backgroundColor: "lightgreen",
          }}
        >
          <Text style={{ fontSize: 35 }}>Current task</Text>
          <Text style={{ fontSize: 20 }}>
            {challenge[0]}. {challenge[1]}
          </Text>
        </View>
        <ScrollView
          style={{
            flex: 5,

            // borderColor: "black",
            // borderWidth: 2,
            backgroundColor: "#82EEFD",
          }}
        >
          <Text style={{ fontSize: 35, color: "white" }}>
            Upcoming challenge
          </Text>
          {news.map((p) => {
            return (
              <>
                <View
                  key={p[0]}
                  style={{
                    height: 100,
                    width: 200,
                    marginLeft: "20%",
                  }}
                >
                  <ImageBackground
                    source={image}
                    resizeMode="cover"
                    style={{
                      justifyContent: "center",
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "blue",
                        textAlign: "center",
                      }}
                    >
                      {p[0]}. {p[1]}
                    </Text>
                  </ImageBackground>
                  <Text></Text>
                </View>
              </>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default Challenge;

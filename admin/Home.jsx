import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View, Button, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Home = () => {
  const [data, setdata] = useState([]);
  const [x, setx] = useState(0);
  const [d, setd] = useState([]);
  useEffect(() => {
    axios.post(" http://192.168.45.27:5000/viewallusers").then((res) => {
      setdata(res.data);
    });
  }, []);
  console.log(data);
  const check = () => {
    if (x === 0) {
      return (
        <ScrollView style={{ backgroundColor: "#82EEFD" }}>
          <Text style={{ textAlign: "center", fontSize: 20 }}> All user</Text>
          {data.map((d) => {
            return (
              <Pressable
                key={d[0]}
                onPress={() => {
                  setx(1);
                  setd(d);
                }}
              >
                <View
                  style={{
                    // borderColor: "black",
                    // borderWidth: 2,
                    marginBottom: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                  }}
                >
                  <Text>{d[1]}</Text>
                  <Text>{d[3]}</Text>
                  <Text>{d[4]}</Text>
                  <View style={{ marginLeft: "80%", marginTop: "-15%" }}>
                    <Ionicons
                      name="trash"
                      size={50}
                      color="red"
                      onPress={() => {
                        axios
                          .post("  http://192.168.45.27:5000/deleteusers", {
                            id: d[0],
                          })
                          .then((res) => {
                            setdata(res.data);
                          });
                      }}
                    />
                  </View>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      );
    } else if (x === 1) {
      var r = 0;
      return (
        <ScrollView style={{ marginTop: "10%", backgroundColor: "blue" }}>
          <View style={{ marginLeft: "90%" }}>
            <Ionicons
              name="ios-chevron-back-circle-sharp"
              size={24}
              color="white"
              onPress={() => {
                setx(0);
                setd([]);
              }}
            />
          </View>
          <Text style={{ textAlign: "center", fontSize: 30, color: "white" }}>
            {" "}
            {d[1]} Details
          </Text>

          <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
            Id - {d[0]}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
            Name - {d[1]}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
            Email - {d[2]}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
            Mobile - {d[3]}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
            Height - {d[4]}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
            Weight - {d[5]}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
            Age- {d[6]}
          </Text>

          <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
            Type - {d[9]}
          </Text>
        </ScrollView>
      );
    }
  };
  return <>{check()}</>;
};

export default Home;

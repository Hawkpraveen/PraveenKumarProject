import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

const Viewcalories = () => {
  const route = useRoute();
  const [i, seti] = useState(route.params["id"]);
  const [data, setdata] = useState([]);
  const [tdata, settdata] = useState([]);
  useEffect(() => {
    const value = { id: i };
    axios.post(" http://192.168.45.27:5000/calories", value).then((res) => {
      console.log(res.data);
      setdata(res.data);
    });
    axios
      .post(" http://192.168.126.27:5000/eachcalories", value)
      .then((res) => {
        console.log(res.data);
        settdata(res.data);
      });
  }, []);

  return (
    <>
      <View
        style={{
          alignItems: "center",
          paddingTop: 50,
          backgroundColor: "lightgreen",
        }}
      >
        <Text style={{ fontSize: 25 }}>Today Calories</Text>
        <Text style={{ fontSize: 20 }}>Breakfast {tdata[1]}</Text>
        <Text style={{ fontSize: 20 }}>Lunch {tdata[2]}</Text>
        <Text style={{ fontSize: 20 }}>Dnr {tdata[3]}</Text>
        <Text style={{ fontSize: 20 }}>Exercise {tdata[4]}</Text>
        {/* <Text style={{ fontSize: 20 }}>Date {tdata[5]}</Text> */}
        <Text style={{ fontSize: 20 }}>Water consumed {tdata[7]} glass</Text>
      </View>
      <ScrollView style={{ flex: 2, backgroundColor: "lightblue" }}>
        <Text style={{ fontSize: 25 }}>Month Calories</Text>
        {data.map((tdata) => {
          return (
            <>
              <Text style={{ fontSize: 20, color: "white" }}>
                Date {tdata[5]}
              </Text>
              <Text style={{ fontSize: 20, color: "white" }}>
                Breakfast {tdata[1]}
              </Text>
              <Text style={{ fontSize: 20, color: "white" }}>
                Lunch {tdata[2]}
              </Text>
              <Text style={{ fontSize: 20, color: "white" }}>
                Dnr {tdata[3]}
              </Text>
              <Text style={{ fontSize: 20, color: "white" }}>
                Exercise {tdata[4]}
              </Text>

              <Text style={{ fontSize: 20, color: "white" }}>
                Water consumed {tdata[7]}
              </Text>
              <Text></Text>
            </>
          );
        })}
      </ScrollView>
    </>
  );
};

export default Viewcalories;

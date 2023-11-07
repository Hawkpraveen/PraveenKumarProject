import axios from "axios";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";

const Daily = () => {
  const [data, setdata] = useState([]);
  const [challenge, setchallenge] = useState([]);
  useEffect(() => {
    axios.post(" http://192.168.45.27:5000/dailychallenge").then((res) => {
      console.log(res.data);
      var x = new Date();
      console.log(x.getDate());
      console.log(res.data);
      for (var k of res.data) {
        console.log([k[0], x.getDate()]);
        if (parseInt(k[0]) === parseInt(x.getDate())) {
          setchallenge(k);
        }
      }
      setdata(res.data);
    });
  }, []);
  console.log(challenge);
  // console.log(data);
  return (
    <>
      <View style={{ flex: 1 }}>
        <Text>{challenge}</Text>
      </View>
    </>
  );
};

export default Daily;

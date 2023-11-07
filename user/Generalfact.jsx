import axios from "axios";

import React, { useEffect, useState, useRef } from "react";

//import all the components we are going to use
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
} from "react-native";
const Generalfact = ({ navigation }) => {
  const [x, setx] = useState([]);
  const [listItems, setListItems] = useState();

  useEffect(() => {
    axios.post(" http://192.168.45.27:5000/getquotes").then((res) => {
      setListItems(res.data);
    });
  }, []);
  console.log(listItems);
  const ItemView = ({ item }) => {
    return (
      // Single Comes here which will be repeatative for the FlatListItems

      <Text style={styles.item} onPress={() => getItem(item)}>
        {item.text}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      //Item Separator
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#C8C8C8" }}
      />
    );
  };

  const getItem = (item) => {
    //Function for click on an item
    alert(
      "Quotes : " +
        item.text +
        "\nAuthor:" +
        item.author +
        "\nCategories: " +
        item.categories
    );
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#00FFEF" }}>
        <View style={{ width: "50%", marginLeft: "25%", marginTop: "15%" }}>
          {/* <Button
            title="back"
            onPress={() => {
              navigation.navigate("userhome");
            }}
          /> */}
        </View>
        <View style={styles.container}>
          <Text style={{ fontSize: 25, textAlign: "center", color: "white" }}>
            Quotations
          </Text>
          <FlatList
            data={listItems}
            //data defined in constructor
            ItemSeparatorComponent={ItemSeparatorView}
            //Item Separator View
            renderItem={ItemView}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Generalfact;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 40,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 150,
    color: "white",
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    font: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "rgb(50 219 200)",
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    fontSize: 17,
  },
  circular: {
    width: 12,
    height: 12,
    borderRadius: 5,
    backgroundColor: "#0d584f",
  },
});

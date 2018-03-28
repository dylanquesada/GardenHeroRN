import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export const ListItem = (props) => {
  return(
    <TouchableOpacity onPress={() => {
      console.log('success.' + props.title)
      
    }}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
      marginRight: 8,
      height: 30,
      width: 30
  }
});

//export default { ListItem } ;
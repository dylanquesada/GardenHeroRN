import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { ListItem } from "./listItem";

export default class ShoppingFlatList extends React.Component{
  render(){
    return (
      <FlatList
        data={this.props.data}
        renderItem={({ item }) =>(<ListItem title={item.name}/>) } 
      />
    );
  };
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});


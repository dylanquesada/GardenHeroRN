import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "./listItem";

const ShoppingFlatList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.array}
      renderItem={(info) => (
        <ListItem
          itemName={info.item.name}
          onItemPressed={() => props.onItemSelected(info.item.name)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default ShoppingFlatList;

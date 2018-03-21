import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { ShoppingFlatList } from '../components/shoppingList';
import {
	addItem, 
	deleteItem, 
	selectItem, 
	deselectItem 
} from '../actions/idActions';


class ShoppingList extends Component{
	itemSelectedHandler = itemName => {
		this.props.selectItem(itemName);
	};
	itemDeletedHandler = () => {
		this.props.deleteItem();
	};
	render(){
		return(
			<View>
				<Text>Pashaw Pashaw</Text>
				<ShoppingFlatList 
					array={this.props.array}
					onItemSelected={this.itemSelectedHandler}
				/>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
  const { array, experience, error, loading, numberOfPlants, email, weeklyHours } = state.id;
  return { array, experience, error, loading, numberOfPlants, email, weeklyHours }; 
};

export default connect(mapStateToProps, {
})(ShoppingList);
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import ShoppingFlatList from '../components/shoppingList';
import {
	addItem, 
	deleteItem, 
	selectItem, 
	deselectItem 
} from '../actions/idActions';
import ListItem from '../components/listItem';



class ShoppingList extends Component{
	itemSelectedHandler = itemName => {
		this.props.selectItem(itemName);
	};
	itemDeletedHandler = () => {
		this.props.deleteItem();
	};
	render(){
		let newArray = this.props.array;
		let groceryList = [];
		for(let i = 0; i < newArray.length; i++){
			console.log('newArray[i]: ' + newArray[i].name);
			groceryList.push(newArray[i]);
		}
		return(
			<View>
				<Text>Pashaw Pashaw</Text>
				<ShoppingFlatList
					data={groceryList}
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
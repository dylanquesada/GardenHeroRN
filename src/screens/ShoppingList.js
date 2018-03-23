import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import ShoppingFlatList from '../components/shoppingList';
import {
	addItem, 
	deleteItem, 
	selectItem, 
	deselectItem 
} from '../actions/idActions';
import ListItem from '../components/listItem';
import { Actions } from 'react-native-router-flux';




class ShoppingList extends Component{
	onAddPlantPress(){
		Actions.addPlant();
	}
	renderAddPlantButton(){
		return(
			<Button
				onPress={this.onAddPlantPress.bind(this)}
				title='Add Plant to Garden'
			/>
		)
	}
	itemSelectedHandler = itemName => {
		this.props.selectItem(itemName);
	};
	itemDeletedHandler = () => {
		this.props.deleteItem();
	};
	render(){
		if(this.props.array.length > 0){
			let newArray = this.props.array;
			let groceryList = [];
			for(let i = 0; i < newArray.length; i++){
				console.log('newArray[i]: ' + newArray[i].name);
				groceryList.push(newArray[i]);
			}
			return(
				<View>
					<ShoppingFlatList
						data={groceryList}
					/>
					{this.renderAddPlantButton()}
				</View>
			)
		}
		else{
			return(
				<View>
					<Card>
						<Text>This is where your shopping list lives. Select some plants to add them to your list. Alternatively, click below to start planting your garden.</Text>
					</Card>
					{this.renderAddPlantButton()}
				</View>
			)
		}
	}
}

const mapStateToProps = (state) => {
  const { array, experience, error, loading, numberOfPlants, email, weeklyHours } = state.id;
  return { array, experience, error, loading, numberOfPlants, email, weeklyHours }; 
};

export default connect(mapStateToProps, {
})(ShoppingList);
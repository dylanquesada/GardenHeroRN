import React, { Component } from  'react';
import { Text, FlatList, View } from 'react-native';
import { Card } from 'react-native-elements';
import { ListItem } from './listItem';

export default class ToDoList extends Component{

	render(){
		if(2 > 0){
			return(
				<FlatList
					data={[{title: 'Plant Tomatoes', key: 'taask one'}, {title: 'Water Tomatos', key: 'task two'}]}
					renderItem={({ item }) =>(<ListItem title={item.title}/>) } 
				/>
			);
		}
		else{
			return(
				<Card>
					<Text>Nothing to do today!</Text>
				</Card>
			);
		}
		
	}
}
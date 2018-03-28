import React from "react";
import { View, Text } from "react-native";
import Key from '../components/key';
import  ToDoList from '../components/toDoList';
import { Calendar } from 'react-native-calendars';
export default class ToDo extends React.Component{
	async populateCalendar(){

	}
	render(){
		return(
			<View style={{ flex: 1 }}>
				<Calendar 
					onDayPress={(day) => {console.log(day)}}
				/>
				<Key />
				<ToDoList />			
  			</View>
		)
	}
}
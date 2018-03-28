import React from "react";
import { View, Text } from "react-native";
import Key from '../components/key';
import  ToDoList from '../components/toDoList';
import { Calendar } from 'react-native-calendars';
import { populateTasksArray, userUpdate } from '../actions/idActions';
import { connect } from 'react-redux';


class ToDo extends React.Component{
	state = {
		tasks: [],
		selectedTasks: []
	};
	async populateTasks(){
		var temporaryTasks = await populateTasksArray();
		this.props.userUpdate({
			prop: 'tasks', value: temporaryTasks
		});
	}
	changeMillisecondsToDates(array){
		console.log('changeMillisecondsToDates start, array: ' + array);
		result = [];
		for(i = 0; i < array.length; i++){
			array[i].taskDate = new Date(array[i].taskDate);
			console.log('date: ' + array[i].taskDate)
		}
	}
	populateCalendar(){
		for(i =0; i < this.props.tasks.length; i++){

		}
	}
	selectDayHandler(day){
		let today = Date.now();
		// var result = this.props.tasks.filter(item => {
		// 	return this.props.task.taskDate < 
		// })
	}
	render(){
		return(
			<View style={{ flex: 1 }}>
				<Calendar 
					onDayPress={(day) => {
						this.populateTasks();
						console.log('tasks populated, starting change from ms');
						this.changeMillisecondsToDates(this.props.tasks);
						console.log('changed');
						this.selectDayHandler(day);
					}}
				/>

				<Key />
				<ToDoList
					data={this.props.selectedTasks}
				/>			
  			</View>
		)
	}
}

//TODO
const mapStateToProps = (state) => {
  const { tasks } = state.id;
  return { tasks }; 
};

export default connect(mapStateToProps, {
  userUpdate, populateTasksArray
})(ToDo);

				// <Calendar 
				// 	onDayPress={(day) => {this.props.setState({
				// 		selectedTasks: {}
				// 	});
				// }}
				// />
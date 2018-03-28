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
		console.log("selectDayHandler init, day:" + day);
		console.log(day.dateString);
		let today = new Date(day.timestamp);
		console.log("selectDayHandler init, day:" + day);
		var result = this.props.tasks.filter(item => {
			console.log("internal selectDayHandler filter, item: " + item);
			return item.taskDate.setHours(0,0,0,0) == today.setHours(0,0,0,0); 
		});
		console.log('result: ' + result);
		console.log('end reuslt');
		this.props.userUpdate({
			prop: 'selectedTasks', value: result
		});
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
						console.log('day :' + day);
						this.selectDayHandler(day);
						console.log(day);
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
  const { tasks, selectedTasks } = state.id;
  return { tasks, selectedTasks }; 
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
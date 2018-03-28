import React, { Component } from  'react';
import { Text, FlatList, View } from 'react-native';
import { Card } from 'react-native-elements';
import { ListItem } from './listItem';
import { connect } from 'react-redux';

class ToDoList extends Component{
	state ={
		selectedTasks: []
	};
	render(){
		if(this.props.selectedTasks != null){
			return(
				<FlatList
					data={this.props.selectedTasks}
					renderItem={({ item }) =>(<ListItem title={item.task}/>) } 
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


const mapStateToProps = (state) => {
  const { tasks, selectedTasks } = state.id;
  return { tasks, selectedTasks }; 
};

export default connect(mapStateToProps, {

})(ToDoList);
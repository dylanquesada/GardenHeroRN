import React, { Component } from 'react';
import { View, Alert, Text, Button, Picker, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from 'react-native-elements';
import { userUpdate, addNoteToFirebase } from '../actions/idActions';
import { connect } from 'react-redux';
import { Dropdown } from 'react-native-material-dropdown';

class Notes extends Component {
	onSubmitPress(){
		let health = this.props.plantHealth;
		let growth = this.props.growth;
		let good = this.props.didDoTasks;
		addNoteToFirebase("health: " + health + " growth: " + growth + " didDoTasks: " + good);
		Alert.alert(
					'Success!'
				);
		Actions.myGarden();
	}


  	render() {
	  	let plantHealth =[{
				value: 'Full, green (producing)',
			}, {
				value: 'Full, green (not producing)',
			},{
				value: 'Fair',
			},{
				value: 'Dry, brown, brittle',
			},{			
				value: 'Diseased, with holes',
			}];
		let heights =[{
				value: 'Negative growth',
			},{
				value: 'No change',
			}, {
				value: 'Less than an inch',
			},{
				value: 'A few inches',
			},{
				value: 'More than a few inches',
			},{			
				value: 'Exponential growth!',
			}];
		let toggle = [{
			value: 'Yes'
		},{
			value: 'No'
		}];
	    return (
	      <KeyboardAvoidingView
	      	style={{margin: 10}}
		    behavior="position"
	      >
	      	<TouchableWithoutFeedback
	      		onPress={Keyboard.dismiss}
	      	>
	      		<Card>
	      			<Text>Post a note here to log your progress and help us hone our care algorithms.</Text>
	      			<Text>Pick the description that best matches your garden's plant health.</Text>
	      			<Dropdown
						data={plantHealth}
					    selectedItem={this.props.plantHealth}
				        onChangeText={(selectedItem) => this.props.userUpdate({ prop: 'plantHealth', value: selectedItem})} >
					</Dropdown>
					<Text>Chart your plant's growth below.</Text>
	      			<Dropdown
						data={heights}
					    selectedItem={this.props.growth}
				        onChangeText={(selectedItem) => this.props.userUpdate({ prop: 'growth', value: selectedItem})} >
					</Dropdown>
					<Text>Did you follow your prescriptive care plan today?</Text>
					<Dropdown
						data={toggle}
					    selectedItem={this.props.didDoTasks}
				        onChangeText={(selectedItem) => this.props.userUpdate({ prop: 'didDoTasks', value: selectedItem})} >
					</Dropdown>
	      		</Card>
	      	</TouchableWithoutFeedback>
	      	<Card>
				    <Button
			  			onPress={this.onSubmitPress.bind(this)}
			    		title='Submit'
			    		style={{width: 50}}
			   		/>
		      	</Card>
	      </KeyboardAvoidingView>
	    )
	}
}

const mapStateToProps = (state) => {
  const { growth, plantHealth, didDoTasks } = state.id;
  return { growth, plantHealth, didDoTasks }; 
};

export default connect(mapStateToProps, {
  userUpdate
})(Notes);
import React, { Component } from 'react';
import { Button, Platform, Text, View, Picker, PickerIOS, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';
import { Card } from 'react-native-elements';
import { userUpdate, firebaseUpdate, readFirebase, writeFirebase } from '../actions/idActions';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Dropdown } from 'react-native-material-dropdown';

class PlanGarden extends Component{
	state = {
		modalVisible: false,
		height: 0,
		width: 0,
		zip: '',
	};

	onSubmitPress(){
		console.log("...send to firebaseUpdate...Actions.shoppingList()");
		Actions.selectPlants();
	}
	
	render() {
		let experienceData =[{
			value: 'Never gardened',
		}, {
			value: 'Gardened before',
		},{
			value: 'Gardened many times',
		},{
			value: 'A green thumb',
		}];
		let weeklyHoursData =[{
			value: '1 hour',
		}, {
			value: '2 hours',
		},{
			value: '3 hours',
		},{
			value: '4 or more hours',
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
	  					<Text>I have...</Text>
				        <Dropdown
				        	data={experienceData}
				        	selectedItem={this.props.experience}
				            onChangeText={(selectedItem) => this.props.userUpdate({ prop: 'experience', value: selectedItem})} >
				        </Dropdown>
				        <Text>I can devote...</Text>
				        <Dropdown
				        	data={weeklyHoursData}				  
				            selectedItem={this.props.weeklyHours}
				            onChangeText={(selectedItem) => this.props.userUpdate({ prop: 'weeklyHours', value: selectedItem})} >
				        </Dropdown>
				        <Text>Garden dimensions</Text>
				        <TextInput
				        	keyboardType='numeric'
				        	style={{height: 40, borderColor: 'gray', borderWidth: 1}}
	        				onChangeText={(length) => this.setState({length})}
	        				value={this.state.length}
				        />
				        <TextInput
				        	keyboardType='reg'
				        	style={{height: 40, borderColor: 'gray', borderWidth: 1}}
	        				onChangeText={(height) => this.setState({height})}
	        				value={this.state.height}
				        />
				        <Text>Zip code</Text>
				        <TextInput
				        	keyboardType='numeric'
				        	style={{height: 40, borderColor: 'gray', borderWidth: 1}}
	        				onChangeText={(zip) => this.setState({zip})}
	        				value={this.state.zip}
				        />
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
  const { experience, error, loading, numberOfPlants, email, weeklyHours } = state.id;
  return { experience, error, loading, numberOfPlants, email, weeklyHours }; 
};

export default connect(mapStateToProps, {
  userUpdate, firebaseUpdate, readFirebase
})(PlanGarden);
import React from "react";
import { View, Text, Button } from "react-native";
import { Actions } from 'react-native-router-flux';
import { logOutUser, popSettingsCard } from '../actions/idActions';
import { connect } from 'react-redux';

class Account extends React.Component{
	onLogOutPress(){
		const { error, loading } = this.props;
		this.props.logOutUser();
	}
	onSettingsPress(){
		this.popSettingsCard();
	}
	render(){
		return(
			<View style={{margin: 128}}>
				<Text></Text>
				<Button 
				onPress={this.onLogOutPress.bind(this)}
				title='Log Out'
				/>	
				<Button 
				onPress={this.onSettingsPress.bind(this)}
				title='Settings'
				/>			
  			</View>
		)
	}
}

const mapStateToProps = (state) => {
	const { error, loading } = state.id;
	return { error, loading };
};

export default connect(mapStateToProps, {
	logOutUser
})(Account);
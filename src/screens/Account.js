import React from "react";
import { View, Text, Button, Image } from "react-native";
import { Actions } from 'react-native-router-flux';
import { logOutUser, popSettingsCard } from '../actions/idActions';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';

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
			<View style={{margin: 10}}>
				<Card title='Account Options'>
					<Image
              			source={require('../pictures/farmer_with_laptop.jpg')}
              			style={{width: "100%", height: 250}}
            		/>
            		<View style={{ marginTop: 10}}>
					<Button 
					onPress={this.onLogOutPress.bind(this)}
					title='Log Out'
					/>
					</View>
					<View style={{ marginTop: 10}}>	
					<Button 
					onPress={this.onSettingsPress.bind(this)}
					title='Settings'
					/>	
					</View>		
				</Card>
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
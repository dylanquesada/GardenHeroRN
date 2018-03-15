import React from "react";
import { View, Text, Button } from "react-native";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class Account extends React.Component{
	onNextPress(){
		const { error, loading } = this.props;
		this.props.();
	}
	render(){
		return(
			<View style={{ flex: 1 }}>
				<Text>Pick the plants you'd like to grow</Text>

				<Button 
				onPress={this.onNextPress.bind(this)}
				title='Log Out'
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
import React from "react";
import { View, Text, Button } from "react-native";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { addPlant } from '../actions/idActions';

class AddPlant extends React.Component{
	render(){
		return(
			<View>
				<Text>AddPlant</Text>
			</View>
		)
	}
}


const mapStateToProps = (state) => {
	const { error, loading } = state.id;
	return { error, loading };
};

export default connect(mapStateToProps, {
	addPlant
})(AddPlant);
import React, { Component } from  'react';
import { View, Image, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';
import {
	addItem, 
	deleteItem, 
	selectItem, 
	deselectItem,
	deleteItemFromSelector 
} from '../actions/idActions';

class PlantSelector extends Component{
	state = { 
		borderToggle: false,
	};
	getBorder(){
		console.log("Get border call: " + this.state.borderToggle);
		if(this.state.borderToggle){
			console.log(this.state.borderToggle);
			return {
				borderColor: 'black', borderWidth: 2
			}
		}
		else{
			return {
				borderColor: 'white', borderWidth: 2
			}
		}
	}
	onPressButton(){
		
		this.setState({borderToggle: !this.state.borderToggle});
		console.log("pressed: visible: " + this.state.borderToggle);
		if(!this.state.borderToggle){
			this.props.addItem(this.props.name)
		}
		else{
			this.props.deleteItemFromSelector(this.props.name)
		}

	}
		// componentWillReceiveProps(nextProps){
		// 	console.log(this.state.borderToggle);

		// 	this.setState({borderToggle: nextProps.borderToggle})
		// }
	render(){
		return(
			<View style={this.getBorder()}>
				<TouchableHighlight
					onPress={
						this.onPressButton.bind(this)
					}>
					{this.props.image}
				</TouchableHighlight>
			</View>
		)
	}

}

const mapStateToProps = state => {
	const { array } = state.id;
	return { array };
};

export default connect(mapStateToProps, {
	deleteItemFromSelector, addItem
})(PlantSelector);
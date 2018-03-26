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

class AddPlantSelector extends Component{
	state = { 
		borderToggle: false,
	};
	getBorder(){
		if(this.props.selectedItem === this.props.name){
			console.log(this.props.selectedItem + " and " + this.props.name);
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
			console.log('selectItem :' + this.props.name);
			this.props.selectItem(this.props.name);
			console.log('selectItem called');
		}
		else{
			this.props.deselectItem();
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
	const { selectedItem } = state.id;
	return { selectedItem };
};

export default connect(mapStateToProps, {
	deleteItemFromSelector, addItem, selectItem, deselectItem
})(AddPlantSelector);
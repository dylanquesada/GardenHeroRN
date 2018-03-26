import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { addPlantToFirebase } from '../actions/idActions';
import AddPlantSelector from '../components/addPlantSelector';

class AddPlant extends React.Component{
	onAddPress(){
		let plantDate = new Date();
		plantDate = Date.now();
		console.log("PlantDate: " + plantDate);
		//console.log(this.props);
		const { selectedItem } = this.props;
		console.log("selectedItem: " + selectedItem);
		addPlantToFirebase(selectedItem, plantDate);
	}
	onDonePress(){
		Actions.myGarden();
	}

	render(){
		return(
			<View style={{ 
			flex: 1,
			alignContent: 'space-between',
			justifyContent: 'space-between',
			margin: 10
		}}>
				<View style={{ justifyContent: 'space-between'}}>
					<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
							<AddPlantSelector
								name="aubergine"
								image = {
									<Image 
										style={style.imageStyle}
										source={require('../pictures/aubergine.png')}
									/>
								}
							/>
							<AddPlantSelector
								name="cabbage"
								image = {
									<Image 
										style={style.imageStyle}
										source={require('../pictures/cabbage.png')}
									/>
								}
							/>							
							<AddPlantSelector
								name="cauliflower"
								image = {
									<Image 
										style={style.imageStyle}
										source={require('../pictures/cauliflower.png')}
									/>
								}
							/>						
					</View>
					<View style={{marginTop: 5, marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
							<AddPlantSelector
								name="onion"
								image = {
									<Image 
										style={style.imageStyle}
										source={require('../pictures/onion.png')}
									/>
								}
							/>
							<AddPlantSelector
								name="tomato"
								image = {
									<Image 
										style={style.imageStyle}
										source={require('../pictures/tomato.png')}
									/>
								}
							/>
							<AddPlantSelector
								name="bell-pepper"
								image = {
									<Image 
										style={style.imageStyle}
										source={require('../pictures/bell-pepper.png')}
									/>
								}
							/>			
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
							<AddPlantSelector
								name="lettuce"
								image = {
									<Image 
										style={style.imageStyle}
										source={require('../pictures/lettuce.png')}
									/>
								}
							/>	
							<AddPlantSelector
								name="carrot"
								image = {
									<Image 
										style={style.imageStyle}
										source={require('../pictures/plantprofiles.png')}
									/>
								}
							/>	
							<AddPlantSelector
								name="corn"
								image = {
									<Image 
										style={style.imageStyle}
										source={require('../pictures/corn.png')}
									/>
								}
							/>	
					</View>
				</View>
				<View>
					<Button
						onPress={this.onAddPress.bind(this)}
						title='Add'
					/>
					<Button
						onPress={this.onDonePress.bind(this)}
						title='Done'
					/>		
				</View>					
  			</View>
		)
	}
}


const mapStateToProps = (state) => {
	const { error, loading, selectedItem } = state.id;
	return { error, loading, selectedItem };
};

export default connect(mapStateToProps, {
	addPlantToFirebase
})(AddPlant);

let style = StyleSheet.create({
    imageStyle: {
        width: 110, 
        height: 110,
        borderWidth: 1,
        flexDirection: 'row'
    },
});
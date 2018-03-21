import React from "react";
import { View, Text, Button, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';
import  PlantSelector  from '../components/plantSelector';

class SelectPlants extends React.Component{
	
	onSubmitPress(){
		Actions.shoppingList();
	}
	// componentWillReceiveProps(nextProps){
	// 			this.setState({borderToggle: nextProps.borderToggle})
 
	// }
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
							<PlantSelector
								name="aubergine"
								image = {
									<Image 
										style={style.imageStyle}
										source={require('../pictures/aubergine.png')}
									/>
								}
							/>
							<PlantSelector
								name="cabbage"
								image = {
									<Image 
										style={style.imageStyle}
										source={require('../pictures/cabbage.png')}
									/>
								}
							/>							
							<PlantSelector
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
							<PlantSelector
								name="onion"
								image = {
									<Image 
										style={style.imageStyle}
										source={require('../pictures/onion.png')}
									/>
								}
							/>
							<PlantSelector
								name="tomato"
								image = {
									<Image 
										style={style.imageStyle}
										source={require('../pictures/tomato.png')}
									/>
								}
							/>
							<PlantSelector
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
							<PlantSelector
								name="lettuce"
								image = {
									<Image 
										style={style.imageStyle}
										source={require('../pictures/lettuce.png')}
									/>
								}
							/>	
							<PlantSelector
								name="carrot"
								image = {
									<Image 
										style={style.imageStyle}
										source={require('../pictures/plantprofiles.png')}
									/>
								}
							/>	
							<PlantSelector
								name="corn"
								image = {
									<Image 
										style={style.imageStyle}
										source={require('../pictures/corn.png')}
									/>
								}
							/>	
					</View>
					<Card>
						<Button 
							onPress={this.onSubmitPress.bind(this)}
							title='Submit'
							style={{ marginTop: 20}}
						/>
					</Card>
				</View>							
  			</View>
		)
	}
}

const mapStateToProps = (state) => {
	const { error, loading } = state.id;
	return { error, loading };
};

export default connect(mapStateToProps, {
	
})(SelectPlants);

let style = StyleSheet.create({
    imageStyle: {
        width: 110, 
        height: 110,
        borderWidth: 1,
        flexDirection: 'row'
    },
});
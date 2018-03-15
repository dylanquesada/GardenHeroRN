import React, {Component}from "react";
import { View, Text, StyleSheet } from "react-native";
import Carousel from 'react-native-snap-carousel';

export default class PlantProfiles extends Component{
	_renderItem ({item, index}){
		return(
			<View style={styles.slide}>
				<Text style={styles.title}>{ item.title }</Text>
			</View>
		);
	}
	render(){
		return(
			<Carousel
				ref={(c) => { this._carousel = c; }}
				data={[0, 1, 2, 3, 4]}
				renderItem={this._renderItem}
				sliderWidth={200}
				itemWidth={100}
			/>
		);
	}
}

let styles = StyleSheet.create({
  slide: {
    alignContent: 'space-between',
  },
  title:{
  	color: 'red'
  }  
});
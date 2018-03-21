import React, {Component}from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

export default class PlantProfiles extends Component{
	_renderItem ({item, index}){
		return(
      <Card>
  			<View style={styles.slide}>
  				<Text style={styles.title}>{ item.title }</Text>
  				<Image 
        				source={require('../pictures/account.png')}
        				style={{width: 99, height: 100, resizeMode: 'contain'}}
        			/>
  			</View>
      </Card>
		);
	}
	render(){
		let list = [
    {
        title: 'Tomatoes',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
    }
];
		return(
			<Carousel
				ref={(c) => { this._carousel = c; }}
				data={list}
				renderItem={this._renderItem}
				sliderWidth={300}
				itemWidth={100}
        itemHeight={500}
			/>

		);
	}
}

let styles = StyleSheet.create({
  slide: {
  	flex: 1,
    alignContent: 'space-between',
  },
  title:{
  	color: 'red'
  }  
});
import React, {Component}from "react";
import { View, Text, StyleSheet, Image, Dimensions, Platform } from "react-native";
import { Card } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

// function wp (percentage) {
//     const value = (percentage * viewportWidth) / 100;
//     return Math.round(value);
// }

// const slideHeight = viewportHeight * 0.36;
// const slideWidth = wp(75);
// const itemHorizontalMargin = wp(2);
export default class PlantProfiles extends Component{
	_renderItem ({item, index}){
		return(
      <Card style={styles.slide}>
  			<View>
  				{item.illustration}
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../pictures/sun.png')}
              style={styles.iconStyle}
            /><Text>{item.sun}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../pictures/watering-can.png')}
              style={styles.iconStyle}
            /><Text>{item.watering}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../pictures/thermometer.png')}
              style={styles.iconStyle}
            /><Text>{item.climate}</Text>
          </View>
  			</View>
      </Card>
		);
	}
	render(){
		let list = [
    {
        title: 'Tomatoes',
        watering: 'Needs to be watered 2x a week',
        sun: 'Requires full sun',
        climate: 'Grows best in warm climates',
        illustration: <Image 
          source={require('../pictures/tomato.png')}
          style={styles.pictureInternal}
        />
    },
    {
        title: 'Cabbage',
        watering: 'Needs to be watered 2x a week',
        sun: 'Requires full sun',
        climate: 'Grows best in warm climates',       
        illustration: <Image 
          source={require('../pictures/cabbage.png')}
          style={styles.pictureInternal}
        />
    },
    {
        title: 'Carrots',
        watering: 'Needs to be watered 2x a week',
        sun: 'Requires full sun',
        climate: 'Grows best in warm climates',        illustration: <Image 
          source={require('../pictures/plantprofiles.png')}
          style={styles.pictureInternal}
        />
    },
    {
        title: 'Bell-Peppers',
        watering: 'Needs to be watered 2x a week',
        sun: 'Requires full sun',
        climate: 'Grows best in warm climates',
        illustration: <Image 
          source={require('../pictures/bell-pepper.png')}
          style={styles.pictureInternal}
        />
    },
    {
        title: 'Eggplant',
        watering: 'Needs to be watered 2x a week',
        sun: 'Requires full sun',
        climate: 'Grows best in warm climates',
        illustration: <Image 
          source={require('../pictures/aubergine.png')}
          style={styles.pictureInternal}
        />
    },
    {
        title: 'Kale',
        watering: 'Needs to be watered 2x a week',
        sun: 'Requires full sun',
        climate: 'Grows best in warm climates',
        illustration: <Image 
          source={require('../pictures/lettuce.png')}
          style={styles.pictureInternal}
        />
    }
];
		return(
      <View style={{
        backgroundColor: 'white', 
        height: 550
      }}>
  			<Carousel       
  				ref={(c) => { this._carousel = c; }}
  				data={list}
          firstItem={0}
  				renderItem={this._renderItem}
  				sliderWidth={viewportWidth}
          sliderHeight={100}
  				itemWidth={viewportWidth - 100}
          enableSnap={true}          
  			/>
      </View>

		);
	}
}

let styles = StyleSheet.create({
  slide: {
  	alignContent: 'space-between',
    height: 500, 
    width: viewportWidth
  },

  title:{
  	color: 'black'
  }, 
  pictureInternal: {
    width: 150,
    height: 150
  }, 
  iconStyle: {
    height: 50,
    width: 50
  } 
});
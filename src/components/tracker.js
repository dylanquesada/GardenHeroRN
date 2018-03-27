import React from 'react';
import * as Progress from 'react-native-progress';
import { View, Text } from 'react-native';

export default class TrackerElement extends React.Component{
	render(){
		return(
			<View>
				<Text>{this.props.type}</Text>
				<Progress.Bar 
					progress={this.props.percentComplete}
					width={300} 
				/>
			</View>
		)
	}
}
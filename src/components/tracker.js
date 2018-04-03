import React from 'react';
import * as Progress from 'react-native-progress';
import { View, Text } from 'react-native';

export default class TrackerElement extends React.Component{
	render(){
		return(
			<View>
				<Text style={{fontWeight: 'bold', fontSize: 20}}>{this.props.type}</Text>
				<Progress.Bar 
					progress={this.props.percentComplete}
					width={325} 
				/>
			</View>
		)
	}
}
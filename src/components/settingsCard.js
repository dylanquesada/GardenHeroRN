import React from 'react';
import { Card } from 'react-native-elements';

export class settingsCard extends React.Component{

	render(){
		return(
			<Card>
				<Text>{this.props.}</Text>
			</Card>
		)
	}

}
import React from "react";
import { View, Text } from "react-native";

export default class Profile extends React.Component{
	constructor(props){
		super(props);
		
	}

	render(){
		return(
			<View style={{ flex: 1 }}>
				<Text>Profile</Text>			
  			</View>
		)
	}
}
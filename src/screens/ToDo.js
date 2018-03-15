import React from "react";
import { View, Text } from "react-native";

export default class ToDo extends React.Component{
	constructor(props){
		super(props);
		
	}

	render(){
		return(
			<View style={{ flex: 1 }}>
				<Text>Todo</Text>			
  			</View>
		)
	}
}
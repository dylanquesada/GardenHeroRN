import React from "react";
import { View, Text, Button, WebView } from "react-native";

export default class TeachMe extends React.Component{
	render(){
		return(
				
				<WebView 
					source={{uri: 'https://www.bhg.com/gardening/vegetable/vegetables/tips-for-growing-healthy-tomatoes/'}}
					style={{ 
						marginBottom: 0,
						marginTop: 0 }}/>							
		)
	}
}
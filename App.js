import React from 'react';
import Index from './src/index';
//import store from './src/store';
import * as firebase from 'firebase';
import { StyleSheet, Text, View, Image, StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { FIREBASEAPIKEY, 
		AUTHDOMAIN, 
		DATABASEURL, 
		STORAGEBUCKET, 
		PROJECTID, 
		MESSAGINGSENDERID } from './src/components/APIKeysLocal';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers/';
import ReduxThunk from 'redux-thunk';

export default class App extends React.Component {

	componentWillMount(){
		firebase.initializeApp({
  			apiKey: FIREBASEAPIKEY,
  			authDomain: AUTHDOMAIN,
  			databaseURL: DATABASEURL,
  			projectId: PROJECTID,
  			storageBucket: STORAGEBUCKET,
  			messagingSenderId: MESSAGINGSENDERID
		});
		console.log('App mounted: Firebase initialized');
	}
  	render() {
  		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    	return (
      		<Provider store={store}>
            <View style={style.titleStyle}>
        		  <Index />
            </View>
      		</Provider>
      
   		);
	}
}

let style = StyleSheet.create({
        titleStyle: {
          flex: 1,          
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        }
    });
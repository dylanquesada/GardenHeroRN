import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export const PlantProfilesIcon = ({ selected, title }) => {
  return(
    <View style={style.tabView}>
      <Image 
      source={require('../pictures/plantprofiles.png')}
      style={{width: 40, height: 40, alignContent: 'center', resizeMode:'contain'}}
      />
      <Text>{title}</Text>
      </View>
    );
};

export const MyGardenIcon = ({ selected, title }) => {
  return(
    <View>
      <Image 
      source={require('../pictures/mygarden.png')}
      style={{width: 40, height: 40, alignContent: 'center'}}
      />
      <Text>{title}</Text>
      </View>
    );
};

export const ToDoIcon = ({ selected, title }) => {
  return(
    <View>
      <Image 
      source={require('../pictures/todo.png')}
      style={{width: 40, height: 40, alignContent: 'center'}}
      />
      <Text>{title}</Text>
      </View>
    );
};

export const TeachMeIcon = ({ selected, title }) => {
  return(
    <View style={style.tabView}>
      <Image 
      source={require('../pictures/teachme.png')}
      style={{width: 40, height: 40, alignContent: 'center', resizeMode: 'contain'}}
      />
      <Text>{title}</Text>
      </View>
    );
};

export const AccountIcon = ({ selected, title }) => {
  return(
    <View>
      <Image 
      source={require('../pictures/account.png')}
      style={{width: 40, height: 40, alignContent: 'center'}}
      />
      <Text>{title}</Text>
      </View>
    );
};

let style = StyleSheet.create({
  tabView: {
    alignContent: 'space-between',
  }  
});
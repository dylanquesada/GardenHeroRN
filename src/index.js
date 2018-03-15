import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Platform } from 'react-native';
import { Router, Scene, TabBar } from 'react-native-router-flux';
import { createStore } from 'redux';
import Login from './screens/Login';
import PageTwo from './screens/PageTwo';
import Account from './screens/Account';
import MyGarden from './screens/MyGarden';
import PlantProfiles from './screens/PlantProfiles';
import TeachMe from './screens/TeachMe';
import ToDo from './screens/ToDo';
import { PlantProfilesIcon, MyGardenIcon, ToDoIcon, TeachMeIcon, AccountIcon } from './components/tabIcons';


//<Scene key='login' component={Login} hideNavBar={true}/>
export default class Index extends React.Component {
  render() {
    return (      
      <Router>
        <Scene key='root' navBarStyle={style.titleStyle}>          
            
            <Scene 
              key="tabbar" 
              tabs 
              showLabel={false}
              tabBarStyle={style.tabBarStyle}
              tabBarPosition='bottom'
              hideNavBar={true}
              navBarStyle={style.titleStyle}
            >

              <Scene key="plantProfiles" title="P P" icon={PlantProfilesIcon}>

                <Scene 
                  key="plantProfiles"
                  component={PlantProfiles} 
                  title='PlantProfiles' 
                  showLabel={false}
                  initial />      
   
              </Scene>
              <Scene key="myGarden" title="My Garden" icon={MyGardenIcon}>

                <Scene 
                  key="myGarden"
                  component={MyGarden} 
                  title='MyGarden' 
                  initial />      
                <Scene
                  key="myGarden"
                  component={MyGarden}
                  title='MyGarden'/>    
              </Scene>
              <Scene key="toDo" title="To Do" icon={ToDoIcon}>

                <Scene 
                  key="toDo"
                  component={ToDo} 
                  title='ToDo' 
                  initial />      
                <Scene
                  key="toDo"
                  component={ToDo}
                  title='ToDo'/>    
              </Scene>
              <Scene key="teachMe" title="Teach Me" icon={TeachMeIcon}>

                <Scene 
                  key="teachMe"
                  component={TeachMe} 
                  title='TeachMe' 
                  initial />      
                <Scene
                  key="TeachMe"
                  component={TeachMe}
                  title='TeachMe'/>    
              </Scene>
              <Scene key="account" title="Account" icon={AccountIcon}>

                <Scene 
                  key="account"
                  component={Account} 
                  title='Account' 
                  initial />      
                <Scene
                  key="account"
                  component={Account}
                  title='Account'/>    
              </Scene>
            </Scene>
        </Scene>
      </Router>
    );
  }
}

let style = StyleSheet.create({
        tabBarStyle: {
            borderTopWidth : 1,
            borderColor    : 'white',
            backgroundColor: 'white',
            opacity        : 1,
            height         : Platform.OS === 'android' ? 75 : 60,
        },
        titleStyle: {
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        }
    });
import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Platform } from 'react-native';
import { Router, Scene, TabBar } from 'react-native-router-flux';
import { createStore } from 'redux';
import Login from './screens/Login';
import PageTwo from './screens/PageTwo';
import Account from './screens/Account';
import AddPlant from './screens/AddPlant';
import MyGarden from './screens/MyGarden';
import PlanGarden from './screens/PlanGarden';
import PlantProfiles from './screens/PlantProfiles';
import ShoppingList from './screens/ShoppingList';
import SelectPlants from './screens/SelectPlants';
import TeachMe from './screens/TeachMe';
import ToDo from './screens/ToDo';
import { PlantProfilesIcon, MyGardenIcon, ToDoIcon, TeachMeIcon, AccountIcon } from './components/tabIcons';


//<Scene key='login' component={Login} hideNavBar={true}/>
export default class Index extends React.Component {
  render() {
    return (      
      <Router>
        <Scene key='root' navBarStyle={style.titleStyle}>          
            <Scene key='login' component={Login} hideNavBar={true}/>
            <Scene 
              key="tabbar" 
              tabs 
              showLabel={false}
              tabBarStyle={style.tabBarStyle}
              tabBarPosition='bottom'
              hideNavBar={true}
              navBarStyle={style.titleStyle}
            >

              <Scene key="plantProfiles" title="Plant Facts" icon={PlantProfilesIcon}>

                <Scene 
                  key="plantProfiles"
                  component={PlantProfiles} 
                  title='Plant Profiles' 
                  showLabel={false}
                  initial />      
   
              </Scene>
              <Scene key="myGarden" title="My Garden" icon={MyGardenIcon}>

                <Scene 
                  key="myGarden"
                  component={MyGarden} 
                  title='My Garden' 
                  initial />      
                <Scene
                  key="myGarden"
                  component={MyGarden}
                  title='My Garden'/>    
              </Scene>
              <Scene key="toDo" title="To-Do" icon={ToDoIcon}>

                <Scene 
                  key="toDo"
                  component={ToDo} 
                  title='Care Schedule' 
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
                  title='Teach Me' 
                  initial />      
                <Scene
                  key="Teach Me"
                  component={TeachMe}
                  title='Teach Me'/>    
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
            <Scene key="planGarden" component={PlanGarden} title="Plan My Garden" />
            <Scene key="shoppingList" component={ShoppingList} title="Shopping List" /> 
            <Scene key="selectPlants" component={SelectPlants} title="Select Plants" />
            <Scene key="addPlant" component={AddPlant} title="Add Plant" /> 
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
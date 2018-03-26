import React, { Component } from 'react';
import { View, Text, Button, Picker, ScrollView, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { userUpdate, firebaseUpdate, getUserName, readFirebase, writeFirebase, userUpdateInternal, addPlant } from '../actions/idActions';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Card } from 'react-native-elements';
import TrackerElement from '../components/tracker';


class MyGarden extends Component {

  onAddPlantPress(){
    Actions.addPlant();
  }
  async onNextPress(){
    let test = await getUserName();
    console.log("pressed button: " + test);
    writeFirebase("users/EPEDSx1cC7h3bze4tbkur6B0A122/demographics/", "numb", "1");
    //this.props.firebaseUpdate();
  }
  async onReadPress(){
    var x = await readFirebase("users/EPEDSx1cC7h3bze4tbkur6B0A122/demographics/numb");
    console.log("x: " + x);
    this.props.userUpdate({ prop: "numberOfPlants", value: x});
  }
  onNavPress(){
    console.log("Actions.planGarden();");
    Actions.planGarden();
  }
  renderPlantButtonOrLoading(){
    if(this.props.loading){
      return(
        <ActivityIndicator 
          size='large'
          color='black'
        />
      )
    }
    else {
      return(
        <Button
          onPress={this.onAddPlantPress.bind(this)}
          title='Add a plant'
        />
      )
    }
  }
  renderTrackerOrPrompt(){
    this.props.numberOfPlants = 2;
    let garden = [{
      type: "tomato",
      percentComplete: 0.6
    },{
      type: "potato",
      percentComplete: 0.2
    }];
    if(this.props.numberOfPlants < 1){
      return(
        <View> 
          <Card>
            <Text> This is where your garden tracker lives. Plant some crops to track their progress here! </Text>
          </Card>
        </View>
      )
    }
    else{      
      var plants = [];
      for(let i = 0; i <= 1; i++){
        plants.push(
          <View key={i}>
            <TrackerElement
              type={garden[i].type}
              percentComplete={garden[i].percentComplete}
            />
          </View>
        )

      }
      return(
        <View>
          {plants}
        </View>
      )
    }
  }
  render() {
    return (
      <View style={{margin: 10}}>
        {this.renderTrackerOrPrompt()}
        {this.renderPlantButtonOrLoading()}
        <Text>numberOfPlants: {this.props.numberOfPlants}!</Text>
        <Button 
          onPress={this.onNavPress.bind(this)}
          title='To Plan Garden -->'
        />        
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { experience, error, numberOfPlants, email } = state.id;
  return { experience, error, numberOfPlants, email }; 
};

export default connect(mapStateToProps, {
  userUpdate, firebaseUpdate, readFirebase, userUpdateInternal
})(MyGarden);
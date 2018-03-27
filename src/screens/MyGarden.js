import React, { Component } from 'react';
import { View, Text, Button, Picker, ScrollView, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { 
  getNumberOfPlants, 
  userUpdate, 
  firebaseUpdate, 
  getUserName, 
  readFirebase, 
  writeFirebase, 
  userUpdateInternal, 
  addPlant,
  populateGarden
   } from '../actions/idActions';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Card } from 'react-native-elements';
import TrackerElement from '../components/tracker';


class MyGarden extends Component {
  state = {
    numberOfPlants: 0,
    garden: []
  };
  async componentDidMount(){    
    let plants = await getNumberOfPlants();
    console.log('plants: '+ plants);
    this.props.userUpdate({
      prop: 'numberOfPlants', value: plants
    });
    let newGarden = await populateGarden();
    this.props.userUpdate({
      prop: 'garden', value: newGarden
    });
  }
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
  async pop(){
    console.log("async pop: ");

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
    if(this.props.garden.length < 1){
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
      for(let i = 0; i < this.props.garden.length; i++){
        plants.push(
          <View key={i}>
            <TrackerElement
              type={this.props.garden[i].type}
              percentComplete={this.props.garden[i].percentComplete}
            />
          </View>
        )

      }
      return(
        <View>
          <Card title='Garden Tracker'>
            {plants}
          </Card>
        </View>
      )
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={{margin: 10}}>
          {this.renderTrackerOrPrompt()}
          <View style={{ marginTop: 20}}>
            <Text>numberOfPlants: {this.props.numberOfPlants}!</Text>
            {this.renderPlantButtonOrLoading()}
            <View style={{ marginTop: 10}}>
              <Button 
                onPress={this.onNavPress.bind(this)}
                title='To Plan Garden -->'
              />   
            </View>
          </View>     
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  const { experience, error, numberOfPlants, email, garden } = state.id;
  return { experience, error, numberOfPlants, email, garden }; 
};

export default connect(mapStateToProps, {
  userUpdate, firebaseUpdate, readFirebase, userUpdateInternal, getNumberOfPlants, populateGarden
})(MyGarden);
import React, { Component } from 'react';
import { View, Text, Button, Picker, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { userUpdate, firebaseUpdate, getUserName, readFirebase, writeFirebase, userUpdateInternal } from '../actions/idActions';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Card } from 'react-native-elements';
import TrackerElement from '../components/tracker';


class MyGarden extends Component {


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
        <TrackerElement 
          type="test"
          percentComplete={0.5}
        />
        <Picker
            selectedValue={this.props.experience}
            onValueChange={(itemValue, itemIndex) => this.props.userUpdate({ prop: 'experience', value: itemValue})} >
            <Picker.Item label="None" value="java" />
            <Picker.Item label="Years" value="years" />
        </Picker>
        <Button 
        onPress={this.onNextPress.bind(this)}
        title='log the user from db'
        />
                <Button 
        onPress={this.onReadPress.bind(this)}
        title='read numb'
        />
        <Text>numberOfPlants: {this.props.numberOfPlants}!</Text>        
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { experience, error, loading, numberOfPlants, email } = state.id;
  return { experience, error, loading, numberOfPlants, email }; 
};

export default connect(mapStateToProps, {
  userUpdate, firebaseUpdate, readFirebase, userUpdateInternal
})(MyGarden);
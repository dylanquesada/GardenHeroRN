import React, { Component } from 'react';
import { Platform, StatusBar, View, Text, Image, Keyboard, StyleSheet, TouchableWithoutFeedback, KeyboardAvoidingView, Button } from 'react-native';
import { FormLabel, FormInput, Card } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { setID, logInUser, signUpUser, userUpdate } from '../actions/idActions';
import { connect } from 'react-redux';

class Login extends Component {
  	onLoginPress(){
      const { email, password } = this.props;
      this.props.logInUser({ email, password });
  		Keyboard.dismiss();
  	}

  	onSignUpPress(){
  		this.props({loading: true});
  		const{email, password} = this.props;

  	}

    renderButtonOrLoading(){
    if(this.props.loading){
      return(
        <View> 
          <Text>Loading...</Text>
        </View>
      )
    }
    return(
      <View style={{ alignContent: 'space-between'}}>
        <Button
          onPress={this.onLoginPress.bind(this)}
          title='Login'/> 
        <Button
          onPress={this.onSignUpPress.bind(this)}
          title='Sign up'/>
        </View>
      )
    }

  render() {
  	return (
      <KeyboardAvoidingView
      behavior="position"> 
      <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}>     
        <View style={style.headerStyle}>
            <Image
              source={require('../pictures/Garden+Hero+Portfolio+Image.png')}
              style={{width: "100%", height: "48%"}}
            />
          <Card>
          <FormLabel>Email</FormLabel>
          <FormInput 
            placeholder="email@example.com" 
            value={this.props.email}
            onChangeText={value => this.props.userUpdate({ prop: 'email', value})}
            keyboardType="email-address" />
          <FormLabel>Password</FormLabel>
          <FormInput 
            secureTextEntry
            placeholder="********" 
            value={this.props.password}
            onChangeText={value => this.props.userUpdate({ prop: 'password', value})} />
            {this.renderButtonOrLoading()}
            </Card>
        </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

let style = StyleSheet.create({
        headerStyle: {
          marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20
        }
    });

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.id;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
 logInUser, signUpUser, userUpdate 
})(Login);
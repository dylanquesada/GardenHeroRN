// "hideNavBar" is not a valid style property.
// StyleSheet navBarStyle: {
//   "hideNavBar": true
// }
// Valid style props: [
//   "alignContent",
//   "alignItems",
//   "alignSelf",
//   "aspectRatio",
//   "backfaceVisibility",
//   "backgroundColor",
//   "borderBottomColor",
//   "borderBottomEndRadius",
//   "borderBottomLeftRadius",
//   "borderBottomRightRadius",
//   "borderBottomStartRadius",
//   "borderBottomWidth",
//   "borderColor",
//   "borderEndColor",
//   "borderEndWidth",
//   "borderLeftColor",
//   "borderLeftWidth",
//   "borderRadius",
//   "borderRightColor",
//   "borderRightWidth",
//   "borderStartColor",
//   "borderStartWidth",
//   "borderStyle",
//   "borderTopColor",
//   "borderTopEndRadius",
//   "borderTopLeftRadius",
//   "borderTopRightRadius",
//   "borderTopStartRadius",
//   "borderTopWidth",
//   "borderWidth",
//   "bottom",
//   "color",
//   "decomposedMatrix",
//   "direction",
//   "display",
//   "elevation",
//   "end",
//   "flex",
//   "flexBasis",
//   "flexDirection",
//   "flexGrow",
//   "flexShrink",
//   "flexWrap",
//   "fontFamily",
//   "fontSize",
//   "fontStyle",
//   "fontVariant",
//   "fontWeight",
//   "height",
//   "includeFontPadding",
//   "justifyContent",
//   "left",
//   "letterSpacing",
//   "lineHeight",
//   "margin",
//   "marginBottom",
//   "marginEnd",
//   "marginHorizontal",
//   "marginLeft",
//   "marginRight",
//   "marginStart",
//   "marginTop",
//   "marginVertical",
//   "maxHeight",
//   "maxWidth",
//   "minHeight",
//   "minWidth",
//   "opacity",
//   "overflow",
//   "overlayColor",
//   "padding",
//   "paddingBottom",
//   "paddingEnd",
//   "paddingHorizontal",
//   "paddingLeft",
//   "paddingRight",
//   "paddingStart",
//   "paddingTop",
//   "paddingVertical",
//   "position",
//   "resizeMode",
//   "right",
//   "rotation",
//   "scaleX",
//   "scaleY",
//   "shadowColor",
//   "shadowOffset",
//   "shadowOpacity",
//   "shadowRadius",
//   "start",
//   "textAlign",
//   "textAlignVertical",
//   "textDecorationColor",
//   "textDecorationLine",
//   "textDecorationStyle",
//   "textShadowColor",
//   "textShadowOffset",
//   "textShadowRadius",
//   "tintColor",
//   "top",
//   "transform",
//   "transformMatrix",
//   "translateX",
//   "translateY",
//   "width",
//   "writingDirection",
//   "zIndex"
// ]

// const mapStateToProps = (state) => {
//   const {
//     id, user
//   } = state.id
//   return{
//     id, user
//   };
// };

// export default connect(mapStateToProps, {setID})(MyGarden);

// const estLink = () => {
//   const {currentUser} = firebase.auth();
//   userID = currentUser.uid;
// }

// const userID = '11';

// //const {currentUser} = firebase.auth();
// //userID = currentUser.uid;
// //const userID = firebase.auth().currentUser.uid;

//         {console.log('we innit: ', userID)}
//         {estLink()}
//         {console.log(userID)

//           export const updateFirebase= () => {
//   return(dispatch) => {
//     dispatch({ type: 'UPDATE_FIREBASE' });
//     console.log("toes");
//       .then(() => signOutSuccess(dispatch));
//         .catch(() => signOutFail(dispatch));
//   };
// };
// const updateFirebaseFail = (dispatch) => {
//   dispatch( {type: "UPDATE_FIREBASE_FAIL", payload: "Update FB Failed"});
// };


// export const userUpdate = ({ prop, value }) => {
//   return(dispatch) => {
//     dispatch({
//       type: 'USER_UPDATE',
//       payload: { prop, value }
//     });
//     console.log(value);
//   };
// };

// const readFirebase = ({prop, })

class PlanGarden extends Component{
	state = {
		modalVisible: false,
	};

	setModalVisible(visible){
		this.setState({modalVisible: visible});
	}

	render() {
    	return (
	      	<View style={{margin: 10}}>
	      		<Modal
	      			animationType="slide"
	      			transparent={false}
	      			visible={this.state.modalVisible}
	      			onRequestClose={() => {
	      				console.log("modal closed, experience.state: (unimplemented)");
	      				this.setState({modalVisible: visible});
	      			}}
	      		>
	      			<Card>
				        <Picker
				            selectedValue={this.props.experience}
				            onValueChange={(itemValue, itemIndex) => this.props.userUpdate({ prop: 'experience', value: itemValue})} >
				            <Picker.Item label="None" value="java" />
				            <Picker.Item label="Years" value="years" />
				            <Picker.Item label="Years" value="years" />
				            <Picker.Item label="Years" value="years" />
				        </Picker>
				        <TouchableHighlight
				        	onPress={() => {
				        		this.setModalVisible(!this.state.modalVisible);
				        	}}>
			            	<Text>Hide Modal!</Text>
			            </TouchableHighlight>
		            </Card>
		        </Modal>
		        <TouchableHighlight
          			onPress={() => {
            			this.setModalVisible(true);
          			}}>
          			<Text>Show Modal</Text>
        		</TouchableHighlight>        
	      </View>
    	)
  	}
}
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

// <TouchableHighlight
						// style={this.getStyle.bind(this)} 
						// selected={false}
						// 	onPress={() => {
						// 		this.onPressImage(!this.props.styleToggle);
						// 	}}>
						// 	<Image
						// 		style={style.imageStyle}
						// 		source={require('../pictures/aubergine.png')}
						// 	/>
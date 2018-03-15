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
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const addItem = (itemName) => {
	return {
		type: 'ADD_ITEM_TO_LIST',
		itemName: itemName
	};
};

export const deleteItem = () => {
	return { 
		type: 'DELETE_ITEM_FROM_LIST'
	};
};

export const selectItem = (name) => {
	return {
		type: 'SELECT_ITEM',
		itemName: name
	};
};

export const deselectItem = () => {
	return{
		type: 'DESELECT_ITEM'
	};
};

export const deleteItemFromSelector = (name) => {
	return {
		type: 'DELETE_ITEM_WITH_NAME',
		itemName: name
	};
};

export async function readFirebase(path){
	var data = await firebase.database().ref(path).once('value')
		.then(function(dataSnapshot){
			value = dataSnapshot.val();			
		});
		return value;
}

export function writeFirebase(path, prop, value){
	console.log("path: " + path);
	console.log("prop: " + prop);
	console.log("value: " + value);
	firebase.database().ref(path).set({
		[prop]: value
	});
}

export async function getUserName(){
	const { currentUser } = await firebase.auth();
	console.log(currentUser);
	let result = currentUser.uid;
	console.log(result);
	return result;
}

export const logOutUser= () => {
	return(dispatch) => {
		dispatch({ type: 'LOG_OUT_USER' });
		firebase.auth().signOut()
			.then(() => signOutSuccess(dispatch))
				.catch(() => signOutFail(dispatch))
	};
};
export const logInUser=({ email, password}) => {
	return(dispatch) => {
		dispatch({ type: 'LOGIN_USER' });
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))
			.catch(() => loginUserFail(dispatch));
	};
};

export const signUpUser=({ email, password}) => {
	return(dispatch) => {
		dispatch({ type: 'SIGN_UP_USER' });
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => signUpUserSuccess(dispatch, user))
			.catch(() => signUpUserFail(dispatch));
	};
};


export const userUpdate = ({ prop, value }) => {
	console.log('prop: ' + prop);
	console.log('value: ' + value);
	return(dispatch) => {
		dispatch({
			type: 'USER_UPDATE',
			payload: { prop, value }
		});
	};
};


const signOutFail = (dispatch) => {
	dispatch( {type: "SIGN_OUT_FAIL", payload: "Log out failed"});
};

const signOutSuccess = (dispatch) => {
	dispatch( { type: "SIGN_OUT_SUCCESS"});
	Actions.login();
};

const loginUserSuccess = (dispatch, user) => {
	dispatch( {type: "LOGIN_USER_SUCCESS", payload: user});
	Actions.myGarden();
};

const loginUserFail = (dispatch) => {
	dispatch( {type: "LOGIN_USER_FAIL", payload: "Incorrect email / password combination"});
};

const readFirebaseSuccess = (prop, value) => {
	return(dispatch) => {
		dispatch({ type: "READ_FIREBASE_SUCCESS", payload: { prop, value }});
		console.log(value);
	};
};

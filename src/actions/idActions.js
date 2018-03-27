import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export function addItem(itemName){
	return(dispatch) => {
		dispatch({
			type: 'ADD_ITEM_TO_LIST',
			itemName: itemName
		});
	};
};

export async function addPlantToFirebase(name, date){
	var db = firebase.database();
	let userID = await getUserName();
	let path = 'users/' + userID + '/garden/plants/0';
	console.log("path: " + path);
	var numberOfPlants = await readFirebase(path);
	console.log("numberOfPlants.numberOfPlants: " + numberOfPlants.numberOfPlants);
	console.log("Path: " + path);
	numberOfPlants = numberOfPlants.numberOfPlants;
	numberOfPlants = parseInt(numberOfPlants);
	numberOfPlants += 1;
	console.log('numberOfPlants: ' + numberOfPlants);
	path = userID + '/garden/plants/' + numberOfPlants.toString();
	console.log("path before first write: " + path);
	console.log('users/' + userID + '/garden/plants/0');
	db.ref('users/' + userID + '/garden/plants/0').set({
		numberOfPlants: (numberOfPlants).toString()
	});
	db.ref('users/' + userID + '/garden/plants/'+ (numberOfPlants).toString()).set({
		name: name,
		plantDate: date
	});
	return(dispatch) => {
		dispatch({
			type: 'ADD_PLANT_TO_FIREBASE'
		});
	};
};

export function deleteItem(){
	return(dispatch) => {
		dispatch({ 
			type: 'DELETE_ITEM_FROM_LIST'
		});
	};
};

export function selectItem(name){
	return(dispatch) => {
		dispatch({
			type: 'SELECT_ITEM',
			itemName: name
		});
	};
};

export function deselectItem(){
	return(dispatch) => {
		dispatch({
			type: 'DESELECT_ITEM'
		});
	};
};

export function deleteItemFromSelector(name){
	return(dispatch) => {
		dispatch({
			type: 'DELETE_ITEM_WITH_NAME',
			itemName: name });
	};
};

export async function getNumberOfPlants(){
	var db = firebase.database();
	let userID = await getUserName();
	var result = await readFirebase('users/' + userID + '/garden/plants/0');
	result = result.numberOfPlants;
	console.log('result: ' + result);
	return result;
}

export async function readFirebase(path){
	var data = await firebase.database().ref(path).once('value')
		.then(function(dataSnapshot){
			value = dataSnapshot.val();			
		});
		return value;
}

export async function populateGarden(){
	let today = Date.now();
	let twentyOneDays = 1814400000;
	console.log('populateGarden run, today in milliseconds since 1970: ' + today);
	var db = firebase.database();
	console.log("step 2");
	let userID = await getUserName();
	console.log("step 3");
	let numberOfPlants = await getNumberOfPlants();
	console.log("step 4");
	var garden = await readFirebase('users/' + userID + '/garden');
	console.log('loop start:');
	let newGarden =[];
	for(i = 1; i <= numberOfPlants; i++){
		newGarden.push({
			type: garden.plants[i].name,
			percentComplete: ((today - garden.plants[i].plantDate) / twentyOneDays)
		});
		console.log("i name: " + garden.plants[i].name);
		console.log("i plantDate: " + garden.plants[i].plantDate);
		console.log("percentComplete: " + ((today - garden.plants[i].plantDate) / twentyOneDays));
	}
	console.log(newGarden);
	return newGarden;
}

function writeFirebase(path, prop, value){
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
			.then(() => signUpUserSuccess())
			.catch(() => signUpUserFail());
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

async function signUpUserSuccess(){
	var db = firebase.database();
	let userID = await getUserName();
	db.ref('users/' + userID + '/garden/plants/0').set({
		numberOfPlants: 0
	});
	Actions.myGarden();
}
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

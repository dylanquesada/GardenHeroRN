
export default (state={
	email: '',
	password: '',
	id: null,
	error: '',
	loading: false,
	experience: '',
	numberOfPlants: 0
	 }, action) => {
	console.log(action);
	switch(action.type) {
		case  'LOGIN_USER_SUCCESS':
			return   {...state, user: action.payload};
			break;
		case  'LOGIN_USER':
			return   {...state, loading: true};
			break;			
		case  'LOGIN_USER_FAIL':
			return   {...state, loading: false, error: action.payload};
			break;
		case 'READ_FIREBASE_SUCCESS':
			return {...state, [action.payload.prop]: action.payload.value};
			break;
		case 'UPDATE_FIREBASE':
			return {...state};
			break;		
		case 'UPDATE_FIREBASE_FAIL':
			return {...state, error: action.payload};
			break;			
		case 'USER_UPDATE':
			return   {...state, [action.payload.prop]: action.payload.value };
			break;
		case  'SIGN_UP_USER':
			return {...state, loading: true, error: ''};
			break;
		case  'LOG_OUT_USER':
			return {};
		}
	return state;
}
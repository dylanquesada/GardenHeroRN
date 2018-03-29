
export default (state={
	email: '',
	password: '',
	id: null,
	error: '',
	loading: false,
	experience: '',
	numberOfPlants: 0,
	weeklyHours: '',
	garden: [],
	array: [],
	selectedItem: null,
	tasks: [],
	plantHealth: '',
	growth: '',
	didDoTasks: ''
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
		case 'POPULATE_GARDEN':
			return   {...state, garden: action.payload };
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
		case 'ADD_ITEM_TO_LIST':
			return {...state, 
				array: state.array.concat({
				name: action.itemName
			})
		};
		case 'ADD_PLANT_TO_FIREBASE':
			return {
				...state, selectedItem: null
			};
		case 'DELETE_ITEM_FROM_LIST':
			return{
				...state,
				array: state.array.filter(item => {
					return array.name !== state.selectedItem.name;
				}),
				selectedItem: null
			};
		case 'DELETE_ITEM_WITH_NAME':
			return{
				...state,
				array: state.array.filter(item => {
					return item.name !== action.itemName;
				})
			};
		case 'SELECT_ITEM':
			return{
				...state,
				selectedItem: action.itemName
			};
		case 'DESELECT_ITEM':
			return{
				...state,
				selectedItem: null
			};
		}
	return state;
}
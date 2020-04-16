import {
	SearchActionInterface,
	SEARCH_INJECT, 
	SEARCH_DATA,
	SEARCH_DATA_CANCELLED,
	SEARCH_DATA_FULFILLED,
	SEARCH_DATA_REJECTED
} from 'actions/dataSearch'; 
import {
	ViewModel
} from 'models';
export type SearchState = {
	serachInput?: string, 
	data?: ViewModel,
	error?: string, 
	isSearchingData?: boolean,
	isDataExist?: boolean
}
export const dataSearchReducer = (
	state: SearchState = {
		serachInput: "", 
		data: [],
		error: "",
		isSearchingData: false,
		isDataExist: false  
	}, 
	action: SearchActionInterface 
) => {
	switch (action.type){
		case SEARCH_INJECT:
			return {...state, isSearchingData: true}; 
		case SEARCH_DATA: 
			return {...state, searchInput: action.payload.searchInput ,isSearchingData: true};
		case SEARCH_DATA_CANCELLED: 
			return {...state, isSearchingData: false};
		case SEARCH_DATA_FULFILLED:
			return {
				...state, 
				error: "", 
				data: action.payload.data, 
				isSearchingData: false,
				isDataExist: action.payload.isDataExist
			};
		case SEARCH_DATA_REJECTED:
			return {...state, isSearchingData: false, error: action.payload.error};
		default:
			return state;
	}
}


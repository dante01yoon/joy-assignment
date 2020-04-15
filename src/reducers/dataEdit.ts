import { 
	EditActionType,
	ADD_DATA,
	REMOVE_DATA,
	EDIT_DATA_CANCELLED,
	EDIT_DATA_REJECTED,
	EDIT_DATA_FULFILLED,
	FETCH_DATA_FULFILLED
} from 'actions'; 
import {
	ViewModel,
	NationalData
} from 'models';
export type EditState = {
	data?: ViewModel,
	error?: string,
	isEditingData?: boolean
}

export const dataEditReducer  = (
	state: EditState = {
		data: [],
		error: "", 
		isEditingData: false
	},
	action: EditActionType
) => {
	switch(action.type) {
		case ADD_DATA : 
			return { ...state, isEditingData: true };
		case REMOVE_DATA:
			return { ...state, isEditingData: true };
		case EDIT_DATA_FULFILLED: 
			return { error: "", data: action.payload, isFetchingData: false};
		case EDIT_DATA_CANCELLED:
			return { ...state, isEditingData: false};
		case EDIT_DATA_REJECTED:
			return { ...state, isEditingData: false, error: action.payload}; 
		default: 
			return state;
	}
}
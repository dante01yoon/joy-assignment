import {
	ActionType,
	FETCH_DATA,
	FETCH_DATA_CANCELLED,
	FETCH_DATA_FULFILLED,
	FETCH_DATA_REJECTED
} from 'actions'; 
import {
	ViewModel
} from 'models';
export type State = {
	data?: ViewModel,
	error?: string, 
	isFetchingData?: boolean
}
const datas = (
	state: State = {
		data: [],
		error: "",
		isFetchingData: false 
	}, 
	action: ActionType
) => {
	switch (action.type){
		case FETCH_DATA : 
			return {...state, isFetchingData: true};
		case FETCH_DATA_CANCELLED: 
			return {...state, isFetchingData: false};
		case FETCH_DATA_FULFILLED:
			return {error: "", data: action.payload, isFetchingData: false};
		case FETCH_DATA_REJECTED:
			return {...state, isFetchingData: false, error: action.payload};
	}
}
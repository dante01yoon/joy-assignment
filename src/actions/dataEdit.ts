import {
	NationalData,
	ViewModel
} from 'models'; 
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
export interface EditActionPayload {
	data?: ViewModel;
	error?: string;
}

export interface EditActionInterface {
	type: "ADD_DATA" | "REMOVE_DATA" | "EDIT_DATA_REJECTED" |
		"EDIT_DATA_CANCELLED" | "EDIT_DATA_CANCELLED" | "EDIT_DATA_FULFILLED";
	payload: EditActionPayload
}

export const ADD_DATA = "ADD_DATA"; 
export const REMOVE_DATA = "REMOVE_DATA"; 
export const EDIT_DATA_CANCELLED = "EDIT_DATA_CANCELLED"; 
export const EDIT_DATA_FULFILLED = "EDIT_DATA_FULFILLED"; 
export const EDIT_DATA_REJECTED = "EDIT_DATA_REJECTED"; 


export const cancelEdit: () => EditActionInterface = ()  => ({
	type: EDIT_DATA_CANCELLED,
	payload: {}
 });  

export const addData: ( ) =>  EditActionInterface = () => ({
	type: ADD_DATA,
	payload: {}
});
export const addDataAsync = (input: NationalData, originalData: ViewModel) => {
	return ( dispatch: ThunkDispatch<{},{},AnyAction>) => {
		const data = [...originalData, input] ;
		try{
			dispatch(addData());
			dispatch(editFulfilled(data)); 
		} catch(error){
			dispatch(editRejected(error));
		}
	}
}

export const removeData: ( ) =>  EditActionInterface = () => ({
	type: ADD_DATA,
	payload : { }
});
export const removeDataAsync = (input: NationalData, originalData: ViewModel) => {
	return ( dispatch: ThunkDispatch<{},{},AnyAction>) => {
		const data = originalData.filter((value) => {
			return value.alpha2Code !== input.alpha2Code
		});
		try{
			dispatch(removeData());
			dispatch(editFulfilled(data)); 
		} catch(error){
			dispatch(editRejected(error));
		}
	}
}
export const editFulfilled: (data: ViewModel ) => EditActionInterface = (data) => ({
	type: EDIT_DATA_FULFILLED,
	payload: { data }
});

export const editRejected: (error: string) => EditActionInterface = (error) => ({
	type: EDIT_DATA_REJECTED,
	payload: { error }
});


import {
	ViewModel,
	NationalData
} from 'models'; 
export interface EditActionType {
	type: "ADD_DATA" | "REMOVE_DATA" |  "EDIT_DATA_FULFILLED" | "EDIT_DATA_REJECTED" | "EDIT_DATA_CANCELLED";
	payload?:  ViewModel | string | NationalData
}

export const ADD_DATA = "ADD_DATA"; 
export const REMOVE_DATA = "REMOVE_DATA"; 
export const EDIT_DATA_CANCELLED = "EDIT_DATA_CANCELLED"; 
export const EDIT_DATA_FULFILLED = "EDIT_DATA_FULFILLED"; 
export const EDIT_DATA_REJECTED = "EDIT_DATA_REJECTED"; 

export type EDIT_TYPE = {
	type: "ADD_DATA" | "REMOVE_DATA" |  "EDIT_DATA_FULFILLED" | "EDIT_DATA_REJECTED" | "EDIT_DATA_CANCELLED"; 
}


export const cancelEdit: () => EDIT_TYPE = ()  => ({
	type: EDIT_DATA_CANCELLED
 });  

export const addData: ( payload: NationalData ) =>  EDIT_TYPE = (payload) => ({
	type: ADD_DATA,
	payload 
});

export const removeData: ( payload: NationalData ) =>  EDIT_TYPE = (payload) => ({
	type: ADD_DATA,
	payload 
});

export const editFulfilled: () => EDIT_TYPE = () => ({
	type: EDIT_DATA_FULFILLED,
});

export const editRejected: (payload: string) => EDIT_TYPE = (payload) => ({
	type: EDIT_DATA_REJECTED,
	payload
});


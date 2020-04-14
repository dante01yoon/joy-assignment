import {
	ViewModel
} from 'models';
export interface ActionType {
	type: "FETCH_DATA" | "FETCH_DATA_FULFILLED" | "FETCH_DATA_CANCELLED" | "FETCH_DATA_REJECTED",
	payload?: ViewModel | string 
}
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_FULFILLED = "FETCH_DATA_FULFILLED"; 
export const FETCH_DATA_CANCELLED = "FETCH_DATA_CANCELLED";
export const FETCH_DATA_REJECTED = "FETCH_DATA_REJECTED"; 

export type FETCH_TYPE = {
	type: "FETCH_DATA" |  "FETCH_DATA_FULFILLED" | "FETCH_DATA_CANCELLED" | "FETCH_DATA_REJECTED" ; 
};

export const cancelFetch: () => FETCH_TYPE = ()  => ({
	type: FETCH_DATA_CANCELLED
 });  

export const fetchData: () =>  FETCH_TYPE = () => ({
	type: FETCH_DATA
});

export const fetchFulfilled: (payload: ViewModel) => FETCH_TYPE = (payload) => ({
	type: FETCH_DATA_FULFILLED,
	payload 
});

export const fetchRejected: ( payload: string) => FETCH_TYPE = ( payload ) => ({
	type: FETCH_DATA_REJECTED,
	payload
});


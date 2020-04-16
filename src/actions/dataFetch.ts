import {
	ViewModel,
	NationalData
} from 'models';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchRequest } from 'apis';
import { 
	injectSearch,
	searchData, 
	searchFulfilled,
	searchRejected 
} from './dataSearch'; 
export interface ActionInterface {
	type: "FETCH_DATA" | "FETCH_DATA_FULFILLED" | "FETCH_DATA_CANCELLED" | "FETCH_DATA_REJECTED",
	payload?: ViewModel | string | undefined
}

// Actions
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_FULFILLED = "FETCH_DATA_FULFILLED"; 
export const FETCH_DATA_CANCELLED = "FETCH_DATA_CANCELLED";
export const FETCH_DATA_REJECTED = "FETCH_DATA_REJECTED"; 

export const cancelFetch: () => ActionInterface = ()  => ({
	type: FETCH_DATA_CANCELLED
 });  

export const fetchData: () =>  ActionInterface = ( payload = [] as ViewModel) => ({
	type: FETCH_DATA,
	payload : [] 
});

export const fetchDataAync = ()=> {
	return async (dispatch: ThunkDispatch<{},{},AnyAction>) => {
		try{
			dispatch(fetchData()); 		
			const [ , payload ] = await fetchRequest();
			if(payload) {
				dispatch(fetchFulfilled(payload));
				try{
					dispatch(injectSearch()); 
					dispatch(searchFulfilled(payload)); 
				} catch(error) {
					dispatch(searchRejected(error));
					console.error(error); 
				}
			}
		}catch (error) {
			dispatch(fetchRejected(error)); 
			console.error(error); 
		}
	}
}

export const fetchFulfilled: (payload: ViewModel) => ActionInterface = (payload) => ({
	type: FETCH_DATA_FULFILLED,
	payload 
});

export const fetchRejected: ( payload: string) => ActionInterface = ( payload ) => ({
	type: FETCH_DATA_REJECTED,
	payload
});


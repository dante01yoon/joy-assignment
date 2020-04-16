import {
	ViewModel
} from 'models';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export interface SearchActionPayload {
	data?: ViewModel;
	searchInput?: string;
	error?: string;
	isDataExist?: boolean;
}
export const initialPayload: SearchActionPayload = {
	data: [],
	searchInput: "",
	error: "",
	isDataExist: false
}
export interface SearchActionInterface {
	type: "SEARCH_INJECT" | "SEARCH_DATA" | "SEARCH_DATA_FULFILLED" | "SEARCH_DATA_CANCELLED" | "SEARCH_DATA_REJECTED",
	payload: SearchActionPayload
}

export const SEARCH_INJECT = "SEARCH_INJECT";
export const SEARCH_DATA = "SEARCH_DATA";
export const SEARCH_DATA_FULFILLED = "SEARCH_DATA_FULFILLED"; 
export const SEARCH_DATA_CANCELLED = "SEARCH_DATA_CANCELLED";
export const SEARCH_DATA_REJECTED = "SEARCH_DATA_REJECTED"; 

export const injectSearch: () => SearchActionInterface = ( ) => ({
	type: SEARCH_INJECT,
	payload: initialPayload 
});
export const searchDataAsync = (input: string, originalData: ViewModel) => {
	return (dispatch: ThunkDispatch<{},{},AnyAction>) => {
		const searchInput = input.trim();
		if(searchInput.length > 0 ) {
			const data = originalData.filter((value) => {
				return value.name.toLowerCase().indexOf(searchInput.toLowerCase()) >=0  
			});
			try{
				dispatch(searchData({searchInput}));
				dispatch(searchFulfilled({
					data,
					isDataExist: !!data.length 
				}));
			}	catch(error) {
				dispatch(searchRejected({error}));
				console.error(error);
			}
		}
		else {
			try{
				dispatch(searchData({searchInput}));
				dispatch(searchFulfilled({
					data:originalData,
					isDataExist: false 
				}));  		
			}catch (error) {
				dispatch(searchRejected({error})); 
				console.error(error); 
			}
		}
	}
}
export const cancelSearch: () => SearchActionInterface = ()  => ({
	type: SEARCH_DATA_CANCELLED,
	payload: initialPayload
 });  

export const searchData: (payload: SearchActionPayload ) =>  
	SearchActionInterface = ( payload = {} as SearchActionPayload) => (
		{
			type: SEARCH_DATA,
			payload
		}
	);

export const searchFulfilled: (payload: SearchActionPayload) => 
	SearchActionInterface = ( payload ) => (
		{
			type: SEARCH_DATA_FULFILLED,
			payload 
		}
	);

export const searchRejected: ( payload: SearchActionPayload) => 
	SearchActionInterface = ( payload ) => (
		{
			type: SEARCH_DATA_REJECTED,
			payload 
		}
	);


import {
	ViewModel,
	NationalData
} from 'models';
import { useDispatch } from 'react-redux'; 
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { dataEditReducer } from 'reducers/dataEdit';

export interface SearchActionPayload {
	data?: ViewModel | string | undefined;
	searchInput?: string;
	error?: string;
}
export interface SearchActionInterface {
	type: "SEARCH_INJECT" | "SEARCH_DATA" | "SEARCH_DATA_FULFILLED" | "SEARCH_DATA_CANCELLED" | "SEARCH_DATA_REJECTED",
	payload?: SearchActionPayload
}

// Actions
export const SEARCH_INJECT = "SEARCH_INJECT";
export const SEARCH_DATA = "SEARCH_DATA";
export const SEARCH_DATA_FULFILLED = "SEARCH_DATA_FULFILLED"; 
export const SEARCH_DATA_CANCELLED = "SEARCH_DATA_CANCELLED";
export const SEARCH_DATA_REJECTED = "SEARCH_DATA_REJECTED"; 

export const injectSearch: () => SearchActionInterface = ( ) => ({
	type: SEARCH_INJECT
});
export const searchDataAsync = (input: string, originalData: ViewModel) => {
	const dispatch = useDispatch(); 
	const searchInput = input.trim();
	if(searchInput.length > 0 ) {
		const data = originalData.filter((value,index) => {
			value.name.toLowerCase().indexOf(searchInput.toLowerCase()) >=0  
		});
		try{
			dispatch(searchData({searchInput}));
			dispatch(searchFulfilled({data}));
		}	catch(error) {
			dispatch(searchRejected({error}));
			console.error(error);
		}
	}
	else {
		try{
			dispatch(searchData({searchInput}));
			dispatch(searchFulfilled({data:originalData}));  		
		}catch (error) {
			dispatch(searchRejected({error})); 
			console.error(error); 
		}
	}
}
export const cancelSearch: () => SearchActionInterface = ()  => ({
	type: SEARCH_DATA_CANCELLED
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


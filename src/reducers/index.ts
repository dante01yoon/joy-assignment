import {combineReducers} from 'redux';
import { dataFetchReducer } from 'reducers/dataFetch';
import { dataEditReducer } from 'reducers/dataEdit'; 

export const rootReducer = () => combineReducers({
	data: dataFetchReducer, 
	edit: dataEditReducer
});

export type RootState = ReturnType<typeof rootReducer>; 

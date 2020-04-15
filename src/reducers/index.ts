import { Reducer, combineReducers} from 'redux';
import { dataFetchReducer } from 'reducers/dataFetch';
import { dataEditReducer } from 'reducers/dataEdit'; 
import { ModelState } from './dataFetch';
import { EditState } from './dataEdit';

export type RootState = {
	data: ModelState,
	edit: EditState
}

export const rootReducer = combineReducers({
	data: dataFetchReducer, 
	edit: dataEditReducer
});


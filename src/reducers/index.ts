import { Reducer, combineReducers} from 'redux';
import { dataFetchReducer } from 'reducers/dataFetch';
import { dataEditReducer } from 'reducers/dataEdit'; 
import { ModelState } from './dataFetch';
import { EditState } from './dataEdit';
import { SearchState, dataSearchReducer } from './dataSearch'; 

export type RootState = {
	data: ModelState,
	edit: EditState,
	search: SearchState
}

export const rootReducer = combineReducers({
	data: dataFetchReducer, 
	edit: dataEditReducer,
	search: dataSearchReducer
});


import React, { FC, ReactNode } from 'react'; 
import { applyMiddleware, createStore} from "redux";
import { Provider } from 'react-redux'; 
import { rootReducer } from 'reducers'; 
import thunk from 'redux-thunk'; 
import logger from 'redux-logger';
const store = createStore(rootReducer, applyMiddleware(
		thunk,
		logger
	)
);

export const JoyReduxProvider: FC<{
	children: ReactNode
}>
	= ({
		children
	}) => {
		return(
			<Provider store={store}>
				{children}
			</Provider>
		)	
	};


	
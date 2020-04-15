import React, { FC, ReactNode } from 'react'; 
import { applyMiddleware, createStore} from "redux";
import { Provider } from 'react-redux'; 
import { rootReducer } from 'reducers'; 
import thunk from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, 
	composeWithDevTools(applyMiddleware(thunk))
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


	
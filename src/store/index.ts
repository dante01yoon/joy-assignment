
import { applyMiddleware, createStore} from "redux";
import { createEpicMiddleware} from "redux-observable";
import logger from "redux-logger";

export const configureStore = () => {
	const store = createStore(
		rootReducer,
		applyMiddleware()
	) 
}